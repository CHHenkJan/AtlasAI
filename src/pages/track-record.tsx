import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ExternalLink, AlertTriangle } from "lucide-react";
import {
  useAtlasSignalStats,
  formatDate,
  formatHoldDays,
  formatPct,
  weeksSince,
} from "@/hooks/useSignalStats";

// The signaller fires the same logical trade across every supported
// exchange. Dedupe by (coin, exit_time bucketed to 30 minutes).
function dedupeTrades<T extends { coin: string; exit_time: number }>(trades: T[]): T[] {
  const seen = new Set<string>();
  const out: T[] = [];
  for (const t of trades) {
    const bucket = Math.floor((t.exit_time || 0) / 1800);
    const key = `${t.coin}|${bucket}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(t);
  }
  return out;
}

export default function TrackRecord() {
  const { data } = useAtlasSignalStats();
  const ext = data?.extended;
  const trades = dedupeTrades(data?.paired_trades ?? []);

  const stats = [
    {
      label: "Total Trades",
      value: ext?.lifetime?.buy?.total_signals != null
        ? ext.lifetime.buy.total_signals.toLocaleString()
        : "—",
    },
    {
      label: "Win Rate",
      value: ext?.win_rate_1d_30d_pct != null ? `${Math.round(ext.win_rate_1d_30d_pct)}%` : "—",
    },
    {
      label: "Avg Hold Time",
      value: formatHoldDays(ext?.avg_hold_seconds),
    },
    {
      label: "Track Record",
      value: weeksSince(ext?.first_signal_time),
    },
  ];

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
          {stats.map((stat, i) => (
            <div key={i} className="premium-card p-6 flex flex-col items-center justify-center text-center">
              <span className="text-sm text-muted-foreground mb-2">{stat.label}</span>
              <span className="text-3xl font-serif text-foreground">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Trade Log */}
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
                {trades.length === 0 ? (
                  Array.from({ length: 5 }).map((_, row) => (
                    <tr key={row} className="hover:bg-secondary/20 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">—</td>
                      <td className="px-6 py-4">—</td>
                      <td className="px-6 py-4">—</td>
                      <td className="px-6 py-4 text-right">—</td>
                    </tr>
                  ))
                ) : (
                  trades.slice(0, 10).map((t) => {
                    const win = (t.result_pct ?? 0) >= 0;
                    return (
                      <tr key={String(t.exit_signal_id)} className="hover:bg-secondary/20 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground">{t.market}</td>
                        <td className="px-6 py-4">{formatDate(t.entry_time)}</td>
                        <td className="px-6 py-4">{formatDate(t.exit_time)}</td>
                        <td className="px-6 py-4 text-right">
                          <span className={win ? "text-emerald-400" : "text-red-400"}>
                            {formatPct(t.result_pct)}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                )}
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
