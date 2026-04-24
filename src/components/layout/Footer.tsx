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
                <img src={`${import.meta.env.BASE_URL}atlas-logo.svg`} alt="Atlas Signals Logo" className="w-full h-full object-contain" />
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

          <div className="flex items-center gap-5 pt-2">
            <a
              href="https://x.com/AtlasTheSage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atlas on X"
              className="text-muted-foreground/70 hover:text-primary transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://t.me/atlasthesage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atlas on Telegram"
              className="text-muted-foreground/70 hover:text-primary transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
                <path d="M9.993 15.973l-.397 5.59c.569 0 .814-.244 1.109-.537l2.663-2.548 5.518 4.04c1.012.558 1.725.264 1.998-.931l3.622-16.972h.001c.322-1.496-.541-2.082-1.526-1.715L1.68 9.118c-1.454.571-1.432 1.386-.247 1.752l5.444 1.697L19.52 4.599c.595-.395 1.136-.176.691.219z" />
              </svg>
            </a>
            <span
              aria-label="Atlas on Facebook — coming soon"
              title="Facebook — coming soon"
              className="text-muted-foreground/40 cursor-not-allowed"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
