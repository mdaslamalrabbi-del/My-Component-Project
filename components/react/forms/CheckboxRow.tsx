type Props = {
  type?: "checkbox" | "icon";
  checked?: boolean;
  onCheckedChange?: (v: boolean) => void;
  icon?: React.ReactNode;           // icon type only
  children: React.ReactNode;        // put <a> links inside the text
};

export function CheckboxRow({ type = "checkbox", checked, onCheckedChange, icon, children }: Props) {
  return (
    <div className="flex items-start gap-3 text-[13px] leading-5 text-[#A1A1AA] [&_a]:text-[#BEB0FF] [&_a]:underline">
      {type === "checkbox" ? (
        <label className="mt-0.5 grid size-4 shrink-0 cursor-pointer place-items-center">
          <input type="checkbox" className="peer sr-only" checked={checked}
            onChange={(e) => onCheckedChange?.(e.target.checked)} />
          <span className="size-4 rounded-[3px] border border-[#6C6A64] peer-checked:border-[#9C86FF] peer-checked:bg-[#9C86FF]
            peer-focus-visible:ring-2 peer-focus-visible:ring-[#9C86FF]" />
        </label>
      ) : (
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#27272A] text-[#D2CFD9] [&>svg]:size-4">{icon}</span>
      )}
      <p className="m-0">{children}</p>
    </div>
  );
}

// <CheckboxRow>I agree to Puku's <a href="/terms">Consumer Terms</a> and <a href="/aup">Acceptable Use Policy</a> and confirm that I am at least 18 years of age.</CheckboxRow>
