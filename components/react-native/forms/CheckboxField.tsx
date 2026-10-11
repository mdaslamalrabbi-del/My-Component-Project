import { Pressable, Text } from "react-native";
import { Checkbox } from "./Checkbox";

export function CheckboxField({ label, checked, onChange }) {
  return (
    <Pressable onPress={() => onChange(!checked)} style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}>
      <Checkbox checked={checked} onChange={onChange} />
      <Text style={{ color: "#fff", fontSize: 14, paddingTop: 2 }}>{label}</Text>
    </Pressable>
  );
}
