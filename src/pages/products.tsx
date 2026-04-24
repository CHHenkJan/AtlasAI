import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: "signals",
      name: "Atlas Signals — Systematic Long-Term",
      label: "SIGNALS",
      price: "$19",
      period: "mo",
      descriptor: "5–15 signals/month",
      url: "https://www.cryptohopper.com/signaller?signaller_id=741",
      features: [
        "Daily buy and sell signals",
        "Three-layer validation methodology",
        "Covers BTC, ETH, and top-cap altcoins",
        "Daily timeframes (multi-day holds)"
      ],
      description: "Daily buy and sell signals based on Atlas's systematic trend-following methodology. Each signal passes a three-layer validation: macro trend filter (200-day moving average), entry confirmation (MACD + momentum), and risk gate (max 2% exposure per position). Suitable for patient investors who prefer a low-frequency, research-backed approach."
    },
    {
      id: "strategy",
      name: "Atlas Strategy — Trend + DCA Builder",
      label: "STRATEGY",
      price: "$14",
      period: "one-time payment",
      descriptor: "Strategy Builder",
      comingSoon: true,
      features: [
        "Pre-configured Strategy Builder setup",
        "EMA(200), MACD(12,26,9), RSI(14) stack",
        "Designed for wide stops & disciplined exits",
        "Methodology updates included monthly"
      ],
      description: "Pre-configured Strategy Builder setup based on Atlas's conservative trend-following philosophy. Download and apply directly to your Cryptohopper. Pairs best with the Atlas Bot Template for complete position sizing and DCA configuration. Strategy configuration is visible and editable after download."
    },
    {
      id: "template",
      name: "Atlas Complete Bot Template",
      label: "TEMPLATE",
      price: "Free",
      period: "",
      descriptor: "Full Config",
      popular: true,
      url: "https://www.cryptohopper.com/marketplace/search?q=Atlas&category%5B%5D=templates",
      features: [
        "Full bot configuration (coins, sizing)",
        "3-level DCA ladder pre-set",
        "Compatible with major exchanges"
      ],
      description: "Full bot configuration reflecting Atlas's complete trading setup. Includes coin selection, position sizing (2% max per position), 3-level DCA ladder (at 5% price intervals), and all strategy parameters pre-loaded. Apply directly to any Cryptohopper bot. Ideal for new users who want a proven conservative configuration."
    },
    {
      id: "copybot",
      name: "Atlas Copy Bot — Mirror the Source",
      label: "COPY BOT",
      price: "$39",
      period: "mo",
      descriptor: "Mirror Trading",
      url: "https://www.cryptohopper.com/marketplace/search?q=Atlas&category%5B%5D=copytrading",
      features: [
        "Mirror Atlas's active paper trading bot",
        "Fully transparent realtime positions",
        "Trades scaled to your portfolio size",
        "Maximum 250 copiers for signal integrity"
      ],
      description: "Mirror Atlas's active paper trading bot directly. Every trade Atlas places is automatically replicated in your account, scaled to your portfolio size. Full transparency: open positions, closed trades, P&L, and decision logs are visible in real-time at all times. Recommended minimum portfolio: $500 equivalent."
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6">
            Start with signals. <span className="gold-gradient-text italic">Scale to a system.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            All products reflect Atlas's paper trading methodology. Transparency is built into every tier.
          </p>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Exchanges we support:</p>
            <div className="flex flex-wrap items-center justify-start md:justify-center gap-x-8 gap-y-4 px-2">
              {[
                { name: "Crypto.com", file: "crypto.com", url: "https://crypto.com/exch/4pv7m446qs" },
                { name: "Bybit", file: "bybit" },
                { name: "KuCoin", file: "kucoin", url: "https://www.kucoin.com/r/af/s7ywae" },
                { name: "Coinbase", file: "coinbase", url: "https://coinbase-consumer.sjv.io/anKdgR" },
                { name: "OKX", file: "okx", url: "https://www.okx.com/join/1850952" },
                { name: "BingX", file: "bingx", url: "https://bingx.com/invite/AAAR94" },
                { name: "Bitvavo", file: "bitvavo", url: "https://bitvavo.com/en/affiliate/cryptohopper" },
                { name: "Binance", file: "binance", url: "https://www.binance.com/en/register?ref=P6CD65KX" },
                { name: "Binance US", file: "binance-us", url: "https://www.binance.us/" },
                { name: "Kraken", file: "kraken", url: "https://kraken.pxf.io/LXGyW0" },
                { name: "BitMart", wordmark: "BitMart", url: "https://www.bitmart.com/register-referral/en?r=VuEYv4" },
                { name: "HTX", wordmark: "HTX", url: "https://www.htx.co.zw/invite/en-us/1h?invite%5Fcode=9cqt3" },
              ].map((ex) => {
                const content = ex.wordmark ? (
                  <span className="font-serif font-semibold tracking-[0.18em] text-primary text-base leading-none h-6 flex items-center">
                    {ex.wordmark}
                  </span>
                ) : (
                  <img
                    src={`${import.meta.env.BASE_URL}exchanges/${ex.file}.svg`}
                    alt={ex.name}
                    loading="lazy"
                    className="h-6 w-auto"
                  />
                );
                return ex.url ? (
                  <a
                    key={ex.name}
                    href={ex.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    title={ex.name}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={ex.name}
                    title={ex.name}
                    className="opacity-70"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className={`premium-card p-8 flex flex-col h-full relative overflow-hidden ${
                product.popular ? 'border-primary/40 shadow-[0_0_20px_rgba(201,168,76,0.05)]' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">
                    {product.label}
                  </span>
                  <h2 className="text-2xl font-serif text-foreground">{product.name}</h2>
                </div>
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-foreground">{product.price}</span>
                {product.period === 'mo' && <span className="text-muted-foreground">/{product.period}</span>}
                {product.period === 'one-time payment' && <span className="text-muted-foreground ml-2">one-time payment</span>}
              </div>

              <div className="text-xs font-mono text-muted-foreground bg-secondary/50 inline-block px-3 py-1.5 rounded mb-6 self-start border border-border">
                {product.descriptor}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                {product.description}
              </p>

              <div className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              {product.comingSoon ? (
                <Button variant="outline" disabled className="w-full text-muted-foreground">
                  Coming soon
                </Button>
              ) : (
                <a href={product.url} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant={product.popular ? "gold" : "outline"} className="w-full">
                    View on Cryptohopper
                  </Button>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 text-sm text-muted-foreground text-center max-w-4xl mx-auto">
          <p>
            <strong>Risk Warning:</strong> All products reflect Atlas's paper trading methodology.
            Performance shown on marketplaces is from paper trading only. No real capital is deployed
            by Atlas. Cryptocurrency trading involves significant risk of loss. Past performance does
            not guarantee future results.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
