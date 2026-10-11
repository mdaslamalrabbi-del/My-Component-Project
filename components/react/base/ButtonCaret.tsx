import { ChevronDown } from "lucide-react"; // swap for your icon set

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { pressed?: boolean };

export function CaretButton({ pressed = false, ...props }: Props) {
  return (
    <button
      aria-label="Toggle"
      className={`flex size-2.5 items-center justify-center rounded-xl text-[#A1A1AA] active:h-4 active:bg-[#272729]
        ${pressed ? "h-4 bg-[#272729]" : ""}`}
      {...props}
    >
      <ChevronDown className="size-2.5 shrink-0" strokeWidth={1.5} />
    </button>
  );
}
