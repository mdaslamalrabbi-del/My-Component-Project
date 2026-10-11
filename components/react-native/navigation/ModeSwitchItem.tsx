import { Pressable, Text } from "react-native";

export function ModeSwitchItem({ label, icon, active, large, onPress }: { label?: string; icon?: React.ReactNode; active?: boolean; large?: boolean; onPress?: () => void }) {
  const h = icon ? 24 : large ? 26 : 22;
  return (
    <Pressable onPress={onPress} accessibilityRole="tab" accessibilityState={{ selected: !!active }}
      style={{ height: h, paddingHorizontal: large ? 16 : 12, borderRadius: 4, alignItems: "center", justifyContent: "center", backgroundColor: active ? "#27272A" : "transparent" }}>
      {icon ?? <Text style={{ fontSize: large ? 14 : 12, fontWeight: active && !large ? "500" : "400", color: active ? "#fff" : "#D2CFD9" }}>{label}</Text>}
    </Pressable>
  );
}
