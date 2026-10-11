type Props = { label: string; icon?: React.ReactNode; active?: boolean; preview?: boolean; onSelect: () => void; onClose: () => void };

export function PaneTab({ label, icon, active, preview, onSelect, onClose }: Props) {
  return (
    <div role="tab" aria-selected={active}
      className={`flex h-[22px] max-w-[197px] items-center gap-1.5 rounded-md pl-1.5 pr-2 text-sm
        ${active ? "bg-[#27272A] text-white" : "text-[#D2CFD9]"} ${preview ? "italic" : ""}`}>
      <button type="button" onClick={onSelect} className="flex min-w-0 flex-1 items-center gap-1.5">
        {icon && <span className="size-3 shrink-0">{icon}</span>}
        <span className="truncate">{label}</span>
      </button>
      <button type="button" aria-label={`Close ${label}`} onClick={onClose} className="size-3 shrink-0 text-[#A1A1AA] hover:text-white"><XIcon className="size-3" /></button>
    </div>
  );
}
