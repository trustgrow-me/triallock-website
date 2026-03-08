"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                {/* Top Navigation */}
                <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 md:px-20 lg:px-40 py-4 bg-background-light dark:bg-background-dark sticky top-0 z-50">
                    <Link href="/" className="flex items-center gap-3 text-primary dark:text-slate-100">
                        <div className="size-8 bg-primary dark:bg-slate-100 rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-white dark:text-primary text-xl">shield_lock</span>
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-tight">TrialLock</h2>
                    </Link>
                    <div className="flex flex-1 justify-end gap-8 items-center">
                        <nav className="hidden md:flex items-center gap-8">
                            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="/how-it-works">How it works</Link>
                            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="/security">Security</Link>
                            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="/pricing">Pricing</Link>
                            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="/features">Features</Link>
                        </nav>
                        <Link href="/login" className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]">
                            Get Started
                        </Link>
                    </div>
                </header>

                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="px-6 md:px-20 lg:px-40 py-16 md:py-24">
                        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex flex-col gap-8"
                            >
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-slate-100 text-xs font-bold uppercase tracking-wider w-fit">
                                    Financial Protection
                                </div>
                                <h1 className="text-slate-900 dark:text-slate-100 text-5xl md:text-6xl font-black leading-tight tracking-tight">
                                    Simple 3-step protection
                                </h1>
                                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg">
                                    Experience true financial freedom. Use our virtual trial cards to sign up for any service without the fear of hidden renewal fees or unwanted charges.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/login" className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20">
                                        Create your first card
                                    </Link>
                                    <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                        Watch demo
                                    </button>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl opacity-50"></div>
                                <div className="relative w-full bg-slate-200 dark:bg-slate-800 rounded-3xl aspect-square overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-700/50 relative">
                                    <div className="absolute inset-0 flex flex-col p-8 justify-between bg-gradient-to-br from-primary to-[#1a2e4c] text-white">
                                        <div className="flex justify-between items-start">
                                            <span className="material-symbols-outlined text-4xl opacity-50">contactless</span>
                                            <span className="font-mono text-xl opacity-80 uppercase">Trial Card</span>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="text-2xl font-mono tracking-widest">**** **** **** 4829</div>
                                            <div className="flex gap-12">
                                                <div>
                                                    <div className="text-[10px] uppercase opacity-60">Expiry</div>
                                                    <div className="font-mono">08/26</div>
                                                </div>
                                                <div>
                                                    <div className="text-[10px] uppercase opacity-60">CVV</div>
                                                    <div className="font-mono">***</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-12 w-12 rounded-full border-2 border-white/20 ml-auto flex items-center justify-center">
                                            <span className="material-symbols-outlined">lock</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Detailed Step-by-Step */}
                    <section className="px-6 md:px-20 lg:px-40 py-20 bg-white dark:bg-slate-900/50">
                        <div className="max-w-[1200px] mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works in 3 steps</h2>
                                <p className="text-slate-600 dark:text-slate-400">Our process is designed to be seamless and high-security.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Step 1 */}
                                <motion.div whileHover={{ y: -10 }} className="group flex flex-col gap-6 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/20 transition-all hover:shadow-xl bg-background-light dark:bg-background-dark">
                                    <div className="size-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">add_card</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3">1. Generate a card</h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            Create a unique virtual card in seconds. Instantly get a CVV, card number, and expiry date specifically for your next trial.
                                        </p>
                                    </div>
                                </motion.div>
                                {/* Step 2 */}
                                <motion.div whileHover={{ y: -10 }} className="group flex flex-col gap-6 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/20 transition-all hover:shadow-xl bg-background-light dark:bg-background-dark">
                                    <div className="size-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">shopping_cart_checkout</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3">2. Start your trial</h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            Use your TrialLock card details at checkout for any subscription service like Netflix, Spotify, or SaaS tools.
                                        </p>
                                    </div>
                                </motion.div>
                                {/* Step 3 */}
                                <motion.div whileHover={{ y: -10 }} className="group flex flex-col gap-6 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/20 transition-all hover:shadow-xl bg-background-light dark:bg-background-dark">
                                    <div className="size-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">block</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3">3. Automatic block</h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            The card automatically declines any charges after the trial period ends. We stop the payment before it reaches your bank.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Under the Hood */}
                    <section className="px-6 md:px-20 lg:px-40 py-24 bg-primary text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                            <span className="material-symbols-outlined text-[400px]">security</span>
                        </div>
                        <div className="max-w-[1200px] mx-auto relative z-10">
                            <div className="max-w-2xl mb-16">
                                <h2 className="text-4xl md:text-5xl font-black mb-6">Under the hood</h2>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    Our proprietary merchant-locking technology ensures your real bank details are never exposed and controls are always in your hands.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="size-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            <span className="material-symbols-outlined">storefront</span>
                                        </div>
                                        <h3 className="text-2xl font-bold">Merchant Locking</h3>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed mb-6">
                                        Each card is cryptographically tied to the first merchant that charges it. If that merchant&apos;s database is leaked, your card cannot be used anywhere else.
                                    </p>
                                    <div className="h-40 bg-white/10 rounded-xl flex items-center justify-center border border-dashed border-white/20">
                                        <div className="flex items-center gap-8">
                                            <span className="material-symbols-outlined text-4xl">credit_card</span>
                                            <span className="material-symbols-outlined text-2xl opacity-50">arrow_forward</span>
                                            <span className="material-symbols-outlined text-4xl">cloud_done</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="size-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                                            <span className="material-symbols-outlined">filter_1</span>
                                        </div>
                                        <h3 className="text-2xl font-bold">One-card-at-a-time</h3>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed mb-6">
                                        To maintain maximum security, we enforce a strict policy per virtual card. This eliminates the risk of complex subscription chains or hidden double-billing.
                                    </p>
                                    <div className="h-40 bg-white/10 rounded-xl flex items-center justify-center border border-dashed border-white/20">
                                        <div className="relative">
                                            <div className="size-16 rounded-full bg-white/20 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-2xl">check</span>
                                            </div>
                                            <div className="absolute -right-4 -bottom-4 size-10 rounded-full bg-red-500/50 flex items-center justify-center border-4 border-primary">
                                                <span className="material-symbols-outlined text-xs">close</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="px-6 md:px-20 lg:px-40 py-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-[1200px] mx-auto bg-primary rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">Stop paying for forgotten trials.</h2>
                            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
                                Join 50,000+ users who have saved over $2.5M in unwanted subscription fees this year.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                                <Link href="/login" className="inline-flex items-center justify-center bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all">Get Started Free</Link>
                                <Link href="/pricing" className="inline-flex items-center justify-center bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all">View Pricing</Link>
                            </div>
                        </motion.div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="px-6 md:px-20 lg:px-40 py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-3 text-primary dark:text-slate-100">
                            <div className="size-6 bg-primary dark:bg-slate-100 rounded flex items-center justify-center">
                                <span className="material-symbols-outlined text-white dark:text-primary text-sm">shield_lock</span>
                            </div>
                            <h2 className="text-lg font-bold">TrialLock</h2>
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm">
                            © 2024 TrialLock. All rights reserved.
                        </div>
                        <div className="flex gap-6">
                            <Link className="text-slate-400 hover:text-primary" href="/privacy-policy">Privacy Policy</Link>
                            <Link className="text-slate-400 hover:text-primary" href="/terms-of-service">Terms of Service</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
