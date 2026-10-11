import { ChevronDown } from "lucide-react"; // swap for your icon set

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: "button" | "text";
  showLeft?: boolean;
  showRight?: boolean;
};

export function ButtonSkip({ kind = "button", showLeft = false, showRight = false, children = "Skip", ...props }: Props) {
  return (
    <button
      className={`inline-flex h-6 items-center gap-1 rounded-md px-3 text-xs leading-4 text-white
        ${kind === "button" ? "bg-[#272729]" : "bg-transparent font-medium"}`}
      {...props}
    >
      {showLeft && <ChevronDown className="size-2.5 text-[#A1A1AA]" strokeWidth={1.5} />}
      {children}
      {showRight && <ChevronDown className="size-2.5 text-[#A1A1AA]" strokeWidth={1.5} />}
    </button>
  );
}
