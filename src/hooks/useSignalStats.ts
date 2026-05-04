import { useQuery } from "@tanstack/react-query";
import { fetchSignalStats } from "@/lib/signalstats";

const ATLAS_SIGNALLER_ID = 741;

export function useAtlasSignalStats() {
  return useQuery({
    queryKey: ["signalstats", ATLAS_SIGNALLER_ID],
    queryFn: () => fetchSignalStats(ATLAS_SIGNALLER_ID),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
}

export function formatHold(seconds: number | null | undefined): string {
  if (!seconds || seconds <= 0) return "—";
  if (seconds < 3600) return `${Math.round(seconds / 60)}m`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)}h`;
  return `${Math.round(seconds / 86400)}d`;
}

export function formatHoldDays(seconds: number | null | undefined): string {
  if (!seconds || seconds <= 0) return "—";
  return `${(seconds / 86400).toFixed(1)} days`;
}

export function formatDate(unix: number | null | undefined): string {
  if (!unix) return "—";
  return new Date(unix * 1000).toISOString().slice(0, 10);
}

export function formatPct(n: number | null | undefined, digits = 2): string {
  if (n === null || n === undefined || Number.isNaN(n)) return "—";
  const sign = n >= 0 ? "+" : "-";
  return `${sign}${Math.abs(n).toFixed(digits)}%`;
}

export function weeksSince(unix: number | null | undefined): string {
  if (!unix) return "—";
  const weeks = Math.max(1, Math.floor((Date.now() / 1000 - unix) / (7 * 86400)));
  return `${weeks} wks`;
}
