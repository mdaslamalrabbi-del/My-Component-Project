type Props = {
  title: string; backLabel?: string; onBack?: () => void; backPosition?: "top" | "bottom";
  tabs: string[]; tab: string; onTab: (t: string) => void;
  filters: string[]; filter: string; onFilter: (f: string) => void;
  query: string; onQuery: (q: string) => void; onAdd?: () => void;
};

export function TopNav(p: Props) {
  const back = <button onClick={p.onBack} className="inline-flex h-8 w-fit items-center gap-2 rounded-lg bg-[#27272A] px-3 text-xs text-white"><ArrowLeft className="size-4" />{p.backLabel ?? "Go Back"}</button>;
  return (
    <header className="flex flex-col gap-3">
      {p.backPosition !== "bottom" && back}
      <h1 className="text-xl font-semibold text-white">{p.title}</h1>
      <div className="flex items-center gap-3">
        <SegmentedTrack items={p.tabs} value={p.tab} onChange={p.onTab} />
        <span className="h-8 w-px bg-[#27272A]" />
        <SegmentedTrack items={p.filters} value={p.filter} onChange={p.onFilter} />
        <label className="flex h-8 flex-1 items-center gap-2 rounded-lg bg-[#121113] px-3 text-sm text-[#A1A1AA]">
          <SearchIcon className="size-4" /><input value={p.query} onChange={(e) => p.onQuery(e.target.value)} placeholder="Search skills and plugins" className="flex-1 bg-transparent outline-none" />
        </label>
        <IconButton label="Filter"><SlidersIcon /></IconButton><IconButton label="Sort"><SortIcon /></IconButton>
        <button onClick={p.onAdd} className="inline-flex h-8 items-center gap-2 rounded-lg bg-white px-3 text-sm font-medium text-[#121113]">Add <Plus className="size-4" /></button>
      </div>
      {p.backPosition === "bottom" && back}
    </header>
  );
}
