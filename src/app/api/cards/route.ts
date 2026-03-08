import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/session';

// Helper to generate a mock card
function generateMockCard(merchantName: string) {
    // 16-digit card number (mock starting with 4532)
    const number = '4532' + Math.floor(100000000000 + Math.random() * 900000000000).toString();

    // Expiry date (random 1-3 years from now)
    const year = new Date().getFullYear() + Math.floor(Math.random() * 3) + 1;
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');

    // 3-digit CVV
    const cvv = String(Math.floor(100 + Math.random() * 900));

    return { number, expiry: `${month}/${String(year).slice(-2)}`, cvv, merchant: merchantName };
}

export async function GET() {
    try {
        const session = await getSession();
        if (!session || !session.userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        // Fetch active card for user
        const card = await prisma.card.findFirst({
            where: { userId: session.userId, status: 'active' },
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json({ card });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await getSession();
        if (!session || !session.userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const user = await prisma.user.findUnique({ where: { id: session.userId } });
        if (!user || !user.subscriptionActive) {
            return NextResponse.json({ error: 'Active subscription required' }, { status: 403 });
        }

        const { merchantName } = await req.json();

        // The Rule: Max 1 active card. Deactivate any existing active cards.
        await prisma.card.updateMany({
            where: { userId: user.id, status: 'active' },
            data: { status: 'inactive' }
        });

        // Generate new card
        const cardDetails = generateMockCard(merchantName || 'Unnamed Merchant');

        const newCard = await prisma.card.create({
            data: {
                userId: user.id,
                cardNumber: cardDetails.number,
                expiry: cardDetails.expiry,
                cvv: cardDetails.cvv,
                merchant: cardDetails.merchant,
                status: 'active'
            }
        });

        return NextResponse.json({ card: newCard });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function PATCH() {
    try {
        const session = await getSession();
        if (!session || !session.userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        // Manually lock (deactivate) the current active card
        await prisma.card.updateMany({
            where: { userId: session.userId, status: 'active' },
            data: { status: 'inactive' }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
