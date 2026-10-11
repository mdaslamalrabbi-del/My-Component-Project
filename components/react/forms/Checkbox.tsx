type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> & { onCheckedChange?: (v: boolean) => void };

export function Checkbox({ onCheckedChange, className = "", ...props }: Props) {
  return (
    <label className={`relative inline-grid size-5 cursor-pointer place-items-center ${className}`}>
      <input type="checkbox" className="peer sr-only" onChange={(e) => onCheckedChange?.(e.target.checked)} {...props} />
      <span className="absolute inset-0 rounded-md border border-[#333137] bg-[#27272A]
        peer-checked:border-[#9C86FF] peer-checked:bg-[#9C86FF] peer-focus-visible:ring-2 peer-focus-visible:ring-[#9C86FF]
        peer-disabled:opacity-50" />
      <svg viewBox="0 0 24 24" className="pointer-events-none relative size-3.5 text-white opacity-0 peer-checked:opacity-100"
        fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
    </label>
  );
}
