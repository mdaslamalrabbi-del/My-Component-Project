import { View } from "react-native";
import { SelectOption } from "./SelectOption";

export function SelectMenu({ items, value, onChange }) {
  return (
    <View style={{ width: 360, maxWidth: "100%", padding: 4, borderRadius: 6, borderWidth: 1, borderColor: "#333137", backgroundColor: "#202022" }}>
      {items.map((it) => (
        <SelectOption key={it.value} selected={it.value === value} onPress={() => onChange(it.value)}>{it.label}</SelectOption>
      ))}
    </View>
  );
}
