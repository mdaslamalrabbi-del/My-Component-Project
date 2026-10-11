import { Info } from "lucide-react"; // swap for your icon set

export function AlertInfo({ children }: { children: React.ReactNode }) {
  return (
    <div role="note" className="flex w-full items-center gap-4 rounded-xl bg-[#272729] p-3 text-sm leading-5 text-white">
      <Info className="size-[26px] shrink-0 text-[#D2CFD9]" strokeWidth={1.25} />
      <p className="flex-1">{children}</p>
    </div>
  );
}
