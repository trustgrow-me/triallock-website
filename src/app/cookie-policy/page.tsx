import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | TrialLock",
};

export default function CookiePolicyPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                {/* Navigation */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-slate-900/50">
                    <Link href="/" className="flex items-center gap-4 text-primary dark:text-slate-100">
                        <div className="size-6">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_6_535)">
                                    <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
                                </g>
                                <defs><clipPath id="clip0_6_535"><rect fill="white" height="48" width="48"></rect></clipPath></defs>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">TrialLock</h2>
                    </Link>
                    <div className="flex flex-1 justify-end gap-8">
                        <div className="hidden md:flex items-center gap-9">
                            <Link className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary dark:hover:text-white transition-colors" href="/features">Features</Link>
                            <Link className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary dark:hover:text-white transition-colors" href="/privacy-policy">Privacy</Link>
                            <span className="text-primary dark:text-white text-sm font-bold border-b-2 border-primary dark:border-white pb-1">Cookies</span>
                        </div>
                        <Link href="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all">
                            <span>Log In</span>
                        </Link>
                    </div>
                </header>

                {/* Content Container */}
                <main className="flex flex-1 justify-center py-10 px-6">
                    <div className="max-w-[840px] flex-1">
                        {/* Header Section */}
                        <div className="flex flex-col gap-4 mb-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/30 dark:text-slate-100 w-fit">
                                <span className="material-symbols-outlined text-sm">cookie</span>
                                <span className="text-xs font-bold uppercase tracking-wider">Compliance</span>
                            </div>
                            <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Cookie Policy</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Last updated: October 24, 2023</p>
                        </div>

                        <div className="prose dark:prose-invert max-w-none space-y-8">
                            <section>
                                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                                    TrialLock uses cookies and similar technologies to enhance your experience, ensure the security of our fintech infrastructure, and analyze how our services are used. This policy explains what these technologies are and why we use them.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary dark:text-slate-300">help_outline</span>
                                    What are cookies?
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                                </p>
                            </section>

                            {/* Cookie Types Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                                <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-white">security</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Essential Cookies</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        These are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas and encrypted transactions.
                                    </p>
                                </div>
                                <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-primary dark:text-slate-200">analytics</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Analytical Cookies</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are.
                                    </p>
                                </div>
                            </div>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3 pt-4">
                                    <span className="material-symbols-outlined text-primary dark:text-slate-300">settings</span>
                                    How can I control cookies?
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                                </p>
                                <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mt-4">
                                    <p className="text-sm italic text-slate-800 dark:text-slate-200">
                                        Note: As a fintech provider, disabling essential cookies may prevent us from verifying your identity or processing secure financial transactions.
                                    </p>
                                </div>
                            </section>

                            <section className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                                <h2 className="text-xl font-bold">Contact Us</h2>
                                <p className="text-slate-700 dark:text-slate-300">
                                    If you have any questions about our use of cookies or other technologies, please email us at <a className="text-primary dark:text-slate-300 font-semibold underline decoration-primary/30" href="mailto:privacy@triallock.com">privacy@triallock.com</a>.
                                </p>
                            </section>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 p-8 rounded-2xl bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2">Ready to secure your trials?</h3>
                                <p className="text-slate-300">Join thousands of fintech innovators using TrialLock.</p>
                            </div>
                            <Link href="/login" className="relative z-10 px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap">
                                Get Started
                            </Link>
                            {/* Decorative background element */}
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="border-t border-slate-200 dark:border-slate-800 py-10 px-6 md:px-20 bg-white dark:bg-slate-900/50 mt-auto">
                    <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2 text-slate-500">
                            <div className="size-4 opacity-50">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_6_535)">
                                        <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
                                    </g>
                                    <defs><clipPath id="clip0_6_535"><rect fill="white" height="48" width="48"></rect></clipPath></defs>
                                </svg>
                            </div>
                            <span className="text-xs">© 2023 TrialLock. All rights reserved.</span>
                        </div>
                        <div className="flex gap-6 text-sm font-medium text-slate-500">
                            <Link className="hover:text-primary transition-colors" href="/privacy-policy">Privacy Policy</Link>
                            <Link className="hover:text-primary transition-colors" href="/terms-of-service">Terms of Service</Link>
                            <Link className="hover:text-primary transition-colors" href="/cookie-policy">Cookie Policy</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
