import { View, Text, StyleSheet } from "react-native";
import { Info } from "lucide-react-native"; // swap for your icon set

export function AlertInfo({ children }) {
  return (
    <View style={s.root} accessibilityRole="alert">
      <Info size={26} color="#D2CFD9" strokeWidth={1.25} />
      <Text style={s.text}>{children}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flexDirection: "row", alignItems: "center", gap: 16, padding: 12,
    backgroundColor: "#272729", borderRadius: 12 },
  text: { flex: 1, fontSize: 14, lineHeight: 20, color: "#fff" },
});
