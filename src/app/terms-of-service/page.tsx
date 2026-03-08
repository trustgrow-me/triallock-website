"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TermsOfServicePage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                {/* Header Section */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="size-8 flex items-center justify-center bg-primary text-white rounded-lg">
                            <span className="material-symbols-outlined text-xl">shield_lock</span>
                        </div>
                        <h2 className="text-primary dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">TrialLock</h2>
                    </Link>
                    <div className="flex flex-1 justify-end gap-6 md:gap-10">
                        <nav className="hidden md:flex items-center gap-8">
                            <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary dark:hover:text-white" href="/features">Features</Link>
                            <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary dark:hover:text-white" href="/pricing">Pricing</Link>
                        </nav>
                        <Link href="/login" className="hidden md:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold transition-all hover:opacity-90 active:scale-95 shadow-sm">
                            <span>Sign Up</span>
                        </Link>
                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-900 dark:text-white p-2">
                                <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white dark:bg-slate-900 border-b border-primary/10 px-6 py-4 flex flex-col gap-4 overflow-hidden"
                        >
                            <Link href="/features" className="text-sm font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
                            <Link href="/security" className="text-sm font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Security</Link>
                            <Link href="/pricing" className="text-sm font-medium hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                            <Link href="/login" className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-slate-50 text-sm font-bold mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                                Sign In
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>

                <main className="flex flex-1 justify-center py-10 px-4 md:px-0">
                    <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
                        {/* Title & Updated Date */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col gap-3 mb-8"
                        >
                            <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">Terms of Service</h1>
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                <p className="text-sm font-medium">Last updated: May 24, 2024</p>
                            </div>
                        </motion.div>

                        {/* Sticky Sub-Nav */}
                        <div className="pb-6 sticky top-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm z-40 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex overflow-x-auto no-scrollbar gap-8 pt-4">
                                <a className="flex flex-col items-center justify-center border-b-2 border-primary dark:border-slate-100 pb-3" href="#overview">
                                    <span className="text-primary dark:text-slate-100 text-sm font-bold whitespace-nowrap">Overview</span>
                                </a>
                                <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 pb-3 hover:text-primary dark:hover:text-slate-200" href="#usage">
                                    <span className="text-sm font-bold whitespace-nowrap">Card Usage</span>
                                </a>
                                <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 pb-3 hover:text-primary dark:hover:text-slate-200" href="#subscriptions">
                                    <span className="text-sm font-bold whitespace-nowrap">Subscriptions</span>
                                </a>
                                <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 pb-3 hover:text-primary dark:hover:text-slate-200" href="#liability">
                                    <span className="text-sm font-bold whitespace-nowrap">Liability</span>
                                </a>
                            </div>
                        </div>

                        {/* Content Sections */}
                        <div className="flex flex-col gap-10 py-10">
                            <section className="scroll-mt-32" id="overview">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-primary/10 dark:bg-primary/30 rounded-lg text-primary dark:text-slate-200">
                                        <span className="material-symbols-outlined">info</span>
                                    </div>
                                    <h2 className="text-slate-900 dark:text-white text-2xl font-bold">1. Agreement to Terms</h2>
                                </div>
                                <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                                    <p>Welcome to TrialLock. By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.</p>
                                    <p>TrialLock provides virtual card management tools specifically designed to help users manage their subscription trials and prevent unwanted recurring charges.</p>
                                </div>
                            </section>

                            <section className="scroll-mt-32" id="usage">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-primary/10 dark:bg-primary/30 rounded-lg text-primary dark:text-slate-200">
                                        <span className="material-symbols-outlined">credit_card</span>
                                    </div>
                                    <h2 className="text-slate-900 dark:text-white text-2xl font-bold">2. Card Usage & Virtual Cards</h2>
                                </div>
                                <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                                    <p>TrialLock provides virtual card services specifically designed for managing free trials. By using our service, you agree that these cards are only to be used for authorized subscription sign-ups and are subject to verification.</p>
                                    <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                                        <li>Virtual cards are intended for trial verification purposes only.</li>
                                        <li>Users may not use cards for illegal transactions or fraudulent activities.</li>
                                        <li>We reserve the right to limit the number of active cards per account.</li>
                                        <li>Unauthorized sharing of card details with third parties is strictly prohibited.</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="scroll-mt-32" id="subscriptions">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-primary/10 dark:bg-primary/30 rounded-lg text-primary dark:text-slate-200">
                                        <span className="material-symbols-outlined">payments</span>
                                    </div>
                                    <h2 className="text-slate-900 dark:text-white text-2xl font-bold">3. Subscription Terms & Fees</h2>
                                </div>
                                <div className="bg-primary/5 dark:bg-slate-800/50 p-6 rounded-xl border border-primary/10 dark:border-slate-700 mb-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <h3 className="font-bold text-lg text-primary dark:text-white">TrialLock Premium Plan</h3>
                                            <p className="text-slate-600 dark:text-slate-400">Full access to virtual card management and trial alerts.</p>
                                        </div>
                                        <div className="text-left md:text-right">
                                            <span className="text-3xl font-black text-primary dark:text-white">€9/mo</span>
                                            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Billed monthly</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                                    <p>By selecting the TrialLock Premium Plan, you agree to pay TrialLock the monthly subscription fees indicated. Payments will be charged on a pre-pay basis on the day you sign up and will cover the use of that service for a monthly period.</p>
                                    <p>Fees are non-refundable except as required by law. You can cancel your subscription at any time through your dashboard settings.</p>
                                </div>
                            </section>

                            <section className="scroll-mt-32" id="liability">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-primary/10 dark:bg-primary/30 rounded-lg text-primary dark:text-slate-200">
                                        <span className="material-symbols-outlined">gavel</span>
                                    </div>
                                    <h2 className="text-slate-900 dark:text-white text-2xl font-bold">4. Liability & Blocked Trials</h2>
                                </div>
                                <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                                    <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg mb-4">
                                        <p className="text-amber-800 dark:text-amber-200 font-medium">Important Disclaimer</p>
                                        <p className="text-amber-700 dark:text-amber-300 text-sm mt-1">TrialLock is not responsible for trials that are rejected or blocked by third-party merchants.</p>
                                    </div>
                                    <p>While TrialLock strives to provide a seamless experience, some merchants may employ sophisticated detection systems that block virtual or prepaid cards. TrialLock makes no warranty that our cards will be accepted by every service provider.</p>
                                    <p>TrialLock shall not be liable for any damages, losses, or missed opportunities arising from a merchant&apos;s refusal to accept our virtual cards or for any accidental billing that occurs due to incorrect user configuration.</p>
                                </div>
                            </section>

                            <section className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-primary/10 dark:bg-primary/30 rounded-lg text-primary dark:text-slate-200">
                                        <span className="material-symbols-outlined">contact_support</span>
                                    </div>
                                    <h2 className="text-slate-900 dark:text-white text-2xl font-bold">5. Contact Us</h2>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">If you have any questions about these Terms, please contact us at <a className="text-primary dark:text-slate-100 underline underline-offset-4 font-semibold" href="mailto:legal@triallock.com">legal@triallock.com</a>.</p>
                            </section>
                        </div>

                        {/* Bottom CTA */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mt-12 p-8 bg-primary rounded-2xl text-center shadow-xl"
                        >
                            <h3 className="text-white text-2xl font-bold mb-4">Ready to lock your trials?</h3>
                            <p className="text-slate-300 mb-8 max-w-md mx-auto">Join thousands of users who never pay for a forgotten subscription again.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/login" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">Start for Free</Link>
                                <Link href="/pricing" className="bg-primary border border-slate-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">View Pricing</Link>
                            </div>
                        </motion.div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-6 bg-white dark:bg-slate-950 mt-auto">
                    <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="size-6 flex items-center justify-center bg-primary text-white rounded">
                                    <span className="material-symbols-outlined text-sm">shield_lock</span>
                                </div>
                                <h2 className="text-primary dark:text-slate-100 font-bold">TrialLock</h2>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Empowering users to take control of their digital subscriptions since 2023.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Product</h4>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li><Link className="hover:text-primary dark:hover:text-white" href="/features">Features</Link></li>
                                <li><Link className="hover:text-primary dark:hover:text-white" href="/security">Security</Link></li>
                                <li><Link className="hover:text-primary dark:hover:text-white" href="/pricing">Pricing</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Legal</h4>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li><Link className="text-primary dark:text-white font-semibold" href="/terms-of-service">Terms of Service</Link></li>
                                <li><Link className="hover:text-primary dark:hover:text-white" href="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link className="hover:text-primary dark:hover:text-white" href="/cookie-policy">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-[960px] mx-auto mt-12 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-slate-500">© 2024 TrialLock Technologies Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
