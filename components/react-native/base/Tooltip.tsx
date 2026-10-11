import { View, Text } from "react-native";

export const Tooltip = ({ children, width = 189 }) => (
  <View accessibilityRole="text" style={{ width, padding: 8, borderRadius: 6, borderWidth: 1,
    borderColor: "#272729", backgroundColor: "#181715" }}>
    <Text style={{ fontSize: 11, lineHeight: 16, fontWeight: "500", color: "#D2CFD9" }}>{children}</Text>
  </View>
);
