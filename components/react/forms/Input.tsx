type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string; helper?: string; size?: "lg" | "sm"; icon?: React.ReactNode;
};

export function Input({ label, helper, size = "lg", icon, id, disabled, className = "", ...props }: Props) {
  const uid = id ?? React.useId();
  return (
    <div className="flex w-[280px] flex-col gap-2">
      {label && <label htmlFor={uid} className="text-[13px] font-medium leading-[18px] text-white">{label}</label>}
      <div className={`flex items-center gap-2 rounded-lg border border-[#27272A] bg-[#202022] px-3
        focus-within:border-[#9C86FF] ${size === "lg" ? "h-10 text-sm" : "h-8 rounded-md text-[13px]"} ${disabled ? "opacity-60" : ""}`}>
        {icon && <span className="size-4 shrink-0 text-[#A1A1AA]">{icon}</span>}
        <input id={uid} disabled={disabled} {...props}
          className={`min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-[#6C6A64] ${className}`} />
      </div>
      {helper && <p className="text-[13px] leading-[18px] text-[#A1A1AA]">{helper}</p>}
    </div>
  );
}
