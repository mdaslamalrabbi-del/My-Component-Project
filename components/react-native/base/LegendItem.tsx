import { View, Text } from "react-native";

export const LegendItem = ({ color = "#9C86FF", label, value }) => (
  <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: color }} />
    <View style={{ flexDirection: "row", gap: 10 }}>
      <Text style={{ fontSize: 14, lineHeight: 20, color: "#D2CFD9" }}>{label}</Text>
      {value ? <Text style={{ fontSize: 14, lineHeight: 20, color: "#A1A1AA" }}>{value}</Text> : null}
    </View>
  </View>
);
