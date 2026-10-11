import { View, Text, Pressable } from "react-native";

export function HeaderBar({ title, folder, actions, onTitlePress }: { title: string; folder?: string; actions?: React.ReactNode; onTitlePress?: () => void }) {
  return (
    <View style={{ height: 50, backgroundColor: "#121113", flexDirection: "row", alignItems: "center", paddingLeft: 30, paddingRight: 16, gap: 8 }}>
      <Pressable onPress={onTitlePress} accessibilityRole="button" style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Text style={{ color: "#fff", fontSize: 14 }}>{title}</Text>
        <Text style={{ color: "#A1A1AA" }}>⌄</Text>
      </Pressable>
      {folder && <View style={{ backgroundColor: "#27272A", borderRadius: 4, paddingHorizontal: 6, paddingVertical: 4 }}><Text style={{ color: "#A1A1AA", fontSize: 11 }}>{folder}</Text></View>}
      <View style={{ flex: 1 }} />
      <View style={{ flexDirection: "row", gap: 16 }}>{actions}</View>
    </View>
  );
}
