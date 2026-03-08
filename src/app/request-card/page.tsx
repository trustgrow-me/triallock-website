"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RequestCard() {
    const router = useRouter();
    const [merchantName, setMerchantName] = useState('Netflix Trial');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleGenerate(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/cards', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ merchantName })
            });

            if (res.status === 403) {
                // Needs subscription, redirect to checkout
                try {
                    const checkoutRes = await fetch('/api/checkout', { method: 'POST' });
                    const checkoutData = await checkoutRes.json();
                    if (checkoutData.url) {
                        window.location.href = checkoutData.url;
                        return;
                    }
                } catch (checkoutErr) {
                    setError('Failed to initiate secure payment checkout.');
                }
            } else if (res.status === 401) {
                router.push('/login');
            } else if (!res.ok) {
                const data = await res.json();
                setError(data.error || 'Failed to generate virtual card.');
            } else {
                // Success
                router.push('/dashboard');
            }
        } catch (err: any) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            if (!error && !window.location.href.includes('checkout')) {
                setLoading(false);
            }
        }
    }

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
            <div className="layout-container flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 lg:px-40 py-4 bg-white dark:bg-background-dark">
                    <Link href="/" className="flex items-center gap-4 text-primary dark:text-accent-blue">
                        <div className="size-8 flex items-center justify-center bg-primary text-white rounded-lg">
                            <span className="material-symbols-outlined">shield_lock</span>
                        </div>
                        <h2 className="text-primary dark:text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em]">TrialLock</h2>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard" className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors">
                            Dashboard
                        </Link>
                    </div>
                </header>

                <main className="flex-1 flex flex-col items-center py-12 px-6">
                    <div className="layout-content-container flex flex-col max-w-[640px] w-full gap-8">

                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex justify-between items-end">
                                <div className="flex flex-col">
                                    <span className="text-primary font-bold text-sm uppercase tracking-wider">Step 1 of 2</span>
                                    <h3 className="text-slate-900 dark:text-slate-100 text-xl font-semibold">Card Details</h3>
                                </div>
                                <p className="text-primary font-bold text-lg">50%</p>
                            </div>
                            <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-primary dark:bg-accent-blue transition-all duration-500" style={{ width: '50%' }}></div>
                            </div>
                        </div>

                        <form onSubmit={handleGenerate} className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 flex flex-col gap-8">

                            {error && (
                                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium">
                                    {error}
                                </div>
                            )}

                            <section className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/5 rounded-lg text-primary">
                                        <span className="material-symbols-outlined">edit_note</span>
                                    </div>
                                    <h2 className="text-lg font-bold">Name your card</h2>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Assign a recognizable name to track this specific subscription or trial easily.</p>
                                <div className="relative">
                                    <input
                                        className="w-full h-14 pl-4 pr-12 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="e.g. Netflix Trial"
                                        type="text"
                                        value={merchantName}
                                        onChange={(e) => setMerchantName(e.target.value)}
                                        required
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">credit_card</span>
                                </div>
                            </section>

                            <section className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/5 rounded-lg text-primary">
                                        <span className="material-symbols-outlined">payments</span>
                                    </div>
                                    <h2 className="text-lg font-bold">Subscription Plan</h2>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    <div className="border-2 border-primary bg-primary/5 rounded-xl p-4 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-2 text-primary">
                                            <span className="material-symbols-outlined text-sm">check_circle</span>
                                        </div>
                                        <p className="text-xs font-bold text-primary uppercase mb-1">TrialLock Pro Plan</p>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">€9<span className="text-sm font-normal text-slate-500">/mo</span></p>
                                        <p className="text-xs text-slate-500 mt-2">Unlimited virtual card regenerations &amp; secure auto-lock.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="flex flex-col gap-4">
                                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Live Preview</p>

                                <div className="relative h-48 w-full bg-gradient-to-br from-primary to-slate-800 rounded-2xl p-6 text-white shadow-xl overflow-hidden group">
                                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                                        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern height="40" id="card-grid" patternUnits="userSpaceOnUse" width="40">
                                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
                                                </pattern>
                                            </defs>
                                            <rect fill="url(#card-grid)" height="100%" width="100%"></rect>
                                        </svg>
                                    </div>

                                    <div className="flex justify-between items-start relative z-10">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs opacity-70 font-medium">Card Name</span>
                                            <span className="text-lg font-bold tracking-wide">{merchantName || 'New Trial'}</span>
                                        </div>
                                        <span className="material-symbols-outlined text-4xl opacity-50">contactless</span>
                                    </div>

                                    <div className="mt-8 relative z-10">
                                        <p className="text-xl font-mono tracking-[0.2em]">••••  ••••  ••••  ****</p>
                                    </div>

                                    <div className="mt-auto flex justify-between items-end relative z-10">
                                        <div className="flex gap-6">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase opacity-60">Expires</span>
                                                <span className="text-sm font-medium">**/**</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase opacity-60">CVV</span>
                                                <span className="text-sm font-medium">***</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="h-6 w-10 bg-white/20 rounded-md backdrop-blur-sm flex items-center justify-center">
                                                <span className="text-[8px] font-bold">VISA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-center text-xs text-slate-400 italic">Information will be securely generated post-checkout.</p>
                            </section>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3 mt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-primary text-white h-14 rounded-lg font-bold text-lg hover:bg-slate-800 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    ) : (
                                        <>
                                            <span>Secure virtual card...</span>
                                            <span className="material-symbols-outlined">lock</span>
                                        </>
                                    )}
                                </button>

                                <Link href="/dashboard" className="w-full h-12 flex items-center justify-center rounded-lg font-medium text-slate-500 hover:text-primary transition-colors">
                                    Cancel and return
                                </Link>
                            </div>

                        </form>

                        {/* Benefits/Info Footer */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex flex-col gap-2 items-center text-center">
                                <span className="material-symbols-outlined text-primary">security</span>
                                <p className="text-xs font-bold">Secure Merchant Lock</p>
                                <p className="text-[10px] text-slate-500">Only works for assigned merchant. No hidden charges.</p>
                            </div>
                            <div className="flex flex-col gap-2 items-center text-center">
                                <span className="material-symbols-outlined text-primary">timer</span>
                                <p className="text-xs font-bold">Immediate Deactivation</p>
                                <p className="text-[10px] text-slate-500">Generating a new card instantly kills your previous trial card.</p>
                            </div>
                            <div className="flex flex-col gap-2 items-center text-center">
                                <span className="material-symbols-outlined text-primary">visibility_off</span>
                                <p className="text-xs font-bold">Privacy Protected</p>
                                <p className="text-[10px] text-slate-500">Your real bank details are never shared with merchants.</p>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}
