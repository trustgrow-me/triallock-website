"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { joinWaitlist, getWaitlistStats } from './actions/waitlist-actions';
import { useSearchParams, useRouter } from 'next/navigation';

export default function WaitlistLandingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refCode = searchParams.get('ref') || '';

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [stats, setStats] = useState({ totalCount: 800, target: 1000, percentage: "80.0", remaining: 200 });

  useEffect(() => {
    async function loadStats() {
      const data = await getWaitlistStats();
      if (data) setStats(data);
    }
    loadStats();
  }, []);

  async function handleJoin(formData: FormData) {
    setIsLoading(true);
    setError('');

    // Add referral code to the form data safely if it exists
    if (refCode) {
      formData.append('ref', refCode);
    }

    const result = await joinWaitlist(formData);

    setIsLoading(false);

    if (result.error) {
      setError(result.error);
    } else if (result.success && result.entryId) {
      router.push(`/thank-you?id=${result.entryId}`);
    }
  }

  return (
    <div className="bg-white text-primary font-display antialiased min-h-screen relative overflow-hidden">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <span className="material-symbols-outlined text-white text-2xl">shield_lock</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">TrialLock</span>
        </div>
        <div>
          <a className="text-sm font-semibold text-primary hover:text-accent transition-colors" href="#join">Early Access</a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Limited Beta Enrollment
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              Start free trials without <span className="text-accent">surprise charges</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              TrialLock is a virtual card built for free trials. Use it to sign up for trials and avoid unwanted subscription renewals after the trial ends.
            </p>

            <form action={handleJoin} id="join" className="flex flex-col sm:flex-row gap-3 relative">
              <div className="flex-1 flex flex-col gap-2">
                <input
                  name="firstName"
                  required
                  className="w-full px-5 py-4 rounded-xl border-slate-200 bg-slate-50 focus:ring-2 focus:ring-accent focus:border-accent transition-all text-slate-900"
                  placeholder="First Name"
                  type="text"
                />
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <input
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-xl border-slate-200 bg-slate-50 focus:ring-2 focus:ring-accent focus:border-accent transition-all text-slate-900"
                  placeholder="Email Address"
                  type="email"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-primary/20 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-sm">autorenew</span>
                    Joining...
                  </>
                ) : (
                  'Join Early Access'
                )}
              </button>
            </form>

            {error && (
              <p className="text-red-500 text-sm font-medium mt-2">{error}</p>
            )}

            {/* Launch Progress */}
            <div className="space-y-3 pt-4">
              <div className="flex justify-between items-end">
                <span className="text-sm font-bold text-slate-900">{stats.totalCount} / {stats.target} early users joined</span>
                <span className="text-sm font-medium text-slate-500">{stats.percentage}%</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stats.percentage}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-accent h-full rounded-full"
                />
              </div>
              <p className="text-xs text-slate-500 font-medium">{stats.remaining} more people needed before public launch</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

            {/* Virtual Card Illustration */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-primary to-[#1a3a6e] w-full aspect-[1.58/1] rounded-2xl p-8 text-white shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-4xl opacity-80">contactless</span>
                  <div className="w-12 h-8 bg-amber-400/20 rounded-md border border-white/20"></div>
                </div>

                <div className="space-y-4">
                  <div className="text-2xl font-mono tracking-widest">**** **** **** 8824</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] uppercase tracking-tighter opacity-60">Card Holder</div>
                      <div className="text-sm font-bold tracking-wide uppercase">TrialLock Member</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-tighter opacity-60">Expires</div>
                      <div className="text-sm font-bold tracking-wide">09/28</div>
                    </div>
                  </div>
                </div>

                {/* Overlay Label */}
                <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
                  Trial Mode Active
                </div>
              </div>

              {/* Secondary Decoration Card */}
              <div className="absolute -bottom-6 -right-6 -z-10 bg-slate-100 w-full aspect-[1.58/1] rounded-2xl border border-slate-200 shadow-xl opacity-50 transform -rotate-3 transition-transform group-hover:-rotate-1"></div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Trust Micro-Bar */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-accent bg-white p-2 rounded-lg shadow-sm">payments</span>
              <span className="text-sm font-bold text-slate-700">Transparent pricing at launch</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-accent bg-white p-2 rounded-lg shadow-sm">style</span>
              <span className="text-sm font-bold text-slate-700">One active trial card at a time</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-accent bg-white p-2 rounded-lg shadow-sm">block</span>
              <span className="text-sm font-bold text-slate-700">Built to stop surprise renewals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-black tracking-tight leading-tight">
                Free trials are easy to start and <span className="text-slate-400">easy to forget.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Companies count on you forgetting to cancel. They make the signup 1-click and the cancellation a 10-step obstacle course. TrialLock flips the script.
              </p>

              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500">cancel</span>
                  <span className="text-slate-700 font-medium">No more &quot;oops&quot; charges on your bank statement.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500">cancel</span>
                  <span className="text-slate-700 font-medium">No more digging for cancellation buttons in settings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500">cancel</span>
                  <span className="text-slate-700 font-medium">No more sharing your real card with every website.</span>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 relative w-full">
              <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl relative z-10">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <div className="text-white font-bold">Billing Alert</div>
                  <div className="text-slate-400 text-sm">Just now</div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="bg-red-500/20 p-2 rounded-lg text-red-500">
                    <span className="material-symbols-outlined">block</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-bold text-sm">Payment Blocked</div>
                    <div className="text-slate-400 text-xs">$29.99 attempted by Netflix Inc.</div>
                  </div>
                </div>

                <div className="mt-6 text-center text-accent text-sm font-bold">
                  TrialLock prevented this charge.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-black tracking-tight">Three steps to peace of mind</h2>
            <p className="text-slate-600">The simplest way to manage your subscriptions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4 group hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold text-xl group-hover:bg-accent group-hover:text-white transition-all">1</div>
              <h3 className="text-xl font-bold">Generate</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Create a unique virtual card for any new free trial in one click.</p>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4 group hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold text-xl group-hover:bg-accent group-hover:text-white transition-all">2</div>
              <h3 className="text-xl font-bold">Start Trial</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Use the TrialLock card details to sign up. No need to worry about the expiration date.</p>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4 group hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-bold text-xl group-hover:bg-accent group-hover:text-white transition-all">3</div>
              <h3 className="text-xl font-bold">Block Renewal</h3>
              <p className="text-slate-600 text-sm leading-relaxed">The card automatically disables after the trial period ends. Charge blocked, mission accomplished.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Waitlist */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-primary rounded-3xl p-10 lg:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tight">Move up the list</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">Invite friends to join the waitlist and get early access to the TrialLock beta.</p>

              <div className="grid sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto mt-12">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <div className="text-accent font-bold text-lg mb-1">1 Friend</div>
                  <p className="text-xs text-slate-300">Move up 100 spots in the queue</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl ring-1 ring-accent">
                  <div className="text-accent font-bold text-lg mb-1">3 Friends</div>
                  <p className="text-xs text-slate-300">Priority Beta access invitation</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <div className="text-accent font-bold text-lg mb-1">5 Friends</div>
                  <p className="text-xs text-slate-300">Guaranteed access + 1 year Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-8">Ready to reclaim your subscriptions?</h2>
          <p className="text-xl text-slate-600 mb-12">Join {stats.totalCount} others who are already signed up for a stress-free trial experience.</p>

          <div className="flex justify-center">
            <Link href="#join" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-primary/20">
              Join Waitlist Now
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-400">No credit card required to join the waitlist.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-md">
              <span className="material-symbols-outlined text-white text-sm">shield_lock</span>
            </div>
            <span className="text-sm font-bold tracking-tight text-primary">TrialLock</span>
          </div>
          <div className="text-slate-400 text-xs font-medium">
            © 2026 TrialLock. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs font-bold text-slate-600 uppercase tracking-widest">
            <a className="hover:text-accent transition-colors" href="#">Privacy</a>
            <a className="hover:text-accent transition-colors" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
