import { View, Text } from "react-native";

export function InstructionsSetting({ title = "Instructions for Claude", children, action }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 24 }}>
      <View style={{ flex: 1, gap: 12 }}>
        <Text style={{ color: "#fff", fontSize: 14, fontWeight: "600", lineHeight: 18 }}>{title}</Text>
        <Text style={{ color: "#A1A1AA", fontSize: 14, lineHeight: 17 }}>{children}</Text>
      </View>
      <View style={{ width: 278 }}>{action}</View>
    </View>
  );
}
