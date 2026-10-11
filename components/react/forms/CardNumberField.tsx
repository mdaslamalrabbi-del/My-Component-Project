type Props = { label?: string; value: string; onChange: (v: string) => void; placeholder?: string; flag?: React.ReactNode; brands?: boolean };

const format = (v: string) => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

export function CardNumberField({ label = "Card number", value, onChange, placeholder = "1234 1234 1234 1234", flag, brands }: Props) {
  return (
    <div className="flex w-[348px] max-w-full flex-col gap-2">
      {label && <label className="text-[13px] font-medium text-white">{label}</label>}
      <div className="flex h-10 items-center gap-2 rounded-lg border border-[#27272A] bg-[#202022] px-3 focus-within:border-[#9C86FF]">
        <input inputMode="numeric" autoComplete="cc-number" value={value} placeholder={placeholder}
          onChange={(e) => onChange(format(e.target.value))}
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#6C6A64]" />
        {flag}
        {brands && (
          <span className="flex items-center gap-1">
            <b className="text-sm font-black italic text-white">VISA</b>
            <span className="relative h-4 w-6"><i className="absolute left-0 size-4 rounded-full bg-[#EB001B]" /><i className="absolute right-0 size-4 rounded-full bg-[#F79E1B]/90" /></span>
          </span>
        )}
      </div>
    </div>
  );
}
// Country select: <Select options={countries} leading={<Flag code="BD" />} /> then <CardNumberField flag={<Flag code="BD" />} />
