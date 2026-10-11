type Props = {
  value: string; onChange: (v: string) => void; onSend: () => void;
  processing?: string; // e.g. "Sifting through memory"
  placeholder?: string;
};

export function TextareaChat({ value, onChange, onSend, processing, placeholder = "Write a message…" }: Props) {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  const hasText = value.trim().length > 0;
  return (
    <div className="flex w-full max-w-[794px] flex-col gap-4">
      {processing && <p className="m-0 text-[13px] text-[#A1A1AA]" role="status">{processing}</p>}
      <div className="flex items-center gap-6 rounded-2xl border border-[#27272A] bg-[#181715] p-4 focus-within:border-[#333137]">
        <textarea ref={ref} rows={1} value={value} placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); hasText && onSend(); } }}
          className="min-h-[18px] flex-1 resize-none bg-transparent text-sm text-white outline-none placeholder:text-[#A1A1AA]" />
        <button type="button" aria-label="Send" disabled={!hasText} onClick={onSend}
          className={`grid size-8 shrink-0 place-items-center rounded-lg transition-colors
            ${hasText ? "bg-[#9C86FF] text-white" : "bg-[#27272A] text-[#6C6A64]"}`}>
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
