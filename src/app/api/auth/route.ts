import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { login, logout } from '@/lib/session';

export async function POST(request: Request) {
    try {
        const { action, email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
        }

        if (action === 'register') {
            const existingUser = await prisma.user.findUnique({ where: { email } });
            if (existingUser) {
                return NextResponse.json({ error: 'User already exists' }, { status: 400 });
            }

            const passwordHash = await bcrypt.hash(password, 10);
            const user = await prisma.user.create({
                data: {
                    email,
                    passwordHash,
                },
            });

            await login(user.id);
            return NextResponse.json({ success: true, user: { id: user.id, email: user.email } });
        }

        if (action === 'login') {
            const user = await prisma.user.findUnique({ where: { email } });
            if (!user) {
                return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
            }

            const isValid = await bcrypt.compare(password, user.passwordHash);
            if (!isValid) {
                return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
            }

            await login(user.id);
            return NextResponse.json({ success: true, user: { id: user.id, email: user.email } });
        }

        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    } catch (error) {
        console.error('Auth error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function DELETE() {
    await logout();
    return NextResponse.json({ success: true });
}
