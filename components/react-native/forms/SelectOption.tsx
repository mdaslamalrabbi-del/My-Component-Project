import { Pressable, Text } from "react-native";

export function SelectOption({ children, selected, onPress }) {
  return (
    <Pressable accessibilityRole="menuitem" accessibilityState={{ selected }} onPress={onPress}
      style={{ height: 26, paddingHorizontal: 12, borderRadius: 4, justifyContent: "center",
        backgroundColor: selected ? "#27272A" : "transparent" }}>
      <Text style={{ color: selected ? "#fff" : "#D2CFD9", fontSize: 14 }}>{children}</Text>
    </Pressable>
  );
}
