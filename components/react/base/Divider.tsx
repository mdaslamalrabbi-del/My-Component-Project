type Props = { type?: "default" | "padded" | "vertical" | "wave"; className?: string };

const WAVE = "M0 3" + " q2.5 -1.6 5 0" + " t5 0".repeat(59);

export function Divider({ type = "default", className = "" }: Props) {
  if (type === "wave")
    return (
      <svg role="separator" viewBox="0 0 300 6" preserveAspectRatio="none" fill="none"
        className={`h-1.5 w-full text-[#272729] ${className}`}>
        <path d={WAVE} stroke="currentColor" />
      </svg>
    );
  if (type === "vertical")
    return <div role="separator" aria-orientation="vertical" className={`my-2 h-6 w-px bg-[#272729] ${className}`} />;
  return <div role="separator" className={`h-px bg-[#272729] ${type === "padded" ? "mx-2" : "w-full"} ${className}`} />;
}
