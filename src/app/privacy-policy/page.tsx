"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PrivacyPolicyPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                {/* Header / Navigation */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 md:px-20 lg:px-40 py-4 sticky top-0 z-50">
                    <Link href="/" className="flex items-center gap-3 text-primary dark:text-slate-100">
                        <div className="size-8 flex items-center justify-center bg-primary text-white rounded-lg">
                            <span className="material-symbols-outlined text-xl">shield_lock</span>
                        </div>
                        <h2 className="text-lg font-bold leading-tight tracking-tight">TrialLock</h2>
                    </Link>
                    <div className="flex flex-1 justify-end gap-8">
                        <nav className="hidden md:flex items-center gap-9">
                            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white text-sm font-medium leading-normal transition-colors" href="/security">Security</Link>
                            <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white text-sm font-medium leading-normal transition-colors" href="/pricing">Pricing</Link>
                        </nav>
                        <Link href="/login" className="hidden md:flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity">
                            <span className="truncate">Get Started</span>
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

                <main className="flex flex-1 justify-center py-10 md:py-16 px-4">
                    <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
                        {/* Page Title & Hero */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col gap-4 mb-10"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-slate-200 w-fit">
                                <span className="material-symbols-outlined text-sm">verified_user</span>
                                <span className="text-xs font-bold uppercase tracking-wider">Compliance & Legal</span>
                            </div>
                            <h1 className="text-slate-900 dark:text-slate-50 text-4xl md:text-5xl font-black leading-tight tracking-tight">Privacy Policy</h1>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                Last updated: October 20, 2023. At TrialLock, we prioritize the security of your financial data. This policy explains how we collect, use, and safeguard your information.
                            </p>
                        </motion.div>

                        {/* Table of Contents */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 mb-12 shadow-sm"
                        >
                            <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary dark:text-slate-400">list_alt</span>
                                Table of Contents
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group" href="#collection">
                                    <span className="text-primary/40 group-hover:text-primary font-bold text-sm">01</span>
                                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Data Collection</span>
                                </a>
                                <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group" href="#virtual-cards">
                                    <span className="text-primary/40 group-hover:text-primary font-bold text-sm">02</span>
                                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Virtual Card Security</span>
                                </a>
                                <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group" href="#rights">
                                    <span className="text-primary/40 group-hover:text-primary font-bold text-sm">03</span>
                                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">User Rights & Access</span>
                                </a>
                                <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group" href="#contact">
                                    <span className="text-primary/40 group-hover:text-primary font-bold text-sm">04</span>
                                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Contact & Inquiries</span>
                                </a>
                            </div>
                        </motion.div>

                        {/* Content Sections */}
                        <article className="prose prose-slate dark:prose-invert max-w-none space-y-12 mb-12">
                            <section className="scroll-mt-24" id="collection">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                                    <span className="bg-primary/10 p-2 rounded-lg"><span className="material-symbols-outlined text-primary">database</span></span>
                                    1. Information We Collect
                                </h2>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                                    <p>We collect information that you provide directly to us when you create an account, such as your name, email address, and physical address for billing verification. To provide our core services, we also collect:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Identity Information:</strong> Government-issued ID numbers required for KYC (Know Your Customer) compliance.</li>
                                        <li><strong>Transaction Data:</strong> Details about the merchants where you use TrialLock virtual cards.</li>
                                        <li><strong>Device Data:</strong> IP addresses, browser types, and operating system information to prevent fraud.</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="scroll-mt-24" id="virtual-cards">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                                    <span className="bg-primary/10 p-2 rounded-lg"><span className="material-symbols-outlined text-primary">credit_card</span></span>
                                    2. Virtual Card Security
                                </h2>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                                    <p>TrialLock&apos;s primary purpose is to protect your real financial identity. When you generate a virtual card:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                                            <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-2">Merchant Isolation</h4>
                                            <p className="text-sm">Each card is locked to a specific merchant, preventing data breaches at one vendor from affecting your entire account.</p>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                                            <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-2">Tokenization</h4>
                                            <p className="text-sm">We use industry-standard AES-256 encryption and tokenization so your actual card numbers are never stored in plain text.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="scroll-mt-24" id="rights">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4 flex items-center gap-3">
                                    <span className="bg-primary/10 p-2 rounded-lg"><span className="material-symbols-outlined text-primary">person_check</span></span>
                                    3. Your Rights & Privacy Choices
                                </h2>
                                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                                    <p>We believe you should have control over your data. Depending on your location (such as the EU under GDPR or California under CCPA), you may have the following rights:</p>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                            <div>
                                                <p className="font-bold text-slate-800 dark:text-slate-200">The Right to Access</p>
                                                <p className="text-sm">Request a copy of the personal data we hold about you at any time.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                            <div>
                                                <p className="font-bold text-slate-800 dark:text-slate-200">The Right to Erasure</p>
                                                <p className="text-sm">Request that we delete your data, subject to legal retention requirements for financial institutions.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                            <div>
                                                <p className="font-bold text-slate-800 dark:text-slate-200">The Right to Object</p>
                                                <p className="text-sm">Opt-out of data processing for marketing or profiling purposes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <hr className="border-slate-200 dark:border-slate-800" />

                            {/* Contact Footer */}
                            <motion.section
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="scroll-mt-24 pt-6" id="contact"
                            >
                                <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Questions about your privacy?</h2>
                                    <p className="text-slate-300 mb-8 max-w-lg mx-auto relative z-10">Our dedicated Data Protection Office is here to help you understand how we manage your information.</p>
                                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 relative z-10">
                                        <a className="bg-white text-primary px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-slate-100 hover:scale-105 transition-all" href="mailto:privacy@triallock.com">
                                            <span className="material-symbols-outlined">mail</span>
                                            privacy@triallock.com
                                        </a>
                                    </div>
                                </div>
                            </motion.section>
                        </article>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12 px-6 md:px-20 lg:px-40 mt-auto">
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-primary dark:text-slate-100">
                                <span className="material-symbols-outlined">shield_lock</span>
                                <span className="font-bold text-lg">TrialLock</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">© 2023 TrialLock Inc. All rights reserved.</p>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-3">
                                <p className="font-bold text-sm text-slate-900 dark:text-slate-50 uppercase tracking-widest">Product</p>
                                <Link className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors" href="/features">Features</Link>
                                <Link className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors" href="/security">Security</Link>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="font-bold text-sm text-slate-900 dark:text-slate-50 uppercase tracking-widest">Legal</p>
                                <Link className="text-primary text-sm font-semibold" href="/privacy-policy">Privacy Policy</Link>
                                <Link className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors" href="/terms-of-service">Terms of Service</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
