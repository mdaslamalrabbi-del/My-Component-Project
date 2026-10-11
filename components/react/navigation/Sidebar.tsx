type Mode = "default" | "responsive" | "code";
type Props = { mode?: Mode; tab: "home" | "code"; onTab: (t: "home" | "code") => void; user: { name: string; avatar: string }; children?: React.ReactNode };

export function Sidebar({ mode = "default", tab, onTab, user, children }: Props) {
  const rail = mode === "responsive";
  return (
    <aside className={`flex h-screen flex-col border border-[#27272A] bg-[#181715] text-sm text-[#A1A1AA] ${rail ? "w-14 items-center" : "w-[264px]"}`}>
      {!rail && (
        <div className="flex items-center justify-between px-4 pt-3">
          <WindowDots /><div className="flex gap-4"><SidebarIcon className="size-4" /><SearchIcon className="size-4" /></div>
        </div>
      )}
      <div className={rail ? "mt-3 flex flex-col gap-2" : "p-3"}>
        <ModeSwitch value={tab} onChange={onTab} compact={rail} />
      </div>
      <nav className="flex-1 overflow-y-auto px-3">{children /* NavItem rows and SidebarSettings sections */}</nav>
      <footer className="border-t border-[#27272A] p-3">
        <button className="flex w-full items-center gap-2">
          <img src={user.avatar} alt="" className="size-5 rounded-sm" />
          {!rail && <><span className="flex-1 text-left text-[#D2CFD9]">{user.name}</span><ChevronDown className="size-4" /></>}
        </button>
      </footer>
    </aside>
  );
}
