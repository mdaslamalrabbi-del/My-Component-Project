type Props =
  | { type: "plan"; title?: string; onClose: () => void }
  | { type: "browser"; tabs: React.ReactNode; url: string; onUrl: (v: string) => void; onBack: () => void; onForward: () => void; onClose: () => void };

export function PaneHeader(p: Props) {
  if (p.type === "plan") {
    return (
      <div className="flex h-10 items-center justify-between border border-[#27272A] bg-[#27272A] px-4 py-2">
        <span className="text-sm font-semibold text-white">{p.title ?? "Plan"}</span>
        <button type="button" aria-label="Close" onClick={p.onClose} className="grid size-6 place-items-center rounded-lg text-[#A1A1AA] hover:text-white"><XIcon className="size-4" /></button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2 bg-[#27272A] px-4 py-2">
      <div className="flex items-center justify-between pl-[66px]">
        <div className="flex items-center gap-2">{p.tabs}</div>
        <button type="button" aria-label="Close" onClick={p.onClose} className="grid size-6 place-items-center rounded-lg text-[#A1A1AA]"><XIcon className="size-4" /></button>
      </div>
      <div className="flex h-8 items-center gap-6">
        <div className="flex gap-3 text-[#A1A1AA]">
          <button type="button" aria-label="Back" onClick={p.onBack}><ArrowLeft className="size-4" /></button>
          <button type="button" aria-label="Forward" onClick={p.onForward}><ArrowRight className="size-4" /></button>
        </div>
        <label className="flex h-8 flex-1 items-center gap-2 rounded-md bg-[#1D1D1F] px-3 text-sm text-[#A1A1AA]">
          <SearchIcon className="size-3.5" />
          <input value={p.url} onChange={(e) => p.onUrl(e.target.value)} placeholder="Type a URL" className="flex-1 bg-transparent text-white outline-none placeholder:text-[#A1A1AA]" />
        </label>
      </div>
    </div>
  );
}
