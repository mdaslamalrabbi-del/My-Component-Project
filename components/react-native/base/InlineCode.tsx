import { View, Text } from "react-native";

export function InlineCode({ children, tone = "accent" }) {
  return (
    <View style={{ height: 16, paddingHorizontal: 4, borderRadius: 4, backgroundColor: "#272729",
      borderWidth: 1, borderColor: "#272729", justifyContent: "center", alignSelf: "flex-start" }}>
      <Text style={{ fontSize: 12, lineHeight: 16, color: tone === "accent" ? "#FF9492" : "#D2CFD9" }}>{children}</Text>
    </View>
  );
}
