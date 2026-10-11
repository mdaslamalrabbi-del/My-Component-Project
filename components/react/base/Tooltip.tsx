type Props = { children: React.ReactNode; width?: number };

export function Tooltip({ children, width = 189 }: Props) {
  return (
    <div
      role="tooltip"
      style={{ width }}
      className="rounded-md border border-[#272729] bg-[#181715] p-2 text-[11px] font-medium leading-4 text-[#D2CFD9]"
    >
      {children}
    </div>
  );
}
