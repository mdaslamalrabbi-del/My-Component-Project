type Props = { items: string[]; value: string; onChange: (v: string) => void; large?: boolean };

export function ModeSwitch({ items, value, onChange, large }: Props) {
  return (
    <div role="tablist" className={`inline-flex gap-0.5 rounded-md bg-[#121113] ${large ? "gap-1 p-1" : "p-0.5"}`}>
      {items.map((i) => <ModeSwitchItem key={i} label={i} large={large} active={i === value} onClick={() => onChange(i)} />)}
    </div>
  );
}
// <ModeSwitch items={["Chat", "Cowork"]} value={mode} onChange={setMode} />   // 2, 3 or 4 items; add large for the 34px bar
