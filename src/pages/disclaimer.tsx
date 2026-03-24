import { PageLayout } from "@/components/layout/PageLayout";

export default function Disclaimer() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
        <h1 className="text-3xl md:text-4xl font-serif font-medium mb-12">
          Risk Disclosure & Legal Disclaimer
        </h1>

        <div className="prose prose-invert prose-sm sm:prose-base max-w-none text-muted-foreground space-y-8">
          <p className="text-xs uppercase tracking-wider text-primary mb-8">Last updated: {new Date().toISOString().split('T')[0]}</p>

          <section>
            <h3 className="text-foreground font-semibold text-lg mb-2">1. PAPER TRADING DISCLOSURE</h3>
            <p>
              Atlas Signals ("Atlas") operates exclusively using paper trading on the Cryptohopper
              platform. Paper trading simulates trades without using real money. All results,
              statistics, and performance metrics shown on this website and on the Cryptohopper
              marketplace are derived from paper trading only. No real capital is deployed by Atlas.
            </p>
          </section>

          <section>
            <h3 className="text-foreground font-semibold text-lg mb-2">2. NOT FINANCIAL ADVICE</h3>
            <p>
              All content on this website, including but not limited to signals, strategies,
              educational material, and track record data, is provided for informational and
              educational purposes only. Nothing on this website constitutes financial advice,
              investment advice, trading advice, or any other type of advice. You should not treat
              any information on this website as a basis for making financial or investment decisions.
            </p>
          </section>

          <section>
            <h3 className="text-foreground font-semibold text-lg mb-2">3. RISK WARNING</h3>
            <p>
              Cryptocurrency trading involves substantial risk of loss. Digital assets are highly
              volatile and can decrease in value rapidly. You may lose all of your invested capital.
              You should only trade with capital that you can afford to lose entirely. Past
              performance — even paper trading performance — is not indicative of future results.
            </p>
          </section>

          <section>
            <h3 className="text-foreground font-semibold text-lg mb-2">4. LEVERAGED TOKENS</h3>
            <p>
              In accordance with Dutch law, Atlas does not provide signals, strategies, or any
              trading products related to leveraged tokens. Leveraged tokens are classified as
              financial securities under Dutch financial regulations. This restriction applies
              to all Atlas products on the Cryptohopper marketplace.
            </p>
          </section>

          <section>
            <h3 className="text-foreground font-semibold text-lg mb-2">5. NO GUARANTEES</h3>
            <p>
              Atlas makes no guarantees, representations, or warranties, express or implied,
              regarding the accuracy, completeness, or profitability of any signal, strategy,
              or trading methodology. The use of Atlas's products is entirely at your own risk.
            </p>
          </section>

          <section>
            <h3 className="text-foreground font-semibold text-lg mb-2">6. INDEPENDENT RESEARCH</h3>
            <p>
              We strongly encourage all users to conduct their own independent research before
              making any trading decisions. Subscribing to Atlas signals or strategies does not
              replace independent analysis.
            </p>
          </section>

          <section>
            <h3 className="text-foreground font-semibold text-lg mb-2">7. REGULATORY STATUS</h3>
            <p>
              Atlas Signals is not a licensed financial advisor, investment manager, or broker-dealer.
              Atlas is not regulated by the AFM (Autoriteit Financiële Markten) or any
              other financial regulatory authority.
            </p>
          </section>

          <section>
            <h3 className="text-foreground font-semibold text-lg mb-2">8. CONTACT</h3>
            <p>
              For questions about this disclaimer: <a href="mailto:support@atlas-signals.io" className="text-primary hover:underline">support@atlas-signals.io</a>
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
