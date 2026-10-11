type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string; helper?: string; error?: boolean;
  leading?: React.ReactNode; trailing?: React.ReactNode;
};

export function TextField({ label, helper, error, leading, trailing, disabled, id, ...props }: Props) {
  const uid = id ?? React.useId();
  return (
    <div className="flex w-[360px] max-w-full flex-col gap-2">
      {label && <label htmlFor={uid} className={`text-[13px] font-medium ${disabled ? "text-[#6C6A64]" : "text-white"}`}>{label}</label>}
      <div className={`flex h-10 items-center gap-2 rounded-md border px-3 text-sm
        ${disabled ? "border-[#27272A] bg-[#202022]" : "bg-[#27272A]"}
        ${error ? "border-[#F85149]" : "border-[#333137] focus-within:border-[#9C86FF]"}`}>
        {leading && <span className="size-4 shrink-0 text-[#A1A1AA]">{leading}</span>}
        <input id={uid} disabled={disabled} aria-invalid={error} {...props}
          className="min-w-0 flex-1 bg-transparent text-white caret-[#9C86FF] outline-none placeholder:text-[#A1A1AA] disabled:text-[#6C6A64] disabled:placeholder:text-[#6C6A64]" />
        {trailing && <span className="size-4 shrink-0 text-[#A1A1AA]">{trailing}</span>}
      </div>
      {helper && <p className={`m-0 text-xs ${error ? "text-[#F85149]" : disabled ? "text-[#6C6A64]" : "text-[#A1A1AA]"}`}>{helper}</p>}
    </div>
  );
}
