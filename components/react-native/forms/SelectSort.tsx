import { Pressable, Text } from "react-native";

export function SelectSort({ label = "Sort by", value = "Next run", onPress }) {
  return (
    <Pressable onPress={onPress} accessibilityRole="button"
      style={{ height: 32, flexDirection: "row", alignItems: "center", gap: 6, paddingLeft: 12, paddingRight: 10,
        borderRadius: 8, backgroundColor: "#27272A", alignSelf: "flex-start" }}>
      <Text style={{ color: "#A1A1AA", fontSize: 14 }}>{label}</Text>
      <Text style={{ color: "#fff", fontSize: 14 }}>{value}</Text>
      <Text style={{ color: "#A1A1AA", fontSize: 12 }}>⌄</Text>
    </Pressable>
  );
}
