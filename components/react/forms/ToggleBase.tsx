type Props = { checked: boolean; onChange: (v: boolean) => void; disabled?: boolean; label?: string; size?: "sm" | "md" | "lg" };
const SIZES = { sm: [24, 16, 12], md: [32, 20, 16], lg: [40, 24, 20] } as const;

export function ToggleBase({ checked, onChange, disabled, label, size = "md" }: Props) {
  const [w, h, k] = SIZES[size];
  const pad = (h - k) / 2;
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={label} disabled={disabled}
      onClick={() => onChange(!checked)}
      style={{ width: w, height: h, borderRadius: h / 2, background: checked ? "#2D68FE" : "#E6E8EA", opacity: disabled ? 0.7 : 1 }}
      className="relative shrink-0 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9C86FF]">
      <span style={{ position: "absolute", top: pad, left: pad, width: k, height: k, borderRadius: "50%", background: "#FFFFFF",
        transform: `translateX(${checked ? w - k - pad * 2 : 0}px)`, transition: "transform .15s" }} />
    </button>
  );
}
