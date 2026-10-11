import { Check, ChevronRight } from "lucide-react"; // swap for your icon set

type Props = { status: "done" | "caret" | "number"; number?: number };

export function StepIndicator({ status, number }: Props) {
  if (status === "done")
    return (
      <span className="grid size-3 place-items-center rounded-full bg-[#A1A1AA] text-[#181715]">
        <Check className="size-2" strokeWidth={3} />
      </span>
    );
  if (status === "caret") return <ChevronRight className="size-3 text-[#A1A1AA]" strokeWidth={1.5} />;
  return <span className="grid size-3 place-items-center text-[11px] leading-4 text-[#A1A1AA]">{number}</span>;
}
