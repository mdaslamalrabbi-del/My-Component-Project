export function SelectOption({ children, selected, onSelect }: { children: React.ReactNode; selected?: boolean; onSelect?: () => void }) {
  return (
    <div role="option" aria-selected={selected} tabIndex={-1} onClick={onSelect}
      className={`flex h-[26px] cursor-pointer items-center rounded px-3 text-sm
        ${selected ? "bg-[#27272A] text-white" : "text-[#D2CFD9] hover:bg-[#27272A]"}`}>
      {children}
    </div>
  );
}
