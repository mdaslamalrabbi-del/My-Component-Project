type Props = {
  type?: "cloud" | "local";
  value: string;
  onChange: (v: string) => void;
  label?: string;
  placeholder?: string;
  // cloud: voice, model picker, repository, environment. local: permission mode, default, folder, worktree.
  worktree?: boolean;
  onWorktreeChange?: (v: boolean) => void;
};

const Btn = ({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) => (
  <button type="button" className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-white">{icon}{children}<span aria-hidden>⌄</span></button>
);

export function InstructionsField({ type = "cloud", value, onChange, label = "Instructions",
  placeholder = "Describe what Puku should do in each session", worktree, onWorktreeChange }: Props) {
  return (
    <div className="flex w-[720px] max-w-full flex-col gap-2">
      <label className="text-[13px] font-medium text-white">{label}</label>
      <div className="overflow-hidden rounded-lg bg-[#181715]">
        <div className="flex min-h-[96px] flex-col justify-between gap-4 p-3.5">
          <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={2}
            className="w-full resize-none bg-transparent text-sm text-white outline-none placeholder:text-[#4A4850]" />
          <div className={`flex items-center ${type === "cloud" ? "justify-end gap-4" : "justify-between"}`}>
            {type === "cloud" ? (<><Btn>Voice</Btn><Btn>Opus 4.8</Btn></>) : (<><Btn>Manual</Btn><Btn>Default</Btn></>)}
          </div>
        </div>
        <div className="flex h-9 items-center justify-between bg-[#202022] px-3.5 text-[13px] text-[#A1A1AA]">
          {type === "cloud" ? (<><span>Select a repository</span><span className="text-[#D2CFD9]">puku-cli</span></>) : (
            <>
              <span>Select folder</span>
              <label className="inline-flex items-center gap-1.5">
                <input type="checkbox" checked={worktree} onChange={(e) => onWorktreeChange?.(e.target.checked)} /> Worktree
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
