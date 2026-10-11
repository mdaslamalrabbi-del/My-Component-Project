import { Pressable, View, Text } from "react-native";

export function RadioCard({ checked, onPress, title, price, note, badge }) {
  return (
    <Pressable accessibilityRole="radio" accessibilityState={{ checked }} onPress={onPress}
      style={{ width: 257, padding: 16, gap: 16, borderRadius: 12, borderWidth: 1,
        borderColor: checked ? "#9C86FF" : "#333137", backgroundColor: checked ? "#000" : "#181715" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View style={{ width: 22, height: 22, borderRadius: 11, borderWidth: 1, alignItems: "center", justifyContent: "center",
          borderColor: checked ? "#0075FF" : "#D2CFD9", backgroundColor: checked ? "#fff" : "transparent" }}>
          {checked && <View style={{ width: 13, height: 13, borderRadius: 7, backgroundColor: "#0075FF" }} />}
        </View>
        {badge && (
          <View style={{ height: 22, paddingHorizontal: 8, borderRadius: 6, backgroundColor: "#1B4721", justifyContent: "center" }}>
            <Text style={{ color: "#3FB950", fontSize: 12, fontWeight: "500" }}>{badge}</Text>
          </View>
        )}
      </View>
      <View style={{ gap: 20 }}>
        <Text style={{ color: "#fff", fontSize: 12, fontWeight: "500" }}>{title}</Text>
        <View style={{ gap: 12 }}>
          <Text style={{ color: "#fff", fontSize: 14 }}>{price}</Text>
          {note && <Text style={{ color: "#6C6A64", fontSize: 11 }}>{note}</Text>}
        </View>
      </View>
    </Pressable>
  );
}
