type Item = { value: string; label: string };

export function SearchableMenu({ items, value, onChange }: { items: Item[]; value?: string; onChange: (v: string) => void }) {
  const [q, setQ] = React.useState("");
  const shown = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="w-[180px] rounded-lg bg-[#202022] p-1 shadow-xl">
      <div className="mb-1 flex h-8 items-center gap-2 rounded-md bg-[#27272A] px-2">
        <svg viewBox="0 0 24 24" className="size-3.5 text-[#6C6A64]" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className="w-full bg-transparent text-xs text-white outline-none placeholder:text-[#6C6A64]" />
      </div>
      <div role="listbox" className="max-h-[216px] overflow-y-auto">
        {shown.map((i) => (
          <div key={i.value} role="option" aria-selected={i.value === value} onClick={() => onChange(i.value)}
            className="flex h-[26px] cursor-pointer items-center justify-between rounded px-2 text-[13px] text-[#D2CFD9] hover:bg-[#27272A]">
            {i.label}
            {i.value === value && <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>}
          </div>
        ))}
      </div>
    </div>
  );
}
