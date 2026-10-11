import { View, Text, TextInput, Pressable } from "react-native";

type Props = { type: "plan"; title?: string; onClose: () => void } |
  { type: "browser"; tabs: React.ReactNode; url: string; onUrl: (v: string) => void; onBack: () => void; onForward: () => void; onClose: () => void };

export function PaneHeader(p: Props) {
  if (p.type === "plan") {
    return (
      <View style={{ height: 40, paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#27272A", borderWidth: 1, borderColor: "#27272A" }}>
        <Text style={{ color: "#fff", fontSize: 14, fontWeight: "600" }}>{p.title ?? "Plan"}</Text>
        <Pressable onPress={p.onClose} accessibilityLabel="Close"><Text style={{ color: "#A1A1AA", fontSize: 16 }}>✕</Text></Pressable>
      </View>
    );
  }
  return (
    <View style={{ backgroundColor: "#27272A", paddingHorizontal: 16, paddingVertical: 8, gap: 8 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 8 }}>{p.tabs}</View>
        <Pressable onPress={p.onClose} accessibilityLabel="Close"><Text style={{ color: "#A1A1AA" }}>✕</Text></Pressable>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <Pressable onPress={p.onBack}><Text style={{ color: "#A1A1AA" }}>←</Text></Pressable>
        <Pressable onPress={p.onForward}><Text style={{ color: "#A1A1AA" }}>→</Text></Pressable>
        <TextInput value={p.url} onChangeText={p.onUrl} placeholder="Type a URL" placeholderTextColor="#A1A1AA"
          style={{ flex: 1, height: 32, borderRadius: 6, backgroundColor: "#1D1D1F", paddingHorizontal: 12, color: "#fff", fontSize: 14 }} />
      </View>
    </View>
  );
}
