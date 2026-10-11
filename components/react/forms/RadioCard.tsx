type Props = {
  checked: boolean; onChange: () => void; name?: string; value?: string;
  title: string; price: string; note?: string; badge?: string;
};

export function RadioCard({ checked, onChange, name, value, title, price, note, badge }: Props) {
  return (
    <label className={`flex w-[257px] cursor-pointer flex-col gap-4 rounded-xl border p-4 transition-colors
      ${checked ? "border-[#9C86FF] bg-black" : "border-[#333137] bg-[#181715]"} has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#9C86FF]`}>
      <input type="radio" className="sr-only" name={name} value={value} checked={checked} onChange={onChange} />
      <div className="flex items-center justify-between">
        <span className={`grid size-[22px] place-items-center rounded-full border ${checked ? "border-[#0075FF] bg-white" : "border-[#D2CFD9]"}`}>
          {checked && <i className="size-[13px] rounded-full bg-[#0075FF]" />}
        </span>
        {badge && <span className="inline-flex h-[22px] items-center rounded-md bg-[#1B4721] px-2 text-xs font-medium text-[#3FB950]">{badge}</span>}
      </div>
      <div className="flex flex-col gap-5">
        <span className="text-xs font-medium text-white">{title}</span>
        <div className="flex flex-col gap-3">
          <span className="text-sm text-white">{price}</span>
          {note && <span className="text-[11px] text-[#6C6A64]">{note}</span>}
        </div>
      </div>
    </label>
  );
}
// <RadioCard checked={plan === "annual"} onChange={() => setPlan("annual")} title="Pro annual" price="USD 200.00" note="Billed yearly" badge="Save 17%" />
