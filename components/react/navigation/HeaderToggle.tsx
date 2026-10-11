export function HeaderToggle({ pressed, onChange, label, children }: { pressed: boolean; onChange: (v: boolean) => void; label: string; children: React.ReactNode }) {
  return (
    <button type="button" aria-pressed={pressed} aria-label={label} onClick={() => onChange(!pressed)}
      className={`grid size-[26px] place-items-center rounded-md transition-colors
        ${pressed ? "bg-[#171329] text-[#9C86FF]" : "text-[#A1A1AA] hover:bg-[#181715]"}`}>
      <span className="size-4">{children}</span>
    </button>
  );
}
// <HeaderToggle pressed={browserOpen} onChange={setBrowserOpen} label="Browser"><GlobeIcon /></HeaderToggle>
