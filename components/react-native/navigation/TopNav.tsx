import { View, Text, TextInput, Pressable } from "react-native";

const Track = ({ items, value, onChange }: { items: string[]; value: string; onChange: (v: string) => void }) => (
  <View accessibilityRole="tablist" style={{ flexDirection: "row", padding: 4, borderRadius: 8, backgroundColor: "#121113" }}>
    {items.map((i) => (
      <Pressable key={i} accessibilityRole="tab" accessibilityState={{ selected: i === value }} onPress={() => onChange(i)}
        style={{ paddingHorizontal: 12, height: 24, justifyContent: "center", borderRadius: 6, backgroundColor: i === value ? "#27272A" : "transparent" }}>
        <Text style={{ fontSize: 14, color: i === value ? "#fff" : "#D2CFD9" }}>{i}</Text>
      </Pressable>
    ))}
  </View>
);

export function TopNav({ title, tabs, tab, onTab, filters, filter, onFilter, query, onQuery, onBack, onAdd, backPosition = "top" }: any) {
  const back = (
    <Pressable onPress={onBack} style={{ alignSelf: "flex-start", height: 32, paddingHorizontal: 12, borderRadius: 8, backgroundColor: "#27272A", flexDirection: "row", alignItems: "center", gap: 8 }}>
      <Text style={{ color: "#fff", fontSize: 12 }}>← Go Back</Text>
    </Pressable>
  );
  return (
    <View style={{ gap: 12 }}>
      {backPosition !== "bottom" && back}
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>{title}</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <Track items={tabs} value={tab} onChange={onTab} />
        <View style={{ width: 1, height: 32, backgroundColor: "#27272A" }} />
        <Track items={filters} value={filter} onChange={onFilter} />
        <TextInput value={query} onChangeText={onQuery} placeholder="Search skills and plugins" placeholderTextColor="#A1A1AA"
          style={{ flex: 1, height: 32, borderRadius: 8, backgroundColor: "#121113", paddingHorizontal: 12, color: "#fff" }} />
        <Pressable onPress={onAdd} style={{ height: 32, paddingHorizontal: 12, borderRadius: 8, backgroundColor: "#fff", justifyContent: "center" }}>
          <Text style={{ color: "#121113", fontWeight: "500" }}>Add +</Text>
        </Pressable>
      </View>
      {backPosition === "bottom" && back}
    </View>
  );
}
