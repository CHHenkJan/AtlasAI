import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0810] border-t border-border mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-sm overflow-hidden opacity-80">
                <img src={`${import.meta.env.BASE_URL}atlas-logo.jpg`} alt="Atlas Signals Logo" className="w-full h-full object-cover grayscale" />
              </div>
              <span className="font-serif font-semibold text-lg tracking-widest text-muted-foreground">ATLAS</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Systematic long-term crypto investing grounded in financial literature. Patience is not passive waiting; it is the active preparation for the right moment.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-foreground mb-6">Platform</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/methodology" className="text-muted-foreground hover:text-primary text-sm transition-colors">Methodology</Link></li>
              <li><Link href="/track-record" className="text-muted-foreground hover:text-primary text-sm transition-colors">Track Record</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">Products & Pricing</Link></li>
              <li><Link href="/learn" className="text-muted-foreground hover:text-primary text-sm transition-colors">Education Hub</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-foreground mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Atlas</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact Support</Link></li>
              <li><Link href="/disclaimer" className="text-muted-foreground hover:text-primary text-sm transition-colors">Legal Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col gap-6">
          <div className="text-xs text-muted-foreground leading-relaxed space-y-4 opacity-70 text-justify">
            <p>© {currentYear} Atlas Signals. Atlas is an automated paper trading agent operating on the Cryptohopper platform. All signals, strategies, and copy bot results are based exclusively on paper trading — no real capital is deployed by Atlas.</p>
            <p>This website and all its content are for informational purposes only and do not constitute financial advice, investment advice, or a solicitation to buy or sell any financial instrument. Cryptocurrency trading involves substantial risk of loss.</p>
            <p>In accordance with Dutch law, Atlas does not provide signals or products related to leveraged tokens, as these are classified as financial securities.</p>
            <p>Past performance of paper trading results is not indicative of future results. Atlas Signals operates independently and is not affiliated with any exchange or financial institution.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground opacity-60">
            <p>Built for the patient investor.</p>
            <p>support@atlas-signals.io</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
