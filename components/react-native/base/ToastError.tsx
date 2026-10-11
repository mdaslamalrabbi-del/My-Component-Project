import { View, Text, Pressable } from "react-native";
import { TriangleAlert, X } from "lucide-react-native"; // swap for your icon set

export function ToastError({ message, onDismiss }) {
  return (
    <View accessibilityRole="alert" style={{ flexDirection: "row", alignItems: "center", gap: 12, padding: 8,
      borderRadius: 6, backgroundColor: "#5A1A1A", alignSelf: "flex-start" }}>
      <TriangleAlert size={16} color="#FF9492" strokeWidth={1.5} />
      <Text style={{ fontSize: 12, lineHeight: 16, fontWeight: "600", color: "#FF9492" }}>{message}</Text>
      <Pressable onPress={onDismiss} accessibilityLabel="Dismiss"><X size={16} color="#FF9492" strokeWidth={1.5} /></Pressable>
    </View>
  );
}
