type Model = { name: string; usage: string; share: string };
type Props = {
  bars: { h: number; on: boolean }[];   // h = bar height in px (max 159)
  yLabels: string[]; xLabels: string[]; models: Model[];
  activeTab?: string; activeRange?: string;
};

function Pill({ label, selected }: { label: string; selected?: boolean }) {
  return (
    <span className={`inline-flex h-5 items-center rounded px-1.5 text-[13px] font-medium
      ${selected ? "bg-[#272729] text-white" : "text-[#A1A1AA]"}`}>{label}</span>
  );
}

export function AnalyticsCard({ bars, yLabels, xLabels, models, activeTab = "Overview", activeRange = "All" }: Props) {
  return (
    <div className="flex w-full max-w-[485px] flex-col gap-5 rounded-xl bg-[#181715] p-4 text-white">
      <div className="flex items-center gap-0.5">
        {["Overview", "Models"].map(t => <Pill key={t} label={t} selected={t === activeTab} />)}
        <span className="flex-1" />
        {["All", "30d", "7d"].map(r => <Pill key={r} label={r} selected={r === activeRange} />)}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex h-[161px] gap-4">
          <div className="flex w-[45px] flex-col items-end justify-between text-xs font-medium text-[#A1A1AA]">
            {yLabels.map(l => <span key={l}>{l}</span>)}
          </div>
          <div className="flex flex-1 items-end gap-1.5 pr-3">
            {bars.map((b, i) => (
              <div key={i} className="flex-1 rounded-t-sm" style={{ height: b.h, background: b.on ? "#7F64F7" : "#272729" }} />
            ))}
          </div>
        </div>
        <div className="flex justify-between pl-[76px] pr-3 text-xs font-medium text-[#A1A1AA]">
          {xLabels.map(l => <span key={l}>{l}</span>)}
        </div>
      </div>
      <ul className="flex flex-col gap-3.5">
        {models.map(m => (
          <li key={m.name} className="flex items-center justify-between text-[13px] font-medium">
            <span className="flex items-center gap-2"><i className="size-2.5 rounded-sm bg-[#9C86FF]" />{m.name}</span>
            <span className="flex items-center text-xs">
              <span className="me-8 font-normal text-[#A1A1AA]">{m.usage}</span>
              <span className="w-[60px] text-end">{m.share}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
