export function NavItemSettings({ label = "General", icon, active, onClick }: { label?: string; icon?: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <div className="w-[278px] max-w-full">
      <NavItem label={label} icon={icon} state={active ? "active2" : "default"} onClick={onClick} />
    </div>
  );
}
// NavItem is shown in the Nav Item section. Active width in Figma is 167px; the wrapper is 278px.
