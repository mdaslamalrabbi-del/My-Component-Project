export function CheckboxField({ label, checked, onCheckedChange }: { label: string; checked?: boolean; onCheckedChange?: (v: boolean) => void }) {
  return (
    <label className="flex w-[360px] max-w-full cursor-pointer items-start gap-3">
      <Checkbox checked={checked} onCheckedChange={onCheckedChange} />
      <span className="pt-[5px] text-sm leading-[10px] text-white">{label}</span>
    </label>
  );
}
// <CheckboxField label="Save payment details for future purchases" checked={saved} onCheckedChange={setSaved} />
