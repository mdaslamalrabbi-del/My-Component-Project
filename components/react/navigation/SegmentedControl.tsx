type Props = { items: { value: string; label: string; icon?: React.ReactNode }[]; value: string; onChange: (v: string) => void; iconOnly?: boolean };

export function SegmentedControl({ items, value, onChange, iconOnly }: Props) {
  return (
    <div role="tablist" className="inline-flex gap-6 rounded-xl border border-[#FAF9F5]/10 bg-[#1F1E1B] p-8">
      {items.map((it) => {
        const on = it.value === value;
        return (
          <button key={it.value} role="tab" aria-selected={on} aria-label={it.label} onClick={() => onChange(it.value)}
            className={`flex h-8 items-center justify-center gap-1.5 rounded-lg text-sm font-medium ${iconOnly ? "w-8" : "px-4"} ${on ? "border border-[#333137] bg-[#27272A] text-white" : "border border-transparent text-[#A09D96] hover:text-white"}`}>
            {it.icon}{!iconOnly && it.label}
          </button>
        );
      })}
    </div>
  );
}
