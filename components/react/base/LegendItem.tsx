type Props = { color?: string; label: string; value?: string };

export function LegendItem({ color = "#9C86FF", label, value }: Props) {
  return (
    <div className="flex items-center gap-3 text-sm leading-5">
      <span className="size-2.5 shrink-0 rounded-full" style={{ background: color }} />
      <span className="flex gap-2.5">
        <span className="text-[#D2CFD9]">{label}</span>
        {value && <span className="text-[#A1A1AA]">{value}</span>}
      </span>
    </div>
  );
}
