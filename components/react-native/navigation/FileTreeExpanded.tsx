import { View, Text } from "react-native";

export function FileTreeExpanded() {
  return (
    <View style={{ width: 240, gap: 2 }}>
      <FileTree nodes={[
        { name: ".claude-plugin", children: [{ name: "marketplace.json" }, { name: "plugin.json" }] },
        { name: "agents", children: [] }, { name: "skills", children: [] },
      ]} defaultOpen={[".claude-plugin"]} />
      {["LICENSE", "README.md"].map((f) => (
        <View key={f} style={{ height: 32, padding: 8, justifyContent: "center" }}>
          <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500" }}>{f}</Text>
        </View>
      ))}
    </View>
  );
}
