import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';
import Stripe from 'stripe';

export async function POST(req: Request) {
    const payload = await req.text();
    const signature = req.headers.get('Stripe-Signature');

    let event: Stripe.Event;

    try {
        if (!signature) throw new Error('No signature provided');
        if (!process.env.STRIPE_WEBHOOK_SECRET) {
            console.warn("MOCK PAYMENT ENV - STRIPE_WEBHOOK_SECRET missing, allowing event parse without signature verif");
            event = JSON.parse(payload) as Stripe.Event;
        } else {
            event = stripe.webhooks.constructEvent(
                payload,
                signature,
                process.env.STRIPE_WEBHOOK_SECRET
            );
        }
    } catch (err: any) {
        console.error(`Webhook signature verification failed: ${err.message}`);
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }

    try {
        // Handle the event
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object as Stripe.Checkout.Session;
                const userId = session.client_reference_id;
                const customerId = session.customer as string;

                if (userId) {
                    await prisma.user.update({
                        where: { id: userId },
                        data: {
                            stripeCustomerId: customerId,
                            subscriptionActive: true,
                        },
                    });
                }
                break;
            }
            case 'customer.subscription.deleted': {
                const subscription = event.data.object as Stripe.Subscription;
                const customerId = subscription.customer as string;

                await prisma.user.updateMany({
                    where: { stripeCustomerId: customerId },
                    data: {
                        subscriptionActive: false,
                    },
                });
                break;
            }
            default:
                // Ignore other events
                break;
        }

        return new NextResponse('Webhook processed successfully', { status: 200 });
    } catch (err: any) {
        console.error('Error processing webhook:', err);
        return new NextResponse('Error processing webhook', { status: 500 });
    }
}
