type Props = { title: string; folder?: string; actions?: React.ReactNode; onTitleClick?: () => void };

export function HeaderBar({ title, folder, actions, onTitleClick }: Props) {
  return (
    <header className="flex h-[50px] w-full items-center gap-2 bg-[#121113] pl-5 pr-4">
      <span className="w-2.5" aria-hidden />
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center gap-2">
          <button type="button" onClick={onTitleClick} className="flex items-center gap-2 text-sm text-white">
            <LaptopIcon className="size-4 text-[#A1A1AA]" />{title}<ChevronDown className="size-3 text-[#A1A1AA]" />
          </button>
          {folder && <span className="rounded bg-[#27272A] px-1.5 py-1 text-[11px] leading-[9px] text-[#A1A1AA]">{folder}</span>}
        </div>
        <div className="flex items-center gap-4 text-[#A1A1AA]">{actions}</div>
      </div>
    </header>
  );
}
// <HeaderBar title="Thesis research report" folder="Test Folder" actions={<><IconButton label="Terminal" /> ...</>} />
