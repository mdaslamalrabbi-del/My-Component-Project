type Props = { checked: boolean; onChange: (v: boolean) => void; label?: string; value?: string; name?: string };

export function Radio({ checked, onChange, label, value, name }: Props) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-white">
      <input type="radio" className="peer sr-only" name={name} value={value} checked={checked}
        onChange={(e) => onChange(e.target.checked)} />
      <span className="grid size-[22px] place-items-center rounded-full border border-[#D2CFD9]
        peer-checked:border-[#0075FF] peer-checked:bg-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#9C86FF]
        peer-checked:[&>i]:block">
        <i className="hidden size-[13px] rounded-full bg-[#0075FF]" />
      </span>
      {label}
    </label>
  );
}
