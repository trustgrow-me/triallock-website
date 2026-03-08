import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-white p-1.5 rounded-lg">
              <span className="material-symbols-outlined block">shield_lock</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-primary dark:text-white">TrialLock</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-sm font-medium hover:text-accent transition-colors" href="#how-it-works">How it works</a>
            <a className="text-sm font-medium hover:text-accent transition-colors" href="#features">Features</a>
            <a className="text-sm font-medium hover:text-accent transition-colors" href="#pricing">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden sm:block text-sm font-semibold px-4 py-2 hover:text-accent">
              Log in
            </Link>
            <Link href="/request-card" className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-all shadow-sm">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full w-fit">
                <span className="text-xs font-bold tracking-wider uppercase">New: Merchant-Locked Cards</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-primary dark:text-white">
                Start free trials without <span className="text-accent italic">getting charged.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                Generate a virtual TrialLock card and block unwanted subscription renewals automatically. One card, one trial, zero stress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/request-card" className="bg-primary text-center text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20">
                  Get Your Trial Card
                </Link>
                <a href="#how-it-works" className="bg-white text-center dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-colors">
                  See how it works
                </a>
              </div>
              <div className="flex items-center gap-6 pt-4 text-slate-500">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500">check_circle</span> <span className="text-sm font-medium">No hidden fees</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500">check_circle</span> <span className="text-sm font-medium">Instant setup</span></div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-transparent blur-3xl opacity-50"></div>
              <div className="relative bg-primary rounded-3xl p-8 aspect-[1.58/1] shadow-2xl flex flex-col justify-between overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>

                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-white/50 text-4xl">contactless</span>
                  <div className="text-white font-bold tracking-widest text-xl">TrialLock</div>
                </div>

                <div className="space-y-6">
                  <div className="text-white text-3xl font-mono tracking-[0.2em]">4532 9901 2284 ••••</div>
                  <div className="flex gap-12 text-white/70">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-widest">Expiry</span>
                      <span className="text-sm font-mono">12/26</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-widest">CVV</span>
                      <span className="text-sm font-mono">***</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="text-white/40 text-xs font-medium uppercase tracking-widest">Virtual Trial Card</div>
                  <div className="bg-accent h-8 w-12 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-white dark:bg-slate-900/50" id="how-it-works">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-primary dark:text-white mb-6">Simple 3-step protection</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">Our system is designed for maximum simplicity. Stay in control of your subscriptions without the manual tracking.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 dark:bg-slate-800 hidden md:block -translate-y-1/2 -z-10"></div>

              <div className="bg-background-light dark:bg-slate-800/50 p-8 rounded-2xl flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-3xl">add_card</span>
                </div>
                <h3 className="text-xl font-bold">1. Create card</h3>
                <p className="text-slate-600 dark:text-slate-400">Instantly generate your unique virtual card in one click.</p>
              </div>

              <div className="bg-background-light dark:bg-slate-800/50 p-8 rounded-2xl flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/20">
                  <span className="material-symbols-outlined text-3xl">shopping_cart</span>
                </div>
                <h3 className="text-xl font-bold">2. Use for trial</h3>
                <p className="text-slate-600 dark:text-slate-400">Enter card details on any trial checkout. It locks to that merchant instantly.</p>
              </div>

              <div className="bg-background-light dark:bg-slate-800/50 p-8 rounded-2xl flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/20">
                  <span className="material-symbols-outlined text-3xl">block</span>
                </div>
                <h3 className="text-xl font-bold">3. We block the charge</h3>
                <p className="text-slate-600 dark:text-slate-400">We automatically decline any renewal attempts after the trial period ends.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why TrialLock */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6 h-48 flex flex-col justify-end">
                    <span className="material-symbols-outlined text-accent mb-4">bolt</span>
                    <h4 className="font-bold">Instant</h4>
                  </div>
                  <div className="bg-primary rounded-2xl p-6 h-64 flex flex-col justify-end">
                    <span className="material-symbols-outlined text-white mb-4">security</span>
                    <h4 className="font-bold text-white">Secure</h4>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="bg-accent rounded-2xl p-6 h-64 flex flex-col justify-end">
                    <span className="material-symbols-outlined text-white mb-4">refresh</span>
                    <h4 className="font-bold text-white">Unlimited</h4>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6 h-48 flex flex-col justify-end">
                    <span className="material-symbols-outlined text-primary dark:text-white mb-4">lock</span>
                    <h4 className="font-bold">Control</h4>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <h2 className="text-3xl md:text-5xl font-black text-primary dark:text-white leading-tight">One card at a time for <span className="text-accent italic">maximum control.</span></h2>

                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-accent">published_with_changes</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Single-Active Model</h4>
                      <p className="text-slate-600 dark:text-slate-400">By allowing only one active card at once, we ensure you never lose track of what you&apos;re testing. Activating a new card instantly kills the old one.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-accent">encrypted</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Secure Payments</h4>
                      <p className="text-slate-600 dark:text-slate-400">Our infrastructure uses industry-standard encryption. Your primary bank details are never shared with merchants.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-accent">speed</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Instant Generation</h4>
                      <p className="text-slate-600 dark:text-slate-400">Need a trial now? Generate details in 2 seconds and paste them into any checkout.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-primary text-white rounded-[3rem] mx-6" id="features">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Built for the subscription era.</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">Advanced features that make digital hoarding a thing of the past.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-accent rounded-xl mb-8 flex items-center justify-center">
                  <span className="material-symbols-outlined">lock_person</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Merchant-Locked</h3>
                <p className="text-slate-400 leading-relaxed">Once you use a card at a merchant, it&apos;s locked to them. No other merchant can use those details, ever.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-accent rounded-xl mb-8 flex items-center justify-center">
                  <span className="material-symbols-outlined">restart_alt</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Unlimited Regeneration</h3>
                <p className="text-slate-400 leading-relaxed">Cancel and regenerate your single active card as many times as you need. Perfect for testing multiple services.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-accent rounded-xl mb-8 flex items-center justify-center">
                  <span className="material-symbols-outlined">security_update_good</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Auto-Blocking</h3>
                <p className="text-slate-400 leading-relaxed">Our AI detects recurring billing patterns and automatically declines them. You don&apos;t have to lift a finger.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32" id="pricing">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-6">Simple, honest pricing.</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">One plan. Everything included. Unlimited peace of mind.</p>
            </div>

            <div className="max-w-md mx-auto relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-3xl blur opacity-25"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 shadow-xl">
                <div className="flex justify-between items-center mb-8">
                  <span className="px-4 py-1 bg-accent/10 text-accent text-sm font-bold rounded-full">TrialLock Pro</span>
                  <div className="text-right">
                    <span className="text-4xl font-black text-primary dark:text-white">€9</span>
                    <span className="text-slate-500 font-medium">/month</span>
                  </div>
                </div>

                <ul className="space-y-5 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent text-xl">check_circle</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">1 active card at a time</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent text-xl">check_circle</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">Unlimited card regeneration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent text-xl">check_circle</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">Secure merchant-locked payments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent text-xl">check_circle</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">Renewal protection engine</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent text-xl">check_circle</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">Global merchant support</span>
                  </li>
                </ul>

                <Link href="/login" className="block text-center w-full bg-primary text-white py-4 rounded-xl text-lg font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-primary/20">
                  Start Your Free Trial Card
                </Link>
                <p className="text-center text-xs text-slate-400 mt-6">Secure billing by Stripe. Cancel anytime.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Security */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-50 dark:bg-slate-800/30 rounded-[2rem] p-12 flex flex-col md:flex-row items-center gap-12 border border-slate-100 dark:border-slate-800">
              <div className="flex flex-wrap justify-center gap-8 md:w-1/2">
                <div className="flex flex-col items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                  <span className="material-symbols-outlined text-4xl mb-2">admin_panel_settings</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">PCI-DSS COMPLIANT</span>
                </div>
                <div className="flex flex-col items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                  <span className="material-symbols-outlined text-4xl mb-2">encrypted</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">256-BIT AES</span>
                </div>
                <div className="flex flex-col items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                  <span className="material-symbols-outlined text-4xl mb-2">verified_user</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">SCA READY</span>
                </div>
              </div>
              <div className="md:w-1/2 border-l border-slate-200 dark:border-slate-700 md:pl-12">
                <h3 className="text-2xl font-bold mb-4">Your money is safe.</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">We use Stripe&apos;s banking-as-a-service infrastructure to issue cards. Your data is encrypted end-to-end, and we never have access to your primary bank credentials.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white dark:bg-slate-900/50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="group border-b border-slate-200 dark:border-slate-800 pb-6">
                <div className="flex justify-between items-center cursor-pointer">
                  <h4 className="text-lg font-bold">Why only one card at a time?</h4>
                  <span className="material-symbols-outlined group-hover:text-accent transition-colors">expand_more</span>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">To ensure maximum security and simplicity. By focusing on one active trial at a time, we help you avoid &quot;subscription creep.&quot; It forces intentionality in how you test services.</p>
              </div>
              <div className="group border-b border-slate-200 dark:border-slate-800 pb-6">
                <div className="flex justify-between items-center cursor-pointer">
                  <h4 className="text-lg font-bold">What happens when I generate a new card?</h4>
                  <span className="material-symbols-outlined group-hover:text-accent transition-colors">expand_more</span>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">The previous card is instantly and permanently deactivated. Any further charge attempts on that old card will be rejected by our network.</p>
              </div>
              <div className="group border-b border-slate-200 dark:border-slate-800 pb-6">
                <div className="flex justify-between items-center cursor-pointer">
                  <h4 className="text-lg font-bold">What is &quot;Merchant-Locked&quot;?</h4>
                  <span className="material-symbols-outlined group-hover:text-accent transition-colors">expand_more</span>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">The first merchant to run a transaction (even a €0.00 authorization) on your card &quot;claims&quot; it. The card will then only work for that specific merchant, preventing data theft or accidental charges from other sources.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-background-dark py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary text-white p-1.5 rounded-lg">
                  <span className="material-symbols-outlined block">shield_lock</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-primary dark:text-white">TrialLock</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6">The ultimate tool for the modern consumer. Don&apos;t let subscriptions manage you—take back control of your trials.</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-accent hover:text-white transition-all">
                  <span className="material-symbols-outlined text-sm">public</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-accent hover:text-white transition-all">
                  <span className="material-symbols-outlined text-sm">alternate_email</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6">Product</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link className="hover:text-accent transition-colors" href="#features">Features</Link></li>
                <li><Link className="hover:text-accent transition-colors" href="#pricing">Pricing</Link></li>
                <li><Link className="hover:text-accent transition-colors" href="#">Security</Link></li>
                <li><Link className="hover:text-accent transition-colors" href="#">API for Developers</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Legal</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link className="hover:text-accent transition-colors" href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link className="hover:text-accent transition-colors" href="/terms-of-service">Terms of Service</Link></li>
                <li><Link className="hover:text-accent transition-colors" href="/cookie-policy">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400 uppercase tracking-widest">
            <span>© 2026 TrialLock Technologies Inc.</span>
            <div className="flex gap-8">
              <span>Built with ❤️ for savers</span>
              <span>Status: All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
