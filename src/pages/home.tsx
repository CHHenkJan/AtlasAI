import { Link } from "wouter";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, ShieldCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <PageLayout>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center flex flex-col items-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-foreground max-w-4xl leading-[1.1] mb-6">
            Systematic Crypto Investing, <br className="hidden md:block" />
            <span className="gold-gradient-text italic">Built on 200 Years</span> of Financial Research.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Atlas applies time-tested trend-following and dollar-cost averaging principles to cryptocurrency markets — running a verified paper trading track record that anyone can audit, at any time.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
            <Link href="/track-record" className="w-full sm:w-auto">
              <Button variant="gold" size="lg" className="w-full sm:w-auto rounded-full group text-base px-8">
                View Track Record <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/methodology" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base px-8 border-border hover:border-primary/50">
                See Methodology
              </Button>
            </Link>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="mt-8 text-xs text-muted-foreground opacity-60">
            All results from paper trading only. Not financial advice. Past performance does not guarantee future results.
          </motion.p>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 bg-[#0a0810] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">
              Most crypto traders lose. <span className="text-primary italic">Here's why Atlas is different.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left md:text-center">
              <p>The typical crypto investor makes emotional decisions — buying into hype, selling into fear, and abandoning strategy the moment markets move against them.</p>
              <p className="text-foreground font-medium text-xl">Atlas eliminates emotion entirely.</p>
              <p>Every buy signal requires three independent confirmations. Every position has a defined risk level. Every trade is logged publicly before it's closed. No hindsight. No cherry-picking. Complete transparency.</p>
              <p className="text-primary/90 font-serif italic pt-4">This is not a promise of profit. This is a promise of process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">The Methodology</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Three pillars protecting every decision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="premium-card p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20"><TrendingUp size={24} /></div>
              <h3 className="text-xl font-serif font-medium mb-4 text-foreground">Trend First</h3>
              <p className="text-muted-foreground leading-relaxed">Atlas only buys in confirmed uptrends. The 200-day moving average filters out 80% of false signals. No trend = no trade.</p>
            </div>
            <div className="premium-card p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20"><BarChart2 size={24} /></div>
              <h3 className="text-xl font-serif font-medium mb-4 text-foreground">Wait for the Dip</h3>
              <p className="text-muted-foreground leading-relaxed">Within an uptrend, Atlas waits for structured pullbacks to key moving averages before entering. Better prices mean better risk/reward.</p>
            </div>
            <div className="premium-card p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20"><ShieldCheck size={24} /></div>
              <h3 className="text-xl font-serif font-medium mb-4 text-foreground">Risk Always First</h3>
              <p className="text-muted-foreground leading-relaxed">Maximum 2% of portfolio per position. ATR-based trailing stops on every trade. Capital preservation comes before gains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK RECORD PREVIEW */}
      <section className="py-24 bg-[#0a0810] border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                Complete Transparency.<br/>Every Trade. <span className="text-primary italic">Always Public.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">Atlas runs exclusively on paper trading. Every signal fired, every position opened, every exit — all logged in real-time on Cryptohopper's public dashboard.</p>
              <p className="text-muted-foreground leading-relaxed mb-8">You can verify every number before subscribing. There are no private results, no curated screenshots, and no deleted trades.</p>
              <a
                href="https://www.cryptohopper.com/signaller?signaller_id=741"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="outline" className="rounded-full text-foreground hover:text-primary group">
                  View Full Track Record on Cryptohopper <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
              <div className="grid grid-cols-2 gap-8 relative z-10">
                <div><p className="text-sm text-muted-foreground mb-1">Total trades</p><p className="text-3xl font-serif text-foreground">[N]</p></div>
                <div><p className="text-sm text-muted-foreground mb-1">Win rate</p><p className="text-3xl font-serif text-foreground">[X]%</p></div>
                <div><p className="text-sm text-muted-foreground mb-1">Avg hold time</p><p className="text-3xl font-serif text-foreground">[X] days</p></div>
                <div><p className="text-sm text-muted-foreground mb-1">Track record</p><p className="text-3xl font-serif text-foreground">[X] weeks</p></div>
              </div>
              <div className="mt-8 p-4 bg-destructive/5 border border-destructive/20 rounded-lg flex items-start gap-3">
                <span className="text-destructive text-lg">⚠️</span>
                <p className="text-xs text-muted-foreground">Paper trading results only. Past performance does not predict future results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS OVERVIEW */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Start with signals. Scale to a system.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { price: "$19/mo", title: "Signals", desc: "Daily buy and sell alerts based on Atlas's methodology. Perfect for traders who want signals without strategy complexity.", url: "https://www.cryptohopper.com/signaller?signaller_id=741" },
              { price: "$14/mo", title: "Strategy", desc: "Full Strategy Builder configuration. Download and apply to any bot. Fully transparent parameters.", comingSoon: true },
              { price: "Free", title: "Template", desc: "Complete bot configuration — coins, sizing, stops, DCA all pre-set exactly as Atlas trades them.", popular: true, url: "https://www.cryptohopper.com/marketplace/search?q=Atlas&category%5B%5D=templates" },
              { price: "$39/mo", title: "Copy Bot", desc: "Mirror Atlas's paper trading bot directly. Fully transparent execution without lifting a finger.", url: "https://www.cryptohopper.com/marketplace/search?q=Atlas&category%5B%5D=copytrading" },
            ].map((p, i) => (
              <div key={i} className={`premium-card p-6 flex flex-col h-full relative overflow-hidden ${p.popular ? 'border-primary/30' : ''}`}>
                {p.popular && <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>}
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs text-primary font-medium mb-4">{p.price}</span>
                <h3 className="text-xl font-serif text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{p.desc}</p>
                {p.comingSoon ? (
                  <Button variant="ghost" disabled className="mt-6 w-full text-muted-foreground">Coming soon</Button>
                ) : (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-6 block">
                    <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/10">Learn more</Button>
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-xs text-muted-foreground/60 max-w-2xl mx-auto">All products reflect Atlas's paper trading methodology. Performance shown is from paper trading only. Not financial advice.</p>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-32 bg-[#0a0810] border-t border-border/30 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <blockquote className="text-3xl md:text-5xl font-serif italic text-foreground leading-[1.4] mb-8">
            "Patience is not passive waiting. It is the active preparation for the right moment — and the discipline to act on it when it arrives."
          </blockquote>
          <cite className="block text-primary font-medium tracking-widest uppercase text-sm">— Atlas Trading Philosophy</cite>
        </div>
      </section>
    </PageLayout>
  );
}
