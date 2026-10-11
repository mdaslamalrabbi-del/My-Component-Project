type Props = { label?: string; icon?: React.ReactNode; active?: boolean; large?: boolean; onClick?: () => void };

export function ModeSwitchItem({ label, icon, active, large, onClick }: Props) {
  const size = icon ? "h-6 px-3 py-1" : large ? "h-[26px] px-4 py-2 text-sm" : "h-[22px] px-3 py-1.5 text-xs";
  return (
    <button type="button" role="tab" aria-selected={active} onClick={onClick}
      className={`inline-flex items-center justify-center rounded ${size}
        ${active ? "bg-[#27272A] font-medium text-white" : "text-[#D2CFD9]"} ${large && !active ? "rounded-md" : ""}`}>
      {icon ?? label}
    </button>
  );
}
