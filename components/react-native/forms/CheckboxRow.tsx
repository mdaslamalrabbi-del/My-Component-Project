import { useState } from "react";
import { View, Text, Pressable, Linking } from "react-native";

const muted = { color: "#A1A1AA", fontSize: 13, lineHeight: 20 };
export const Link = ({ href, children }) => (
  <Text style={{ color: "#BEB0FF", textDecorationLine: "underline" }} onPress={() => Linking.openURL(href)}>{children}</Text>
);

export function CheckboxRow({ type = "checkbox", checked, onCheckedChange, icon, children }) {
  const [inner, setInner] = useState(false);
  const on = checked ?? inner;
  return (
    <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}>
      {type === "checkbox" ? (
        <Pressable accessibilityRole="checkbox" accessibilityState={{ checked: on }} hitSlop={8}
          onPress={() => (onCheckedChange ? onCheckedChange(!on) : setInner(!on))}
          style={{ width: 16, height: 16, marginTop: 2, borderRadius: 3, borderWidth: 1,
            borderColor: on ? "#9C86FF" : "#6C6A64", backgroundColor: on ? "#9C86FF" : "transparent" }} />
      ) : (
        <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: "#27272A", alignItems: "center", justifyContent: "center" }}>{icon}</View>
      )}
      <Text style={[muted, { flex: 1 }]}>{children}</Text>
    </View>
  );
}

// <CheckboxRow>I agree to Puku's <Link href="https://puku.example/terms">Consumer Terms</Link> and ...</CheckboxRow>
