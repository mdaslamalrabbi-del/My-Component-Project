import { View, Text, Image, Pressable, ScrollView } from "react-native";

export function Sidebar({ mode = "default", tab, onTab, user, children }:
  { mode?: "default" | "responsive" | "code"; tab: "home" | "code"; onTab: (t: "home" | "code") => void; user: { name: string; avatar: string }; children?: React.ReactNode }) {
  const rail = mode === "responsive";
  return (
    <View style={{ width: rail ? 56 : 264, flex: 1, backgroundColor: "#181715", borderWidth: 1, borderColor: "#27272A", alignItems: rail ? "center" : "stretch" }}>
      <View style={{ padding: 12 }}><ModeSwitch value={tab} onChange={onTab} compact={rail} /></View>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 12 }}>{children}</ScrollView>
      <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 8, padding: 12, borderTopWidth: 1, borderTopColor: "#27272A" }}>
        <Image source={{ uri: user.avatar }} style={{ width: 20, height: 20, borderRadius: 3 }} />
        {!rail && <Text style={{ flex: 1, color: "#D2CFD9", fontSize: 14 }}>{user.name}</Text>}
      </Pressable>
    </View>
  );
}
