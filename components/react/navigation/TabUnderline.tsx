export function TabUnderline({ label, count, active, onClick }: { label: string; count?: number; active?: boolean; onClick?: () => void }) {
  return (
    <button role="tab" aria-selected={active} onClick={onClick}
      className={`border-b-2 px-3 py-2 text-sm ${active ? "border-[#A1A1AA] text-[#D2CFD9]" : "border-transparent text-[#52525B]"}`}>
      {label}{count != null && <span className="ml-2">· {count}</span>}
    </button>
  );
}
