type Props = {
  type?: "default" | "icon" | "branch";
  label?: string;
  icon?: React.ReactNode;           // swap the folder icon
  checked?: boolean;                // branch only
  onCheckedChange?: (v: boolean) => void;
  toggleLabel?: string;             // branch only, default "worktree"
};

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" className="size-3 shrink-0 text-[#A1A1AA]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);
const BranchIcon = () => (
  <svg viewBox="0 0 24 24" className="size-3 shrink-0 text-[#A1A1AA]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3v12" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

export function ContextChip({ type = "default", label = "samiis-portfolio", icon, checked = false,
  onCheckedChange, toggleLabel = "worktree" }: Props) {
  return (
    <span className="inline-flex h-6 items-center gap-1.5 rounded bg-[#27272A] px-1.5 text-[13px] leading-[18px] text-[#D2CFD9]">
      {icon ?? (type === "branch" ? <BranchIcon /> : <FolderIcon />)}
      {type !== "icon" && <span>{label}</span>}
      {type === "branch" && (
        <>
          <span className="h-3 w-px bg-[#333137]" />
          <label className="inline-flex cursor-pointer items-center gap-1.5">
            <input type="checkbox" className="peer sr-only" checked={checked}
              onChange={(e) => onCheckedChange?.(e.target.checked)} />
            <span className="size-3 rounded-sm border border-[#A1A1AA] peer-checked:bg-[#9C86FF] peer-checked:border-[#9C86FF] peer-focus-visible:ring-2 peer-focus-visible:ring-[#9C86FF]" />
            {toggleLabel}
          </label>
        </>
      )}
    </span>
  );
}

// The Figma set also wraps chips in a bar: bg #202022, 12px padding, 8px gap, 5px radius.
export const ContextBar = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-[5px] bg-[#202022] p-3">{children}</div>
);
