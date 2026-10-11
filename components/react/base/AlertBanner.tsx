import { Info, Sun } from "lucide-react"; // swap for your icon set

type Props = {
  message: string;
  action: string;
  checked: boolean;
  onCheckedChange: (next: boolean) => void;
};

export function AlertBanner({ message, action, checked, onCheckedChange }: Props) {
  return (
    <div className="flex min-h-11 w-full items-center gap-2.5 rounded-lg border border-[#272729] px-3.5 text-sm text-[#D2CFD9]">
      <Info className="size-4 shrink-0 text-[#A1A1AA]" strokeWidth={1} />
      <p className="flex-1 py-3">{message}</p>
      <Sun className="size-4 shrink-0 text-[#A1A1AA]" strokeWidth={1} />
      <span className="me-3 whitespace-nowrap">{action}</span>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={`relative h-4 w-7 shrink-0 rounded-lg ${checked ? "bg-[#7F64F7]" : "bg-[#333137]"}`}
      >
        <span className={`absolute left-0.5 top-0.5 size-3 rounded-full bg-white transition-transform
          ${checked ? "translate-x-3" : ""}`} />
      </button>
    </div>
  );
}
