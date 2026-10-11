type Item = { value: string; label: string };

export function SelectMenu({ items, value, onChange }: { items: Item[]; value?: string; onChange: (v: string) => void }) {
  return (
    <div role="listbox" className="flex w-[360px] max-w-full flex-col rounded-md border border-[#333137] bg-[#202022] p-1">
      {items.map((it) => (
        <SelectOption key={it.value} selected={it.value === value} onSelect={() => onChange(it.value)}>{it.label}</SelectOption>
      ))}
    </div>
  );
}
// <SelectMenu items={[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"}]} value="us" onChange={setCountry} />
