type Props = {
  label: string; icon?: React.ReactNode; trailing?: React.ReactNode;
  state?: "default" | "active" | "active2" | "light" | "indented"; onClick?: () => void;
};

const styles = {
  default: "text-[#A1A1AA] hover:bg-[#181715]",
  active: "bg-[#181715] text-[#D2CFD9]",
  active2: "bg-[#27272A] text-white",
  light: "bg-white text-[#333137]",
  indented: "pl-[34px] text-[#A1A1AA] hover:bg-[#181715]",
} as const;

export function NavItem({ label, icon, trailing, state = "default", onClick }: Props) {
  return (
    <button type="button" onClick={onClick} aria-current={state.startsWith("active") || state === "light" ? "page" : undefined}
      className={`flex h-8 w-full items-center gap-2.5 rounded-md p-2 text-left text-sm ${styles[state]}`}>
      {state !== "indented" && icon && <span className="size-4 shrink-0">{icon}</span>}
      <span className="flex-1 truncate">{label}</span>
      {trailing}
    </button>
  );
}
