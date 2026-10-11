import { ChevronDown, FolderOpen } from "lucide-react"; // swap for your icon set

type Props = { label?: string; leftIcon?: boolean; rightIcon?: boolean; outlined?: boolean };

export function Chip({ label, leftIcon = true, rightIcon = true, outlined = false }: Props) {
  return (
    <span
      className={`inline-flex h-5 items-center gap-1.5 rounded bg-[#272729] px-2 text-[11px] font-medium leading-4
        text-[#D2CFD9] ${outlined ? "shadow-[inset_0_0_0_1px_#333137]" : ""}`}
    >
      {leftIcon && <FolderOpen className="size-3" strokeWidth={1.5} />}
      {label}
      {rightIcon && <ChevronDown className="size-3" strokeWidth={1.5} />}
    </span>
  );
}
