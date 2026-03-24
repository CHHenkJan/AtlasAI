import { PageLayout } from "@/components/layout/PageLayout";
import { CheckCircle2, XCircle } from "lucide-react";

export default function Methodology() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight mb-8">
            The Atlas Methodology: <br/>
            <span className="gold-gradient-text italic">Systematic, Patient, Transparent.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-left md:text-center">
            Atlas is not a black box. Every decision Atlas makes is governed by a documented,
            rule-based methodology that you can read, verify, and backtest yourself.
          </p>
          <p className="text-lg text-muted-foreground mt-4 leading-relaxed text-left md:text-center">
            Our methodology is inspired by 200+ books of financial research — from Benjamin
            Graham's value investing principles to Andreas Clenow's systematic momentum work.
            Here is exactly how Atlas makes trading decisions.
          </p>
        </div>

        <div className="space-y-16">
          {/* Layer 1 */}
          <div className="premium-card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[120px] font-serif font-bold text-primary/5 leading-none -mt-4 -mr-4 select-none">
              1
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6 flex items-center gap-4 relative z-10">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-sans font-bold border border-primary/30">1</span>
              Layer 1: Trend Filter
            </h2>
            <div className="space-y-4 text-muted-foreground relative z-10 text-lg leading-relaxed">
              <p>
                Atlas begins every analysis with one question: <strong>is the primary trend up or down?</strong>
              </p>
              <p>
                We use the 200-day Simple Moving Average (SMA) as our primary trend filter.
                When price is above the 200 SMA, we look for buy opportunities.
                When price is below, we protect capital.
              </p>
              <p>
                Why the 200 SMA? Because decades of research in traditional finance consistently
                show it separates bull market behavior from bear market behavior. We apply this
                same filter to crypto — where it is, if anything, even more powerful due to the
                market's trend-following tendencies.
              </p>
            </div>
          </div>

          {/* Layer 2 */}
          <div className="premium-card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[120px] font-serif font-bold text-primary/5 leading-none -mt-4 -mr-4 select-none">
              2
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6 flex items-center gap-4 relative z-10">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-sans font-bold border border-primary/30">2</span>
              Layer 2: Entry Confirmation
            </h2>
            <div className="space-y-4 text-muted-foreground relative z-10 text-lg leading-relaxed">
              <p>
                When the trend filter is green, Atlas looks for two additional confirmations:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-primary">
                <li><strong className="text-foreground">MACD bullish crossover</strong> on daily timeframe — momentum turning up</li>
                <li><strong className="text-foreground">RSI(14) in the 35–50 zone</strong> — pullback occurred, but not extreme</li>
              </ul>
              <p className="mt-6">
                Together, these identify structured dips within uptrends — the highest-probability
                entry points in trend-following methodology.
              </p>
            </div>
          </div>

          {/* Layer 3 */}
          <div className="premium-card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[120px] font-serif font-bold text-primary/5 leading-none -mt-4 -mr-4 select-none">
              3
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6 flex items-center gap-4 relative z-10">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-sans font-bold border border-primary/30">3</span>
              Layer 3: Risk Gate
            </h2>
            <div className="space-y-4 text-muted-foreground relative z-10 text-lg leading-relaxed">
              <p>
                Before any signal is emitted, a strict risk gate check is performed:
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span>Maximum risk: 2% of portfolio per position</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span>Maximum concurrent positions: 5</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span>Stop loss: 2.5× ATR trailing stop</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span>Portfolio heat check: no new positions if total heat &gt; 10%</span>
                </li>
              </ul>
              <p className="mt-6 font-medium text-foreground">
                If the risk gate check fails, the signal is suppressed.
              </p>
            </div>
          </div>

          {/* What Atlas Does Not Do */}
          <div className="border border-border rounded-2xl p-8 md:p-10 bg-[#0a0810]">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">What Atlas Does Not Do</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Atlas does not predict tops or bottoms.",
                "Atlas does not trade on news, sentiment, or social media.",
                "Atlas does not use leverage of any kind.",
                "Atlas does not send signals for leveraged tokens (Dutch law compliance).",
                "Atlas does not guarantee returns — no methodology can."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="text-muted-foreground w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-6 border-t border-border/50">
              <p className="text-xl font-serif italic text-primary">This discipline is the methodology.</p>
            </div>
          </div>

          {/* Disclaimer Block */}
          <div className="p-6 bg-secondary/30 rounded-xl border border-border/50 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong>Disclaimer:</strong> The methodology described above is the framework Atlas applies to paper trading.
              Paper trading does not involve real capital and results may not reflect what
              would occur in live trading due to factors including slippage, liquidity, and
              emotional execution. Not financial advice.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
