import { Pressable, Text } from "react-native";

export function ModelSelect({ model, effort, onPress }) {
  return (
    <Pressable onPress={onPress}
      style={({ pressed }) => ({ flexDirection: "row", alignItems: "center", gap: 6, padding: 4, borderRadius: 4,
        backgroundColor: pressed ? "#27272A" : "transparent", alignSelf: "flex-start" })}>
      <Text style={{ color: "#fff", fontSize: 12 }}>{model}</Text>
      {effort && <Text style={{ color: "#A1A1AA", fontSize: 12 }}>{effort}</Text>}
    </Pressable>
  );
}
