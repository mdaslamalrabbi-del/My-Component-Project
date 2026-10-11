type Tab = { id: string; label: string; count?: number };

export function TabBar({ tabs, value, onChange }: { tabs: Tab[]; value: string; onChange: (id: string) => void }) {
  return (
    <div role="tablist" className="flex w-full border-b border-[#333137]">
      {tabs.map((t) => {
        const on = t.id === value;
        return (
          <button key={t.id} role="tab" aria-selected={on} onClick={() => onChange(t.id)}
            className={`-mb-px border-b-2 px-3 py-2 text-sm font-medium ${on ? "border-white text-white" : "border-transparent text-[#71717A] hover:text-[#A1A1AA]"}`}>
            {t.label}{t.count != null && <span className="ml-2 text-[#71717A]">· {t.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
