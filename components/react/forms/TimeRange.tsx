type Props = {
  day: string; start: string; end: string;
  onStart: (v: string) => void; onEnd: (v: string) => void;
  times: string[]; nextDay?: boolean;
};

export function TimeRange({ day, start, end, onStart, onEnd, times, nextDay }: Props) {
  const select = (value: string, onChange: (v: string) => void, label: string, big?: boolean) => (
    <div className={`relative flex h-8 items-center rounded-lg bg-[#1D1D1F] pr-2 focus-within:ring-1 focus-within:ring-[#9C86FF] ${big ? "w-24" : "w-[84px]"}`}>
      <select aria-label={label} value={value} onChange={(e) => onChange(e.target.value)}
        className={`h-full w-full cursor-pointer appearance-none bg-transparent pl-3 text-white outline-none ${big ? "text-base" : "text-xs"}`}>
        {times.map((t) => <option key={t} className="bg-[#202022]">{t}</option>)}
      </select>
      <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-2 size-4 text-white" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
    </div>
  );
  return (
    <div className="flex items-center gap-12 text-sm font-medium text-[#A1A1AA]">
      <div className="flex items-center gap-10">
        <span className="w-[92px]">{day}</span>
        <div className="flex items-center gap-2">
          {select(start, onStart, `${day} start`, true)}
          <span>To</span>
          {select(end, onEnd, `${day} end`)}
        </div>
      </div>
      {nextDay && <span>next day</span>}
    </div>
  );
}
