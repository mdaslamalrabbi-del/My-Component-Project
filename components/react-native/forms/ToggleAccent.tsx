import { Pressable, View } from "react-native";

type Props = { checked: boolean; onChange: (v: boolean) => void; disabled?: boolean; label?: string };

export function ToggleAccent({ checked, onChange, disabled, label }: Props) {
  const [w, h, k] = [36,20,16];
  const pad = (h - k) / 2;
  return (
    <Pressable accessibilityRole="switch" accessibilityState={{ checked, disabled }} accessibilityLabel={label}
      disabled={disabled} onPress={() => onChange(!checked)}
      style={{ width: w, height: h, borderRadius: h / 2, padding: pad, justifyContent: "center",
        backgroundColor: checked ? "#9C86FF" : "#D2CFD9", opacity: disabled ? 0.7 : 1 }}>
      <View style={{ width: k, height: k, borderRadius: k / 2, backgroundColor: "#FFFFFF", alignSelf: checked ? "flex-end" : "flex-start" }} />
    </Pressable>
  );
}
