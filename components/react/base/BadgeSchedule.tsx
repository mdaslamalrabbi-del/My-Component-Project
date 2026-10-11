import { Clock } from "lucide-react"; // swap for your icon set

export function BadgeSchedule({ label }: { label: string }) {
  return (
    <span className="inline-flex h-[18px] items-center gap-1 rounded bg-[#1B4721] pl-1 pr-1.5 text-xs text-[#3FB950]">
      <Clock className="size-2" strokeWidth={1.5} />
      {label}
    </span>
  );
}
