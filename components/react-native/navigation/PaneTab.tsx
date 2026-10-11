import { View, Text, Pressable } from "react-native";

export function PaneTab({ label, icon, active, preview, onSelect, onClose }: { label: string; icon?: React.ReactNode; active?: boolean; preview?: boolean; onSelect: () => void; onClose: () => void }) {
  return (
    <View accessibilityRole="tab" accessibilityState={{ selected: !!active }}
      style={{ height: 22, maxWidth: 197, flexDirection: "row", alignItems: "center", gap: 6, borderRadius: 6, paddingLeft: 6, paddingRight: 8, backgroundColor: active ? "#27272A" : "transparent" }}>
      <Pressable onPress={onSelect} style={{ flexDirection: "row", alignItems: "center", gap: 6, flexShrink: 1 }}>
        {icon ? <View style={{ width: 12, height: 12 }}>{icon}</View> : null}
        <Text numberOfLines={1} style={{ fontSize: 14, color: active ? "#fff" : "#D2CFD9", fontStyle: preview ? "italic" : "normal" }}>{label}</Text>
      </Pressable>
      <Pressable onPress={onClose} accessibilityLabel={`Close ${label}`}><Text style={{ color: "#A1A1AA", fontSize: 12 }}>✕</Text></Pressable>
    </View>
  );
}
