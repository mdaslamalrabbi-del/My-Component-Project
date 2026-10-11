import { Pressable, View } from "react-native";

type Props = { checked: boolean; onChange: (v: boolean) => void; disabled?: boolean; label?: string; size?: "sm" | "md" | "lg" };
const SIZES = { sm: [24, 16, 12], md: [32, 20, 16], lg: [40, 24, 20] } as const;

export function ToggleBase({ checked, onChange, disabled, label, size = "md" }: Props) {
  const [w, h, k] = SIZES[size];
  const pad = (h - k) / 2;
  return (
    <Pressable accessibilityRole="switch" accessibilityState={{ checked, disabled }} accessibilityLabel={label}
      disabled={disabled} onPress={() => onChange(!checked)}
      style={{ width: w, height: h, borderRadius: h / 2, padding: pad, justifyContent: "center",
        backgroundColor: checked ? "#2D68FE" : "#E6E8EA", opacity: disabled ? 0.7 : 1 }}>
      <View style={{ width: k, height: k, borderRadius: k / 2, backgroundColor: "#FFFFFF", alignSelf: checked ? "flex-end" : "flex-start" }} />
    </Pressable>
  );
}
