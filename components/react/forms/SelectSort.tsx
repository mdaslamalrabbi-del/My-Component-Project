export function SelectSort({ label = "Sort by", value = "Next run", onClick }: { label?: string; value?: string; onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-haspopup="listbox"
      className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[#27272A] pl-3 pr-2.5 text-sm hover:bg-[#2f2f33]">
      <span className="text-[#A1A1AA]">{label}</span>
      <span className="text-white">{value}</span>
      <svg viewBox="0 0 24 24" className="size-3 text-[#A1A1AA]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
    </button>
  );
}
