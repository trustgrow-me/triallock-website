"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Register() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch('/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'register', email, password }),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || 'Registration failed');
            }

            // Success, route to dashboard or payment
            router.push('/dashboard');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="layout-container flex h-screen grow flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-10 py-4 bg-white dark:bg-slate-900">
                <Link href="/" className="flex items-center gap-2 text-primary dark:text-slate-100">
                    <div className="flex items-center justify-center bg-primary text-white rounded p-1.5">
                        <span className="material-symbols-outlined text-xl">shield_lock</span>
                    </div>
                    <h2 className="text-primary dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">TrialLock</h2>
                </Link>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20">
                <div className="w-full max-w-[440px] bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col items-center mb-8">
                        <div className="size-12 bg-primary/10 dark:bg-primary/30 text-primary rounded-full flex items-center justify-center mb-4">
                            <span className="material-symbols-outlined text-3xl">lock</span>
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white text-center">Create Account</h1>
                        <div className="flex items-center gap-1.5 mt-2 text-slate-500 dark:text-slate-400">
                            <span className="material-symbols-outlined text-sm text-green-600">verified_user</span>
                            <p className="text-sm font-medium">Secure fintech-grade registration</p>
                        </div>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {error && (
                            <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg">
                                {error}
                            </div>
                        )}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-0.5">Email address</label>
                            <input
                                className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="name@company.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 px-0.5">Password</label>
                            <div className="relative group">
                                <input
                                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="••••••••"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            className="w-full bg-primary hover:bg-slate-800 text-white font-semibold py-3.5 rounded-lg transition-all shadow-md active:scale-[0.98] mt-2 disabled:opacity-70 flex items-center justify-center gap-2"
                            type="submit"
                        >
                            {loading ? (
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : "Create Account"}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Already have an account?
                            <Link className="font-bold text-primary dark:text-slate-300 hover:underline ml-1" href="/login">Sign in</Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
