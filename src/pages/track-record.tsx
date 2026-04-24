import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ExternalLink, AlertTriangle } from "lucide-react";

export default function TrackRecord() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6">
            Complete Transparency. <br className="md:hidden" />
            Every Trade. <span className="gold-gradient-text italic">Always Public.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Atlas runs exclusively on paper trading. Every signal fired, every position
            opened, every exit — all logged in real-time on Cryptohopper's public dashboard.
          </p>
        </div>

        {/* Warning Banner */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-12 flex items-start gap-4">
          <AlertTriangle className="text-destructive w-6 h-6 flex-shrink-0 mt-1" />
          <div className="text-sm text-muted-foreground">
            <h4 className="text-destructive font-medium text-base mb-1">Paper Trading Results Only</h4>
            <p className="leading-relaxed">
              All statistics below reflect simulated trading environments. Paper trading does not involve
              real capital. Simulated performance results have certain inherent limitations and do not
              predict future live results.
            </p>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total Trades", value: "[N]" },
            { label: "Win Rate", value: "[X]%" },
            { label: "Avg Hold Time", value: "[X] days" },
            { label: "Track Record", value: "[X] wks" },
          ].map((stat, i) => (
            <div key={i} className="premium-card p-6 flex flex-col items-center justify-center text-center">
              <span className="text-sm text-muted-foreground mb-2">{stat.label}</span>
              <span className="text-3xl font-serif text-foreground">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Table Placeholder */}
        <div className="border border-border rounded-xl overflow-hidden bg-card mb-12">
          <div className="p-6 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="font-serif text-xl text-foreground">Recent Paper Spot Trades</h3>
            <span className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">Auto-updates from API</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-muted-foreground">
              <thead className="text-xs uppercase bg-secondary/50 border-b border-border text-foreground">
                <tr>
                  <th className="px-6 py-4 font-medium">Asset</th>
                  <th className="px-6 py-4 font-medium">Entry Date</th>
                  <th className="px-6 py-4 font-medium">Exit Date</th>
                  <th className="px-6 py-4 font-medium text-right">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[1, 2, 3, 4, 5].map((row) => (
                  <tr key={row} className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">BTC/USDT</td>
                    <td className="px-6 py-4">YYYY-MM-DD</td>
                    <td className="px-6 py-4">YYYY-MM-DD</td>
                    <td className="px-6 py-4 text-right">
                      <span className={row % 2 === 0 ? "text-red-400" : "text-emerald-400"}>
                        {row % 2 === 0 ? "-" : "+"}[X].[X]%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#0a0810] border border-border p-10 rounded-2xl">
          <h3 className="text-2xl font-serif mb-4 text-foreground">Audit Everything</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Don't trust screenshots. Verify the complete, unedited history directly on
            the Cryptohopper platform.
          </p>
          <a
            href="https://www.cryptohopper.com/signaller?signaller_id=741"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="gold" size="lg" className="rounded-full gap-2">
              View Cryptohopper Dashboard <ExternalLink size={18} />
            </Button>
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
