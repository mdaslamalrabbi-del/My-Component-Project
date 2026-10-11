import { useState } from "react";
import { View, Text, TextInput, Pressable, FlatList, StyleSheet } from "react-native";

type Item = { value: string; label: string };

export function SearchableMenu({ items, value, onChange }: { items: Item[]; value?: string; onChange: (v: string) => void }) {
  const [q, setQ] = useState("");
  const shown = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));
  return (
    <View style={s.menu}>
      <TextInput value={q} onChangeText={setQ} placeholder="Search" placeholderTextColor="#6C6A64" style={s.search} />
      <FlatList data={shown} keyExtractor={(i) => i.value} style={{ maxHeight: 216 }}
        renderItem={({ item }) => (
          <Pressable onPress={() => onChange(item.value)} style={s.row} accessibilityRole="menuitem">
            <Text style={s.text}>{item.label}</Text>
            {item.value === value && <Text style={s.text}>✓</Text>}
          </Pressable>
        )} />
    </View>
  );
}
const s = StyleSheet.create({
  menu: { width: 180, backgroundColor: "#202022", borderRadius: 8, padding: 4 },
  search: { height: 32, borderRadius: 6, backgroundColor: "#27272A", paddingHorizontal: 8, color: "#fff", fontSize: 12, marginBottom: 4 },
  row: { height: 26, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 8, borderRadius: 4 },
  text: { color: "#D2CFD9", fontSize: 13 },
});
