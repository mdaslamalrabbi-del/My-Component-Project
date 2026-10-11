type Props = {
  type?: "task" | "breadcrumb" | "breadcrumbActions";
  title?: string; parent?: string; current?: string;
  onToggleSidebar?: () => void; actions?: React.ReactNode;
};

export function HeaderBarProject({ type = "task", title = "New task", parent = "Projects", current, onToggleSidebar, actions }: Props) {
  return (
    <header className="flex h-14 w-full items-center justify-between border-b border-[#27272A] px-6">
      {type === "task" ? (
        <button type="button" className="flex items-center gap-1.5 text-base font-medium text-white">{title}<ChevronDown className="size-[15px] text-[#A1A1AA]" /></button>
      ) : (
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-[#A1A1AA]">
          {parent}<span aria-hidden>/</span><span className="text-base font-medium text-white">{current}</span>
        </nav>
      )}
      {type === "breadcrumbActions" ? (
        <div className="flex items-center gap-3 text-[#A1A1AA]">{actions}</div>
      ) : (
        <button type="button" aria-label="Toggle sidebar" onClick={onToggleSidebar} className="text-[#A1A1AA] hover:text-white"><SidebarIcon className="size-5" /></button>
      )}
    </header>
  );
}
