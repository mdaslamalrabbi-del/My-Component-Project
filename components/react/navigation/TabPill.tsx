export function TabPill({ label, active, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button role="tab" aria-selected={active} onClick={onClick}
      className={`rounded-lg px-3 py-1.5 text-sm text-white ${active ? "bg-[#141311]" : "bg-transparent hover:bg-[#141311]/60"}`}>
      {label}
    </button>
  );
}

export function TabPillGroup({ items, value, onChange }: { items: string[]; value: string; onChange: (v: string) => void }) {
  return <div role="tablist" className="inline-flex gap-4 rounded-xl bg-[#1C1B19] p-8">{items.map((i) => <TabPill key={i} label={i} active={i === value} onClick={() => onChange(i)} />)}</div>;
}
