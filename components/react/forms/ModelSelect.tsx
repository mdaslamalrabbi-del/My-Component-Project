type Props = { model: string; effort?: string; selected?: boolean; onClick?: () => void };

export function ModelSelect({ model, effort, selected, onClick }: Props) {
  return (
    <button type="button" onClick={onClick} aria-pressed={selected}
      className="inline-flex h-5 items-center gap-1.5 rounded p-1 text-xs text-white hover:bg-[#27272A]">
      {model}
      {effort && <span className="text-[#A1A1AA]">{effort}</span>}
    </button>
  );
}
// <ModelSelect model="Sonnet 5" effort="High" />
