type Props = { value: string; onChange: (v: string) => void; options: string[]; type?: "time" | "number" };

export function SelectTime({ value, onChange, options, type = "number" }: Props) {
  return (
    <div className={`relative inline-flex h-8 items-center rounded-lg bg-[#202022] pr-2 focus-within:ring-1 focus-within:ring-[#9C86FF]
      ${type === "time" ? "w-[84px]" : "w-24"}`}>
      <select value={value} onChange={(e) => onChange(e.target.value)} aria-label={type === "time" ? "Time" : "Number"}
        className={`h-full w-full cursor-pointer appearance-none bg-transparent pl-2 outline-none
          ${type === "time" ? "text-sm text-[#F7F5FA]" : "text-[11px] text-white"}`}>
        {options.map((o) => <option key={o} className="bg-[#202022]">{o}</option>)}
      </select>
      <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-2 size-4 text-white" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
    </div>
  );
}
