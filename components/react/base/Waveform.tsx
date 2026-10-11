const HEIGHTS = [4, 12, 8, 4, 6]; // repeats 7 times = 35 bars

export function Waveform({ bars = 35, color = "#A1A1AA" }: { bars?: number; color?: string }) {
  return (
    <div className="inline-flex h-3 items-center gap-1 px-1" aria-hidden="true">
      {Array.from({ length: bars }, (_, i) => (
        <span key={i} className="w-px rounded-full" style={{ height: HEIGHTS[i % 5], background: color }} />
      ))}
    </div>
  );
}
