import { Pressable, Text, View } from "react-native";

export function TabPill({ label, active, onPress }: { label: string; active?: boolean; onPress?: () => void }) {
  return (
    <Pressable accessibilityRole="tab" accessibilityState={{ selected: !!active }} onPress={onPress}
      style={{ borderRadius: 8, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: active ? "#141311" : "transparent" }}>
      <Text style={{ fontSize: 14, color: "#fff" }}>{label}</Text>
    </Pressable>
  );
}

export const TabPillGroup = ({ items, value, onChange }: { items: string[]; value: string; onChange: (v: string) => void }) => (
  <View accessibilityRole="tablist" style={{ flexDirection: "row", gap: 16, padding: 8, borderRadius: 12, backgroundColor: "#1C1B19", alignSelf: "flex-start" }}>
    {items.map((i) => <TabPill key={i} label={i} active={i === value} onPress={() => onChange(i)} />)}
  </View>
);
