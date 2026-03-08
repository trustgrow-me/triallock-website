"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Card = {
    id: string;
    cardNumber: string;
    expiry: string;
    cvv: string;
    merchant: string;
    status: string;
};

export default function Dashboard() {
    const router = useRouter();
    const [activeCard, setActiveCard] = useState<Card | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCard() {
            try {
                const res = await fetch('/api/cards');
                if (res.ok) {
                    const data = await res.json();
                    if (data.card) setActiveCard(data.card);
                } else if (res.status === 401) {
                    router.push('/login');
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        loadCard();
    }, [router]);

    async function handleDeactivate() {
        if (!confirm('Are you sure you want to lock and permanently deactivate this card?')) return;
        try {
            const res = await fetch('/api/cards', { method: 'PATCH' });
            if (res.ok) {
                setActiveCard(null);
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function handleLogout() {
        await fetch('/api/auth', { method: 'DELETE' });
        router.push('/login');
    }

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
            {/* Header */}
            <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 py-4 lg:px-10">
                <Link href="/" className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                        <span className="material-symbols-outlined">shield_lock</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">TrialLock</h2>
                </Link>
                <div className="flex flex-1 justify-end items-center gap-4">
                    <button onClick={handleLogout} className="text-sm font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                        Sign out
                    </button>
                </div>
            </header>

            <div className="flex flex-1 flex-col lg:flex-row">
                {/* Sidebar */}
                <aside className="w-full lg:w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark p-6 space-y-8">
                    <nav className="space-y-1">
                        <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Main Menu</p>
                        <Link className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-accent font-medium transition-colors" href="/dashboard">
                            <span className="material-symbols-outlined text-lg">dashboard</span>
                            <span>Dashboard</span>
                        </Link>
                    </nav>

                    <div className="pt-10">
                        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-100 dark:border-slate-800">
                            <p className="text-sm font-semibold text-primary dark:text-white">Subscription</p>
                            <p className="text-xs text-slate-500 mt-1">Status managed via Stripe.</p>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 lg:p-10 space-y-10 max-w-6xl mx-auto w-full">
                    <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-black text-primary dark:text-white tracking-tight">Active Shield</h1>
                            <p className="text-slate-500 font-medium">Monitoring your virtual trial security in real-time.</p>
                        </div>
                        {activeCard ? (
                            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1.5 rounded-full">
                                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                System Protected
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 text-sm font-semibold text-amber-500 bg-amber-50 dark:bg-amber-500/10 px-3 py-1.5 rounded-full">
                                <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                                No Active Shield
                            </div>
                        )}
                    </header>

                    {/* Card Visual Section */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Current Active Card</h3>

                            {loading ? (
                                <div className="aspect-[1.586/1] w-full max-w-md rounded-2xl bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
                            ) : activeCard ? (
                                <div className="relative overflow-hidden aspect-[1.586/1] w-full max-w-md rounded-2xl bg-primary p-8 text-white shadow-2xl transition-transform hover:scale-[1.02]">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                    <div className="relative z-10 flex h-full flex-col justify-between">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-xs font-medium text-slate-400">MERCHANT LOCK</p>
                                                <h4 className="text-2xl font-bold tracking-tight">{activeCard.merchant || 'Unnamed Trial'}</h4>
                                            </div>
                                            <span className="material-symbols-outlined text-4xl opacity-50">contactless</span>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-lg font-mono tracking-[0.2em]">
                                                •••• •••• •••• {activeCard.cardNumber.slice(-4)}
                                            </p>
                                            <div className="flex gap-8">
                                                <div>
                                                    <p className="text-[10px] uppercase text-slate-400">Expiry</p>
                                                    <p className="text-sm font-bold">{activeCard.expiry}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] uppercase text-slate-400">CVV</p>
                                                    <p className="text-sm font-bold">{activeCard.cvv}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                                                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">ACTIVE</span>
                                            </div>
                                            <div className="flex -space-x-2">
                                                <div className="h-8 w-8 rounded-full border-2 border-primary bg-slate-700/50"></div>
                                                <div className="h-8 w-8 rounded-full border-2 border-primary bg-slate-600/50"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center aspect-[1.586/1] w-full max-w-md rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-500">
                                    <span className="material-symbols-outlined text-4xl mb-2 opacity-50">credit_card_off</span>
                                    <p className="font-medium">No active card</p>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col justify-center space-y-6">
                            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                                <h4 className="font-bold text-primary dark:text-white mb-2">Generate New Shield</h4>
                                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                                    Need to start another trial? Generating a new card will <span className="text-amber-500 font-bold">automatically deactivate</span> our currently active card to prevent any future billing.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/request-card" className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                        <span className="material-symbols-outlined">add_card</span>
                                        Generate New Card
                                    </Link>
                                    {activeCard && (
                                        <button onClick={handleDeactivate} className="px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-center">
                                            Lock Current
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
}
