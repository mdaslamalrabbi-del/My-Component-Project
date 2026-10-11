import { View, Text } from "react-native";

const themes = {
  dark: { bg: "#272729", fg: "#FFFFFF" },
  light: { bg: "#F7F5FA", fg: "#121113" },
};

export function AvatarInitial({ initial, theme = "dark" }) {
  const t = themes[theme];
  return (
    <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: t.bg,
      alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 12, lineHeight: 16, fontWeight: "600", color: t.fg }}>
        {initial.slice(0, 1).toUpperCase()}
      </Text>
    </View>
  );
}
