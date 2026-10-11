type Props = {
  variant?: "default" | "footer";
  title?: string; description?: React.ReactNode;
  value: string; onChange: (v: string) => void;
  placeholder?: string; action?: React.ReactNode; footer?: React.ReactNode;
};

export function TextareaInstructions({ variant = "default", title = "Instructions for Claude", description, value, onChange,
  placeholder = "e.g. ask clarifying questions before giving detailed answers", action, footer }: Props) {
  const area = (bg: string) => (
    <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
      className={`block h-[93px] w-full resize-none rounded-lg ${bg} p-3 text-sm text-white outline-none placeholder:text-[#6C6A64]`} />
  );
  if (variant === "footer") {
    return (
      <div className="w-full max-w-[771px] overflow-hidden rounded-lg bg-[#27272A]">
        {area("bg-black")}
        <div className="flex h-10 items-center justify-between px-4 py-2 text-xs text-[#A1A1AA]">{footer}</div>
      </div>
    );
  }
  return (
    <div className="flex w-full max-w-[771px] flex-col gap-4">
      <div className="flex items-start gap-6">
        <div className="flex flex-1 flex-col gap-4">
          <h3 className="m-0 text-sm font-medium text-white">{title}</h3>
          <p className="m-0 text-[13px] leading-[17px] text-[#A1A1AA]">{description}</p>
        </div>
        {action}
      </div>
      {area("bg-[#27272A]")}
      <div className="h-px bg-[#27272A]" />
    </div>
  );
}
