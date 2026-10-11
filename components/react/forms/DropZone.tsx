type Props = {
  variant?: "file" | "empty";
  children?: React.ReactNode;       // caption
  icon?: React.ReactNode;
  accept?: string;
  onFiles?: (files: File[]) => void;
  onClick?: () => void;             // empty variant: a button that opens something
};

export function DropZone({ variant = "file", children, icon, accept, onFiles, onClick }: Props) {
  const ref = React.useRef<HTMLInputElement>(null);
  const [over, setOver] = React.useState(false);
  const base = `flex h-[140px] w-[262px] flex-col items-center justify-center gap-4 rounded-xl border bg-[#181715] px-6 text-center
    text-[13px] leading-[18px] text-[#A1A1AA] ${over ? "border-[#9C86FF]" : "border-[#27272A]"}`;
  const tile = <span className="grid size-10 place-items-center rounded-md bg-[#121113] text-[#4A4850]">{icon}</span>;

  if (variant === "empty") {
    return <button type="button" onClick={onClick} className={base}>{tile}{children}</button>;
  }
  return (
    <div role="button" tabIndex={0} className={base}
      onClick={() => ref.current?.click()}
      onKeyDown={(e) => e.key === "Enter" && ref.current?.click()}
      onDragOver={(e) => { e.preventDefault(); setOver(true); }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => { e.preventDefault(); setOver(false); onFiles?.([...e.dataTransfer.files]); }}>
      {tile}{children}
      <input ref={ref} type="file" multiple accept={accept} hidden onChange={(e) => onFiles?.([...(e.target.files ?? [])])} />
    </div>
  );
}
