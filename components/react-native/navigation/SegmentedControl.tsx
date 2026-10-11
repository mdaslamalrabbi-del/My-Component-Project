import { Pressable, Text, View } from "react-native";

export function SegmentedControl({ items, value, onChange, iconOnly }:
  { items: { value: string; label: string; icon?: React.ReactNode }[]; value: string; onChange: (v: string) => void; iconOnly?: boolean }) {
  return (
    <View accessibilityRole="tablist" style={{ flexDirection: "row", gap: 6, padding: 8, borderRadius: 12, backgroundColor: "#1F1E1B" }}>
      {items.map((it) => {
        const on = it.value === value;
        return (
          <Pressable key={it.value} accessibilityRole="tab" accessibilityState={{ selected: on }} accessibilityLabel={it.label} onPress={() => onChange(it.value)}
            style={{ height: 32, width: iconOnly ? 32 : undefined, paddingHorizontal: iconOnly ? 0 : 16, borderRadius: 8, borderWidth: 1,
              borderColor: on ? "#333137" : "transparent", backgroundColor: on ? "#27272A" : "transparent",
              flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6 }}>
            {it.icon}
            {!iconOnly && <Text style={{ fontSize: 14, fontWeight: "500", color: on ? "#fff" : "#A09D96" }}>{it.label}</Text>}
          </Pressable>
        );
      })}
    </View>
  );
}
