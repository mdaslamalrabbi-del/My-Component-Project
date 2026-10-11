import { Pressable, View, Text } from "react-native";

export function Radio({ checked, onChange, label }) {
  return (
    <Pressable accessibilityRole="radio" accessibilityState={{ checked }} onPress={() => onChange(true)}
      style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <View style={{ width: 22, height: 22, borderRadius: 11, borderWidth: 1, alignItems: "center", justifyContent: "center",
        borderColor: checked ? "#0075FF" : "#D2CFD9", backgroundColor: checked ? "#fff" : "transparent" }}>
        {checked && <View style={{ width: 13, height: 13, borderRadius: 7, backgroundColor: "#0075FF" }} />}
      </View>
      {label && <Text style={{ color: "#fff", fontSize: 14 }}>{label}</Text>}
    </Pressable>
  );
}
