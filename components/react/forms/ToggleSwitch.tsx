type Props = { checked: boolean; onChange: (v: boolean) => void; disabled?: boolean; label?: string };

export function ToggleSwitch({ checked, onChange, disabled, label }: Props) {
  const [w, h, k] = [24,16,12];
  const pad = (h - k) / 2;
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={label} disabled={disabled}
      onClick={() => onChange(!checked)}
      style={{ width: w, height: h, borderRadius: h / 2, background: checked ? "#2D68FE" : "#E6E8EA", opacity: disabled ? 0.7 : 1 }}
      className="relative shrink-0 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9C86FF]">
      <span style={{ position: "absolute", top: pad, left: pad, width: k, height: k, borderRadius: "50%", background: "#FFFFFF",
        transform: `translateX(${checked ? w - k - pad * 2 : 0}px)`, transition: "transform .15s" }} />
      {!checked && <i aria-hidden style={{{{ position: "absolute", top: 5, right: 5, width: 6, height: 6, borderRadius: "50%", border: "0.64px solid #B3B3B3" }}}} />}
    </button>
  );
}
