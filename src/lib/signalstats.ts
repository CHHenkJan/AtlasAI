// Cryptohopper signalstats.php client.
// Uses the opt-in trades=1 + extended=1 params to expose paired
// buy/sell trades and richer aggregates for the track-record UI.

export interface PairedTrade {
  exchange: string;
  market: string;
  coin: string;
  collect_currency: string;
  side: 'long';
  entry_time: number;
  entry_rate: number;
  exit_time: number;
  exit_rate: number;
  hold_seconds: number;
  result_pct: number | null;
  entry_signal_id: string | number;
  exit_signal_id: string | number;
}

export interface ExtendedAggregates {
  last_30d?: { buy: SideStats; sell: SideStats };
  last_90d?: { buy: SideStats; sell: SideStats };
  lifetime?: { buy: SideStats; sell: SideStats };
  win_rate_1d_30d_pct: number | null;
  first_signal_time: number | null;
  avg_hold_seconds: number | null;
  median_hold_seconds: number | null;
  distribution_30d: Record<string, number>;
}

interface SideStats {
  total_signals: number;
  avg_peak_pct: number | null;
}

export interface SignalStatsResponse {
  status: 0 | 1;
  message?: string;
  data?: {
    id: string;
    name: string;
    logo: string;
    link: string;
    paired_trades?: PairedTrade[];
    extended?: ExtendedAggregates;
  };
}

const API = 'https://www.cryptohopper.com/signalstats.php';

export async function fetchSignalStats(signalId: number): Promise<SignalStatsResponse['data'] | null> {
  const url = `${API}?signal_id=${signalId}&exchange=all&trades=1&extended=1`;
  const res = await fetch(url, { cache: 'no-store' });
  const json = (await res.json()) as SignalStatsResponse;
  if (json.status !== 1 || !json.data) return null;
  return json.data;
}
