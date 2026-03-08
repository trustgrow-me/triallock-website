"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SecurityPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                {/* Header Section */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
                    <Link href="/" className="flex items-center gap-4 text-primary dark:text-slate-100">
                        <div className="size-6 text-primary dark:text-slate-300">
                            <span className="material-symbols-outlined text-3xl">shield_lock</span>
                        </div>
                        <h2 className="text-lg font-bold leading-tight tracking-tight">TrialLock</h2>
                    </Link>
                    <div className="hidden md:flex flex-1 justify-end gap-8">
                        <div className="flex items-center gap-9">
                            <Link className="text-sm font-medium hover:text-primary/70 dark:hover:text-slate-400 transition-colors" href="/security">Security</Link>
                            <Link className="text-sm font-medium hover:text-primary/70 dark:hover:text-slate-400 transition-colors" href="/features">Features</Link>
                            <Link className="text-sm font-medium hover:text-primary/70 dark:hover:text-slate-400 transition-colors" href="/pricing">Pricing</Link>
                        </div>
                        <Link href="/register" className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                            Sign Up
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <span className="material-symbols-outlined">menu</span>
                    </div>
                </header>

                <main className="flex flex-1 flex-col items-center">
                    <div className="layout-content-container flex flex-col max-w-[1200px] w-full px-6 md:px-10 py-12">
                        {/* Hero Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex flex-col gap-6"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/30 dark:text-slate-300 text-xs font-bold uppercase tracking-wider w-fit">
                                    <span className="material-symbols-outlined text-sm">verified_user</span>
                                    Certified Secure
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                                    Bank-Level Security for Every Transaction
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                    TrialLock uses AES-256 encryption and PCI DSS compliance to ensure your financial data remains private, protected, and under your total control.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/login" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                                        Get Started Now
                                    </Link>
                                    <Link href="/privacy-policy" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        View Compliance
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="w-full aspect-video md:aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWxGTHQZ2AYJTJBh3vHRUEs7HrbnlStI4fqmCqDRLgORz31jRMHV-wFw1ZMRvLQoE9NL1W384PuCSFEX7a7zQxtEelzauIPIlNXYY4wDDVpZ4A3YEc5ycCcrvRdaLVsGr8Uz-g06s1HgR-yTRFtDIvZ0igbSiVdR4cfXqGgUtRhmOOu5DUHt-dKjVv2az8_W6-wms3_YmvmL6_nCXAFR3Ee4iQbt5yoxhgppBQltS8Ic9P4CaMuxRaGOmbEYEUTNYX38fJIRMUHUY-")' }}>
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full text-green-600">
                                        <span className="material-symbols-outlined text-3xl">encrypted</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Status</p>
                                        <p className="text-lg font-bold dark:text-white">Active Protection</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Trust Metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                            <div className="flex flex-col gap-2 rounded-xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Encryption Standard</p>
                                <p className="text-primary dark:text-slate-100 text-3xl font-black leading-tight">256-bit AES</p>
                                <div className="flex items-center gap-2 text-green-600 text-sm font-bold">
                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                    Global Standard
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 rounded-xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Compliance</p>
                                <p className="text-primary dark:text-slate-100 text-3xl font-black leading-tight">PCI DSS L1</p>
                                <div className="flex items-center gap-2 text-green-600 text-sm font-bold">
                                    <span className="material-symbols-outlined text-sm">verified</span>
                                    Certified 2024
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 rounded-xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Infrastructure Uptime</p>
                                <p className="text-primary dark:text-slate-100 text-3xl font-black leading-tight">99.99%</p>
                                <div className="flex items-center gap-2 text-green-600 text-sm font-bold">
                                    <span className="material-symbols-outlined text-sm">bolt</span>
                                    High Availability
                                </div>
                            </div>
                        </div>

                        {/* Detailed Security Features */}
                        <div className="flex flex-col gap-12 py-10">
                            <div className="flex flex-col gap-4 max-w-2xl">
                                <h2 className="text-primary dark:text-slate-100 text-4xl font-black leading-tight tracking-tight">
                                    Layered Security Infrastructure
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 text-lg">
                                    Our multi-layered approach ensures that your real bank details never touch the merchant&apos;s server. We act as a hardened vault between you and the web.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <motion.div whileHover={{ y: -5 }} className="flex flex-col gap-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:border-primary/50 transition-all group">
                                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/30 rounded-lg flex items-center justify-center text-primary dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-2xl">credit_card</span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold">Virtual Cards</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                            Create unique, single-use, or merchant-specific card numbers. Even if a site is breached, your real account remains invisible and safe.
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ y: -5 }} className="flex flex-col gap-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:border-primary/50 transition-all group">
                                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/30 rounded-lg flex items-center justify-center text-primary dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-2xl">lock</span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold">Encrypted Vault</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                            Your primary funding sources are stored in an isolated, hardware-security-module (HSM) protected environment with zero external access.
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ y: -5 }} className="flex flex-col gap-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:border-primary/50 transition-all group">
                                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/30 rounded-lg flex items-center justify-center text-primary dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-2xl">privacy_tip</span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold">Identity Masking</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                            Prevent data brokers from tracking your spending habits. TrialLock masks your transaction metadata to preserve financial privacy.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Security Badge Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mt-20 py-12 px-8 rounded-2xl bg-primary text-white flex flex-col items-center text-center gap-8"
                        >
                            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
                                <div className="flex flex-col items-center gap-2">
                                    <span className="material-symbols-outlined text-4xl">admin_panel_settings</span>
                                    <span className="text-xs font-bold uppercase tracking-tighter">PCI-DSS Compliant</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <span className="material-symbols-outlined text-4xl">security</span>
                                    <span className="text-xs font-bold uppercase tracking-tighter">SOC2 Type II</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <span className="material-symbols-outlined text-4xl">policy</span>
                                    <span className="text-xs font-bold uppercase tracking-tighter">GDPR Ready</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <span className="material-symbols-outlined text-4xl">vpn_key</span>
                                    <span className="text-xs font-bold uppercase tracking-tighter">AES-256 Bit</span>
                                </div>
                            </div>
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold mb-4">Ready to secure your subscriptions?</h2>
                                <p className="text-slate-300 mb-8">Join over 500,000 users who trust TrialLock to protect their financial future every day.</p>
                                <Link href="/register" className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-slate-100 hover:scale-105 transition-all">Create Secure Account</Link>
                            </div>
                        </motion.div>

                        {/* Final Footer Section */}
                        <footer className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 w-full">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-primary dark:text-slate-100">
                                    <span className="material-symbols-outlined">shield_lock</span>
                                    <span className="font-bold">TrialLock</span>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Protecting your digital wallet since 2021. Built with privacy by design.</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4">Product</h4>
                                <ul className="text-slate-500 dark:text-slate-400 text-sm flex flex-col gap-2">
                                    <li><Link className="hover:text-primary" href="/features">Virtual Cards</Link></li>
                                    <li><Link className="hover:text-primary" href="/how-it-works">Subscriptions</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4">Company</h4>
                                <ul className="text-slate-500 dark:text-slate-400 text-sm flex flex-col gap-2">
                                    <li><Link className="hover:text-primary" href="#">About Us</Link></li>
                                    <li><Link className="hover:text-primary" href="/security">Security</Link></li>
                                    <li><Link className="hover:text-primary" href="/privacy-policy">Compliance</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4">Resources</h4>
                                <ul className="text-slate-500 dark:text-slate-400 text-sm flex flex-col gap-2">
                                    <li><Link className="hover:text-primary" href="/how-it-works">Help Center</Link></li>
                                    <li><Link className="hover:text-primary" href="/privacy-policy">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                </main>
            </div>
        </div>
    );
}
