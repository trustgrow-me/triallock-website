"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PricingPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                {/* Navigation */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/10 px-6 py-4 lg:px-20 bg-background-light dark:bg-background-dark sticky top-0 z-50">
                    <Link href="/" className="flex items-center gap-3 text-primary dark:text-slate-100">
                        <div className="size-6">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_6_535)">
                                    <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
                                </g>
                                <defs><clipPath id="clip0_6_535"><rect fill="white" height="48" width="48"></rect></clipPath></defs>
                            </svg>
                        </div>
                        <h2 className="text-lg font-bold leading-tight tracking-tight">TrialLock</h2>
                    </Link>
                    <div className="flex flex-1 justify-end gap-8">
                        <div className="hidden md:flex items-center gap-9">
                            <Link className="text-sm font-medium hover:text-primary/70 transition-colors" href="/features">Features</Link>
                            <Link className="text-sm font-medium hover:text-primary/70 transition-colors" href="/security">Security</Link>
                            <Link className="text-sm font-medium hover:text-primary/70 transition-colors" href="/how-it-works">How it works</Link>
                        </div>
                        <Link href="/login" className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-slate-50 text-sm font-bold transition-all hover:bg-primary/90">
                            Sign In
                        </Link>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex flex-col items-center justify-center px-4 py-16 lg:py-24">
                    <div className="max-w-[960px] w-full flex flex-col gap-12">
                        {/* Hero Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center flex flex-col gap-4"
                        >
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-primary dark:text-slate-100">
                                Simple, honest pricing.
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                Stop unwanted subscription charges before they happen. One plan, everything you need to stay in control.
                            </p>
                        </motion.div>

                        {/* Pricing Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex justify-center"
                        >
                            <div className="w-full max-w-[480px] flex flex-col gap-6 rounded-xl border border-primary/10 bg-white dark:bg-slate-900 p-8 shadow-xl shadow-primary/5 hover:border-primary/30 transition-all">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xl font-bold text-primary dark:text-slate-100">Pro Plan</h2>
                                        <span className="text-slate-50 text-xs font-bold tracking-wider uppercase rounded-full bg-primary px-3 py-1">Most Popular</span>
                                    </div>
                                    <div className="flex items-baseline gap-1 mt-4">
                                        <span className="text-5xl font-black tracking-tight text-primary dark:text-slate-100">€9</span>
                                        <span className="text-lg font-semibold text-slate-500">/month</span>
                                    </div>
                                    <p className="text-sm text-slate-500 mt-2">Billed monthly. Cancel anytime with one click.</p>
                                </div>
                                <Link href="/login" className="flex w-full cursor-pointer items-center justify-center rounded-lg h-14 bg-primary text-slate-50 text-base font-bold transition-all hover:scale-[1.02] active:scale-[0.98]">
                                    Start 7-Day Free Trial
                                </Link>
                                <div className="flex flex-col gap-4 mt-2">
                                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-primary dark:text-slate-100 text-[20px]">check_circle</span>
                                        <span className="text-sm font-medium">1 Active Virtual Card</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-primary dark:text-slate-100 text-[20px]">check_circle</span>
                                        <span className="text-sm font-medium">Unlimited Regenerations</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-primary dark:text-slate-100 text-[20px]">check_circle</span>
                                        <span className="text-sm font-medium">Merchant Locking</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-primary dark:text-slate-100 text-[20px]">check_circle</span>
                                        <span className="text-sm font-medium">Instant Transaction Alerts</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-primary dark:text-slate-100 text-[20px]">check_circle</span>
                                        <span className="text-sm font-medium">Priority Support</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Comparison Table */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mt-12"
                        >
                            <h2 className="text-2xl font-bold text-primary dark:text-slate-100 mb-8 text-center md:text-left">Compare Plans</h2>
                            <div className="overflow-x-auto rounded-xl border border-primary/10 bg-white dark:bg-slate-900 shadow-sm">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-primary/5 dark:bg-primary/20">
                                            <th className="px-6 py-4 text-sm font-semibold text-primary dark:text-slate-100">Feature</th>
                                            <th className="px-6 py-4 text-sm font-semibold text-primary dark:text-slate-100">Free</th>
                                            <th className="px-6 py-4 text-sm font-semibold text-primary dark:text-slate-100">Pro</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-primary/10">
                                        <tr>
                                            <td className="px-6 py-5 text-sm font-medium text-slate-700 dark:text-slate-300">Active Virtual Cards</td>
                                            <td className="px-6 py-5 text-sm text-slate-500">None</td>
                                            <td className="px-6 py-5 text-sm font-bold text-primary dark:text-slate-100">1 Card</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-5 text-sm font-medium text-slate-700 dark:text-slate-300">Card Regenerations</td>
                                            <td className="px-6 py-5 text-sm text-slate-500">N/A</td>
                                            <td className="px-6 py-5 text-sm font-bold text-primary dark:text-slate-100">Unlimited</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-5 text-sm font-medium text-slate-700 dark:text-slate-300">Merchant Locking</td>
                                            <td className="px-6 py-5 text-sm text-slate-500">
                                                <span className="material-symbols-outlined text-slate-300 text-[20px]">close</span>
                                            </td>
                                            <td className="px-6 py-5 text-sm text-primary dark:text-slate-100">
                                                <span className="material-symbols-outlined font-bold text-[20px]">check</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-5 text-sm font-medium text-slate-700 dark:text-slate-300">Spend Limits</td>
                                            <td className="px-6 py-5 text-sm text-slate-500">View only</td>
                                            <td className="px-6 py-5 text-sm font-bold text-primary dark:text-slate-100">Custom Limits</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-5 text-sm font-medium text-slate-700 dark:text-slate-300">Support</td>
                                            <td className="px-6 py-5 text-sm text-slate-500">Knowledge Base</td>
                                            <td className="px-6 py-5 text-sm font-bold text-primary dark:text-slate-100">Priority 24/7</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Trusted By Section (Minimalist) */}
                        <div className="mt-8 py-10 border-t border-primary/10 text-center">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Trusted by 50,000+ Smart Savers</p>
                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
                                <div className="h-8 w-24 bg-primary/20 rounded flex items-center justify-center font-bold text-primary italic">VISA</div>
                                <div className="h-8 w-24 bg-primary/20 rounded flex items-center justify-center font-bold text-primary italic">Mastercard</div>
                                <div className="h-8 w-24 bg-primary/20 rounded flex items-center justify-center font-bold text-primary italic">Stripe</div>
                                <div className="h-8 w-24 bg-primary/20 rounded flex items-center justify-center font-bold text-primary italic">Plaid</div>
                            </div>
                        </div>

                        {/* FAQ Section (Minimalist) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12"
                        >
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold text-primary dark:text-slate-100">Can I cancel anytime?</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Yes, you can cancel your subscription from your dashboard with a single click. No hidden fees or retention calls.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold text-primary dark:text-slate-100">How does merchant locking work?</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Your card automatically locks to the first merchant it&apos;s used with. Any other merchant trying to charge that card will be declined.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold text-primary dark:text-slate-100">What happens after 7 days?</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">If you love TrialLock, do nothing and your Pro membership will continue for €9/month. We&apos;ll send you a reminder 2 days before the trial ends.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold text-primary dark:text-slate-100">Are my details safe?</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">We use AES-256 encryption and bank-level security protocols. Your real bank details are never shared with merchants.</p>
                            </div>
                        </motion.div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="mt-auto py-12 px-6 border-t border-primary/10 text-center flex flex-col items-center">
                    <p className="text-sm text-slate-500">© 2024 TrialLock. Secure payments for the subscription age.</p>
                    <div className="flex justify-center gap-4 mt-4">
                        <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-primary">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="text-sm text-slate-400 hover:text-primary">Terms of Service</Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}
