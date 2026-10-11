import { View, Text, Switch, StyleSheet } from "react-native";
import { Info, Sun } from "lucide-react-native"; // swap for your icon set

export function AlertBanner({ message, action, checked, onCheckedChange }) {
  return (
    <View style={s.root}>
      <Info size={16} color="#A1A1AA" />
      <Text style={[s.text, { flex: 1, paddingVertical: 12 }]}>{message}</Text>
      <Sun size={16} color="#A1A1AA" />
      <Text style={[s.text, { marginRight: 12 }]}>{action}</Text>
      <Switch
        value={checked}
        onValueChange={onCheckedChange}
        trackColor={{ false: "#333137", true: "#7F64F7" }}
        thumbColor="#fff"
      />
    </View>
  );
}

const s = StyleSheet.create({
  root: { minHeight: 44, flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 14,
    borderWidth: 1, borderColor: "#272729", borderRadius: 8 },
  text: { fontSize: 14, lineHeight: 20, color: "#D2CFD9" },
});
