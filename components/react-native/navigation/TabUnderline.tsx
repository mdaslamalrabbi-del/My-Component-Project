import { Pressable, Text } from "react-native";

export function TabUnderline({ label, count, active, onPress }: { label: string; count?: number; active?: boolean; onPress?: () => void }) {
  return (
    <Pressable accessibilityRole="tab" accessibilityState={{ selected: !!active }} onPress={onPress}
      style={{ paddingHorizontal: 12, paddingVertical: 8, borderBottomWidth: 2, borderBottomColor: active ? "#A1A1AA" : "transparent" }}>
      <Text style={{ fontSize: 14, color: active ? "#D2CFD9" : "#52525B" }}>{label}{count != null ? `  · ${count}` : ""}</Text>
    </Pressable>
  );
}
