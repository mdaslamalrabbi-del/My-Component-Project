import { ChevronDown } from "lucide-react"; // swap for your icon set

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { label?: string };

export function ButtonDropdown({ label = "New task", ...props }: Props) {
  return (
    <button
      className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[#F7F5FA] pl-3 pr-2.5 text-sm text-[#121113]"
      {...props}
    >
      {label}
      <ChevronDown className="size-3" strokeWidth={1.5} />
    </button>
  );
}
