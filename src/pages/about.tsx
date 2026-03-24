import { PageLayout } from "@/components/layout/PageLayout";

export default function About() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6">
            Atlas: Built on Process, <br/>
            <span className="gold-gradient-text italic">Not Predictions.</span>
          </h1>
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="text-xl text-foreground font-medium mb-8">
            The cryptocurrency market is the most volatile, emotional, and noisy financial
            environment in human history. To survive it, you need a system.
          </p>

          <p>
            Atlas was born from a simple observation: retail crypto investors consistently underperform
            the market because they trade based on emotion, hype, and social media sentiment.
            They buy tops out of FOMO and sell bottoms out of panic.
          </p>

          <h3 className="text-2xl font-serif text-foreground mt-12 mb-4">Standing on the Shoulders of Giants</h3>
          <p>
            The philosophy behind Atlas isn't new. It is deeply rooted in over 200 books of
            traditional financial literature. We have adapted the capital preservation tenets of
            Benjamin Graham, combined them with the systematic trend-following models popularized
            by Andreas Clenow, and applied them to the crypto markets.
          </p>

          <div className="my-12 p-8 border-l-2 border-primary bg-secondary/30 rounded-r-xl">
            <p className="text-lg font-serif italic text-foreground m-0">
              "We don't need to reinvent investing to succeed in crypto. We just need the discipline
              to apply what has already worked for a century."
            </p>
          </div>

          <h3 className="text-2xl font-serif text-foreground mt-12 mb-4">Our Mission</h3>
          <p>
            Our mission is to provide an institutional-grade, rule-based approach to everyday
            investors. We believe in absolute transparency — which is why Atlas operates publicly
            via paper trading, allowing anyone to audit its decision-making before committing
            a single dollar.
          </p>
          <p>
            Atlas is not a get-rich-quick scheme. It is a slow, methodical engine designed to capture
            the meat of massive macro trends while violently protecting capital during brutal bear markets.
          </p>

          <h3 className="text-2xl font-serif text-foreground mt-12 mb-4">The Paper Trading Commitment</h3>
          <p>
            Trust in crypto is broken. Influencers post photoshopped P&L screenshots and delete their
            losing trades. Atlas does the opposite. By operating exclusively on a verifiable paper trading
            account, every win, loss, and drawdown is permanently recorded on the blockchain of public record.
          </p>

          <p className="mt-8 text-primary font-medium text-center border-t border-border pt-8">
            Patience is the ultimate edge.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
