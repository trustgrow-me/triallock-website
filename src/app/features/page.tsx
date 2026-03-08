import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "TrialLock - Advanced Features",
    description: "Complete Control Over Every Dollar.",
};

export default function FeaturesPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            {/* Header / Navigation */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-primary text-white p-1.5 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-xl">shield_lock</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-primary dark:text-slate-100">TrialLock</span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-8">
                            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/features">Features</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/pricing">Pricing</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/how-it-works">How it Works</Link>
                            <Link href="/login" className="bg-primary text-slate-50 px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
                                Get Started
                            </Link>
                        </nav>
                        <div className="md:hidden">
                            <span className="material-symbols-outlined">menu</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow">
                {/* Hero Section for Features */}
                <section className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                    Subscriptions Secured
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                    Complete Control Over Every <span className="text-primary">Dollar.</span>
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
                                    Never forget to cancel a free trial again. Our suite of security tools ensures you only pay for what you actually use.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/login" className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all">
                                        Start Free Trial
                                    </Link>
                                    <button className="border-2 border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        Watch Demo
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 w-full max-w-2xl">
                                <div className="aspect-video bg-gradient-to-br from-primary to-slate-800 rounded-2xl shadow-2xl relative overflow-hidden flex items-center justify-center border-8 border-white/10">
                                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                                    <span className="material-symbols-outlined text-white text-9xl opacity-20">payments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Grid */}
                <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-3xl font-bold text-primary dark:text-white">Our Core Technology</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto">Built from the ground up to prevent predatory billing practices and provide financial peace of mind.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-white dark:bg-background-dark p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-primary text-3xl">credit_card</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Instant Virtual Card Generation</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Spin up a new virtual debit card in seconds. Each card is unique to the service you&apos;re signing up for, keeping your primary account data hidden.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Unlimited unique card numbers
                                    </li>
                                    <li className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> One-click creation via browser extension
                                    </li>
                                </ul>
                            </div>
                            {/* Feature 2 */}
                            <div className="bg-white dark:bg-background-dark p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-primary text-3xl">timer_off</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Smart Trial Deactivation</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Set your card to automatically &quot;melt&quot; or deactivate the moment your free trial ends. Even if the merchant attempts to bill you, the transaction will be declined.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Date-based auto-locking
                                    </li>
                                    <li className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Notification before card expiry
                                    </li>
                                </ul>
                            </div>
                            {/* Feature 3 */}
                            <div className="bg-white dark:bg-background-dark p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-primary text-3xl">lock_person</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Strict Merchant Locking</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Once a card is used with a specific merchant, it&apos;s locked to them. If that merchant&apos;s database is hacked and your card is leaked, it cannot be used anywhere else.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Prevents secondary fraud
                                    </li>
                                    <li className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Automated merchant detection
                                    </li>
                                </ul>
                            </div>
                            {/* Feature 4 */}
                            <div className="bg-white dark:bg-background-dark p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-primary text-3xl">shield_with_heart</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Active Shield Dashboard</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    A command center for your subscriptions. See every active trial, upcoming payment, and locked merchant in one unified view.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Real-time spending alerts
                                    </li>
                                    <li className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Master kill-switch for all cards
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dashboard Detailed Showcase */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-4 shadow-2xl border border-slate-200 dark:border-slate-800">
                                    <div className="bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden p-6">
                                        <div className="flex justify-between items-center mb-8">
                                            <h4 className="font-bold">Active Shield</h4>
                                            <div className="flex gap-2">
                                                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-sm">notifications</span>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-sm">person</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            {/* Dashboard mock items */}
                                            <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                                                        <span className="material-symbols-outlined">play_circle</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold">Netflix Trial</p>
                                                        <p className="text-[10px] text-slate-400 italic">Expires in 2 days</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <div className="w-8 h-4 bg-green-500 rounded-full relative">
                                                        <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
                                                    </div>
                                                    <span className="text-[10px] text-slate-400 mt-1">LOCKED</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 opacity-60">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600">
                                                        <span className="material-symbols-outlined">shopping_cart</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold">Amazon Music</p>
                                                        <p className="text-[10px] text-slate-400 italic">Deactivated</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <div className="w-8 h-4 bg-slate-300 dark:bg-slate-700 rounded-full relative">
                                                        <div className="absolute left-1 top-1 w-2 h-2 bg-white rounded-full"></div>
                                                    </div>
                                                    <span className="text-[10px] text-slate-400 mt-1">OFF</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-8 bg-primary rounded-xl p-4 text-white">
                                            <p className="text-xs opacity-80 mb-1">Total Saved This Month</p>
                                            <p className="text-2xl font-black">$124.90</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 space-y-6">
                                <h2 className="text-3xl font-black tracking-tight">Intelligence that watches over your wallet</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400">
                                    The Active Shield isn&apos;t just a list of cards; it&apos;s a predictive engine. It learns subscription patterns and identifies potential billing errors before they happen.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-primary">analytics</span>
                                        <div>
                                            <h4 className="font-bold text-sm">Real-time Insights</h4>
                                            <p className="text-xs text-slate-500">Weekly reports on your subscription spending habits.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-primary">encrypted</span>
                                        <div>
                                            <h4 className="font-bold text-sm">Vault-Grade Security</h4>
                                            <p className="text-xs text-slate-500">256-bit AES encryption for all stored account data.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-primary">cell_tower</span>
                                        <div>
                                            <h4 className="font-bold text-sm">Instant Sync</h4>
                                            <p className="text-xs text-slate-500">Manage your cards across mobile, desktop, and tablet.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-primary">support_agent</span>
                                        <div>
                                            <h4 className="font-bold text-sm">24/7 Concierge</h4>
                                            <p className="text-xs text-slate-500">Our team can help resolve billing disputes for you.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-primary text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-black">Ready to reclaim your financial freedom?</h2>
                        <p className="text-lg text-slate-300">Join over 100,000+ users who have stopped unwanted subscription charges with TrialLock.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                            <Link href="/login" className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors">
                                Get Started Now
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center justify-center bg-primary border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-background-light dark:bg-background-dark py-12 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div className="col-span-2 md:col-span-1 space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">shield_lock</span>
                                <span className="text-xl font-bold tracking-tight">TrialLock</span>
                            </div>
                            <p className="text-sm text-slate-500">The safest way to try any service without the subscription trap.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Product</h4>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li><Link className="hover:text-primary" href="/features">Features</Link></li>
                                <li><Link className="hover:text-primary" href="/how-it-works">How It Works</Link></li>
                                <li><Link className="hover:text-primary" href="/security">Security</Link></li>
                                <li><Link className="hover:text-primary" href="/pricing">Pricing</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Resources</h4>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li><Link className="hover:text-primary" href="#">Blog</Link></li>
                                <li><Link className="hover:text-primary" href="#">Help Center</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Legal</h4>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li><Link className="hover:text-primary" href="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link className="hover:text-primary" href="/terms-of-service">Terms of Service</Link></li>
                                <li><Link className="hover:text-primary" href="/cookie-policy">Cookies</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-slate-400">© 2024 TrialLock. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined text-xl">public</span></Link>
                            <Link className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined text-xl">alternate_email</span></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
