import { Pressable, Text, View } from "react-native";

export function TabBar({ tabs, value, onChange }: { tabs: { id: string; label: string; count?: number }[]; value: string; onChange: (id: string) => void }) {
  return (
    <View accessibilityRole="tablist" style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#333137" }}>
      {tabs.map((t) => {
        const on = t.id === value;
        return (
          <Pressable key={t.id} accessibilityRole="tab" accessibilityState={{ selected: on }} onPress={() => onChange(t.id)}
            style={{ paddingHorizontal: 12, paddingVertical: 8, borderBottomWidth: 2, marginBottom: -1, borderBottomColor: on ? "#fff" : "transparent" }}>
            <Text style={{ fontSize: 14, fontWeight: "500", color: on ? "#fff" : "#71717A" }}>{t.label}{t.count != null ? `  · ${t.count}` : ""}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
