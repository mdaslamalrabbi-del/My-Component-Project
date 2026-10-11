import { View, Text } from "react-native";
import { Chip } from "./Chip";

export function ChipGroup({ prefix, items, suffix }) {
  const t = { fontSize: 13, lineHeight: 18, color: "#fff", paddingHorizontal: 2 };
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 2 }}>
      {prefix ? <Text style={t}>{prefix}</Text> : null}
      {items.map((item, i) => (
        <View key={i} style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
          <Chip label={item} leftIcon={false} rightIcon={false} outlined />
          {i < items.length - 1 ? <Text style={t}>,</Text> : null}
        </View>
      ))}
      {suffix ? <Text style={t}>{suffix}</Text> : null}
    </View>
  );
}
