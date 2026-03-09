"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getWaitlistEntry, getWaitlistStats } from '../actions/waitlist-actions';

function ThankYouContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [entry, setEntry] = useState<any>(null);
    const [stats, setStats] = useState({ totalCount: 800, target: 1000, percentage: "80.0", remaining: 200 });
    const [isCopied, setIsCopied] = useState(false);
    const [referralLink, setReferralLink] = useState('');

    useEffect(() => {
        async function loadData() {
            const statsData = await getWaitlistStats();
            if (statsData) setStats(statsData);

            if (id) {
                const entryData = await getWaitlistEntry(id);
                if (entryData) {
                    setEntry(entryData);
                    setReferralLink(`${window.location.origin}/?ref=${entryData.referralCode}`);
                }
            }
        }
        loadData();
    }, [id]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const shareOnTwitter = () => {
        const text = encodeURIComponent("I just joined the TrialLock waitlist to block surprise free trial renewals! Join me to move up the queue:");
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(referralLink)}`, '_blank');
    };

    const shareOnWhatsApp = () => {
        const text = encodeURIComponent(`I just joined the TrialLock waitlist to block surprise free trial renewals! Join me: ${referralLink}`);
        window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    };

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`, '_blank');
    };

    return (
        <div className="flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
            <div className="layout-container flex h-full grow flex-col">
                {/* Navigation */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-10 py-3 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
                    <div className="flex items-center gap-4 text-primary dark:text-slate-100">
                        <div className="bg-primary p-2 rounded-lg">
                            <span className="material-symbols-outlined text-white text-lg">shield_lock</span>
                        </div>
                        <h2 className="text-primary dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">TrialLock</h2>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200/50 dark:bg-slate-800 text-primary dark:text-slate-100 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-[20px]">notifications</span>
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200/50 dark:bg-slate-800 text-primary dark:text-slate-100 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-[20px]">account_circle</span>
                        </button>
                    </div>
                </header>

                <main className="flex flex-1 justify-center py-8 px-4">
                    <div className="layout-content-container flex flex-col max-w-[640px] flex-1">

                        {/* Success Illustration / Card Section */}
                        <div className="flex flex-col items-center justify-center mb-8">
                            <div className="relative w-full max-w-[320px] aspect-[1.586/1] rounded-xl bg-gradient-to-br from-primary to-slate-800 shadow-2xl p-6 text-white overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-20">
                                    <span className="material-symbols-outlined text-6xl">lock</span>
                                </div>
                                <div className="flex flex-col h-full justify-between">
                                    <div className="flex justify-between items-start">
                                        <span className="text-xs font-medium tracking-widest uppercase opacity-70">Virtual Trial Card</span>
                                        <span className="material-symbols-outlined">contactless</span>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-lg font-mono tracking-widest">**** **** **** 8829</div>
                                        <div className="text-[10px] opacity-60 uppercase">{entry ? entry.firstName : 'Waitlist Member'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <div className="inline-flex items-center justify-center p-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full mb-4">
                                    <span className="material-symbols-outlined">check_circle</span>
                                    <span className="ml-2 text-sm font-semibold">You&apos;re confirmed</span>
                                </div>
                                <h1 className="text-primary dark:text-slate-100 text-4xl font-black leading-tight tracking-tight">You&apos;re on the waitlist</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-xl mt-2 font-medium">
                                    {entry && entry.totalReferrals > 0 ? (
                                        <>Friends invited: <span className="text-primary dark:text-slate-200">{entry.totalReferrals}</span></>
                                    ) : (
                                        <>Thank you for joining</>
                                    )}
                                </p>
                            </div>
                        </div>

                        {/* Progress Section */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 mb-8 shadow-sm">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-6 justify-between items-end">
                                    <div>
                                        <p className="text-primary dark:text-slate-100 text-base font-bold leading-normal">Waitlist Progress</p>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Join the first {stats.target} to get early access</p>
                                    </div>
                                    <p className="text-primary dark:text-slate-100 text-sm font-bold">{stats.totalCount} / {stats.target}</p>
                                </div>
                                <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                                    <div className="h-full rounded-full bg-primary dark:bg-slate-400 transition-all duration-1000 ease-out" style={{ width: `${stats.percentage}%` }}></div>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-xs italic">Only {stats.remaining} spots left before launch target.</p>
                            </div>
                        </div>

                        {/* Referral Benefits */}
                        <div className="mb-8 pl-1">
                            <h2 className="text-primary dark:text-slate-100 text-xl font-bold mb-4">Move up the list</h2>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                    <div className="flex-shrink-0 size-10 rounded-full bg-primary/10 dark:bg-primary/30 flex items-center justify-center text-primary dark:text-slate-300 font-bold">1</div>
                                    <div>
                                        <p className="font-bold text-primary dark:text-slate-100">Invite 1 Friend</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Jump 50 spots instantly</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                    <div className="flex-shrink-0 size-10 rounded-full bg-primary/10 dark:bg-primary/30 flex items-center justify-center text-primary dark:text-slate-300 font-bold">3</div>
                                    <div>
                                        <p className="font-bold text-primary dark:text-slate-100">Invite 3 Friends</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Unlock Priority Beta access</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary text-white shadow-md">
                                    <div className="flex-shrink-0 size-10 rounded-full bg-white/20 flex items-center justify-center font-bold">5</div>
                                    <div>
                                        <p className="font-bold">Invite 5 Friends</p>
                                        <p className="text-sm opacity-80">Guaranteed Early Access + 1 yr Premium</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sharing Section */}
                        {entry && (
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                                <p className="text-primary dark:text-slate-100 text-sm font-bold mb-4 uppercase tracking-wider">Share your unique link</p>

                                {/* Referral Link Input */}
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-lg text-sm font-mono text-slate-600 dark:text-slate-300 overflow-hidden whitespace-nowrap overflow-x-auto">
                                        {referralLink}
                                    </div>
                                    <button
                                        onClick={copyToClipboard}
                                        className="bg-primary text-white px-4 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shrink-0"
                                    >
                                        <span className="material-symbols-outlined text-sm">{isCopied ? 'check' : 'content_copy'}</span>
                                        {isCopied ? 'Copied' : 'Copy'}
                                    </button>
                                </div>

                                {/* Social Buttons */}
                                <div className="grid grid-cols-3 gap-3">
                                    <button onClick={shareOnTwitter} className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        <div className="size-6 text-[#1DA1F2]">
                                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                        </div>
                                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400">X / Twitter</span>
                                    </button>

                                    <button onClick={shareOnWhatsApp} className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        <div className="size-6 text-[#25D366]">
                                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                        </div>
                                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400">WhatsApp</span>
                                    </button>

                                    <button onClick={shareOnFacebook} className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        <div className="size-6 text-[#1877F2]">
                                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                        </div>
                                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Facebook</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="mt-12 text-center text-slate-400 text-sm">
                            <p>Questions? Check our <a className="text-primary dark:text-slate-300 underline font-medium" href="#">Waitlist FAQ</a></p>
                        </div>

                    </div>
                </main>

                {/* Footer */}
                <footer className="py-10 px-6 mt-auto border-t border-slate-200 dark:border-slate-800 text-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 text-primary/50 dark:text-slate-500">
                            <span className="material-symbols-outlined text-sm">verified_user</span>
                            <span className="text-xs font-medium uppercase tracking-widest">Bank-level Security</span>
                        </div>
                        <p className="text-xs text-slate-400">© 2026 TrialLock. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default function ThankYouPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center p-8 text-xl font-bold font-display">Loading waitlist status...</div>}>
            <ThankYouContent />
        </Suspense>
    );
}
