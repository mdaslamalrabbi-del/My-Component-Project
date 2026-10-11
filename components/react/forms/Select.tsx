type Option = { value: string; label: string; icon?: React.ReactNode };
type Props = {
  options: Option[]; value?: string; onChange: (v: string) => void;
  placeholder?: string; size?: "lg" | "sm"; leading?: React.ReactNode; trailing?: React.ReactNode; searchable?: boolean;
};

export function Select({ options, value, onChange, placeholder = "Select your role", size = "lg", leading, trailing, searchable }: Props) {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState("");
  const root = React.useRef<HTMLDivElement>(null);
  const current = options.find((o) => o.value === value);
  const shown = options.filter((o) => o.label.toLowerCase().includes(q.toLowerCase()));

  React.useEffect(() => {
    const close = (e: MouseEvent) => !root.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={root} className="relative w-[348px] max-w-full" onKeyDown={(e) => e.key === "Escape" && setOpen(false)}>
      <button type="button" role="combobox" aria-expanded={open} aria-haspopup="listbox" onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between gap-2 rounded-lg border px-3 text-sm outline-none
          ${size === "lg" ? "h-10" : "h-8 px-2"} ${open ? "border-[#9C86FF] bg-[#121113]" : "border-[#27272A] bg-[#181715] hover:bg-[#202022]"}
          ${current ? "text-white" : "text-[#A1A1AA]"} focus-visible:border-[#9C86FF]`}>
        <span className="flex min-w-0 items-center gap-2.5">{leading}<span className="truncate">{current?.label ?? placeholder}</span></span>
        <span className="flex items-center gap-2">{trailing}
          <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
        </span>
      </button>
      {open && (
        <div className="absolute z-10 mt-1 w-full rounded-lg border border-[#333137] bg-[#202022] p-1.5 shadow-[0_8px_24px_rgba(0,0,0,.4)]">
          {searchable && (
            <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search"
              className="mb-1.5 h-8 w-full rounded-lg bg-[#27272A] px-2 text-sm text-white outline-none placeholder:text-[#6C6A64]" />
          )}
          <ul role="listbox" className="m-0 max-h-72 list-none overflow-auto p-0">
            {shown.map((o) => (
              <li key={o.value} role="option" aria-selected={o.value === value}
                onClick={() => { onChange(o.value); setOpen(false); setQ(""); }}
                className={`flex h-[27px] cursor-pointer items-center justify-between rounded px-3 text-sm text-[#D2CFD9]
                  hover:bg-[#27272A] hover:text-white ${o.value === value ? "bg-[#27272A] text-white" : ""}`}>
                {o.label}{o.value === value && <span aria-hidden>✓</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
