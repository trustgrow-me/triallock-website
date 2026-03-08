import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock_triallock_key', {
    // @ts-ignore - Ignore type error due to Stripe package version mismatch
    apiVersion: '2025-02-24.acacia',
    appInfo: {
        name: 'TrialLock App',
        version: '0.1.0',
    },
});
