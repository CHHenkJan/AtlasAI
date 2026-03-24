import { PageLayout } from "@/components/layout/PageLayout";
import { BookOpen, LineChart, ShieldAlert, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Learn() {
  const articles = [
    {
      category: "Foundations",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        { title: "What is trend following?", desc: "The basic principles of riding momentum instead of predicting reversals." },
        { title: "Understanding moving averages", desc: "Why the 200 SMA is the cornerstone of macro analysis." },
      ]
    },
    {
      category: "Indicators",
      icon: <LineChart className="w-5 h-5" />,
      items: [
        { title: "Reading MACD signals", desc: "Using momentum oscillators to confirm entry points." },
        { title: "RSI and structural pullbacks", desc: "Identifying the difference between a dip and a crash." },
      ]
    },
    {
      category: "Risk Management",
      icon: <ShieldAlert className="w-5 h-5" />,
      items: [
        { title: "Risk management basics", desc: "Position sizing and the mathematics of ruin." },
        { title: "ATR and trailing stops", desc: "Using volatility to determine dynamic exit points." },
        { title: "DCA strategy explained", desc: "Structured accumulation during confirmed uptrends." },
      ]
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6">
            Education <span className="gold-gradient-text italic">Hub</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The best investors are the most educated ones. Explore the concepts and
            principles that drive the Atlas methodology.
          </p>
        </div>

        <div className="space-y-16">
          {articles.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
                <div className="text-primary p-2 bg-primary/10 rounded-lg">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-serif text-foreground">{section.category}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, i) => (
                  <Link href="#" key={i} className="group">
                    <div className="premium-card p-6 h-full flex flex-col cursor-pointer">
                      <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                        {item.desc}
                      </p>
                      <div className="mt-6 flex items-center text-xs font-medium text-primary uppercase tracking-wider">
                        Read Article
                        <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
