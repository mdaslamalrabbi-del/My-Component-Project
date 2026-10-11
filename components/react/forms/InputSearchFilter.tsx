type Props = {
  value: string;
  onChange: (v: string) => void;
  onFilter?: () => void;
  placeholder?: string;
};

export function InputSearchFilter({ value, onChange, onFilter, placeholder = "Search Projects" }: Props) {
  return (
    <div className="flex w-[330px] items-center gap-3 text-[#4A4850] focus-within:text-[#A1A1AA]">
      <svg viewBox="0 0 24 24" className="size-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} aria-label={placeholder}
        className="min-w-0 flex-1 bg-transparent text-base font-medium text-[#D2CFD9] outline-none placeholder:text-[#4A4850]" />
      <button type="button" onClick={onFilter} aria-label="Filter" className="text-[#6C6A64] hover:text-[#D2CFD9]">
        <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M4 7h10M18 7h2M4 17h2M10 17h10" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="17" r="2" />
        </svg>
      </button>
    </div>
  );
}
