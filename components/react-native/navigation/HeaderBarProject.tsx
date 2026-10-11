import { View, Text, Pressable } from "react-native";

type Props = { type?: "task" | "breadcrumb" | "breadcrumbActions"; title?: string; parent?: string; current?: string; onToggleSidebar?: () => void; actions?: React.ReactNode };

export function HeaderBarProject({ type = "task", title = "New task", parent = "Projects", current, onToggleSidebar, actions }: Props) {
  return (
    <View style={{ height: 56, paddingHorizontal: 24, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#27272A" }}>
      {type === "task" ? (
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}>{title} ⌄</Text>
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Text style={{ color: "#A1A1AA", fontSize: 14 }}>{parent} /</Text>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}>{current}</Text>
        </View>
      )}
      {type === "breadcrumbActions"
        ? <View style={{ flexDirection: "row", gap: 12 }}>{actions}</View>
        : <Pressable onPress={onToggleSidebar} accessibilityLabel="Toggle sidebar"><Text style={{ color: "#A1A1AA", fontSize: 20 }}>▯</Text></Pressable>}
    </View>
  );
}
