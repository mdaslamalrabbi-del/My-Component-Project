import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";

export function SidebarSettings({ sections, active, onSelect }:
  { sections: { title: string; items: { id: string; label: string }[] }[]; active: string; onSelect: (id: string) => void }) {
  const [q, setQ] = useState("");
  return (
    <View style={{ width: 192, backgroundColor: "#181715", borderWidth: 1, borderColor: "#27272A", gap: 12 }}>
      <View style={{ padding: 12, paddingBottom: 0 }}>
        <TextInput value={q} onChangeText={setQ} placeholder="Search" placeholderTextColor="#A1A1AA" style={{ height: 32, borderRadius: 8, backgroundColor: "#27272A", paddingHorizontal: 8, color: "#fff" }} />
      </View>
      <View style={{ paddingHorizontal: 12, gap: 24 }}>
        {sections.map((sec) => (
          <View key={sec.title} style={{ gap: 12 }}>
            <Text style={{ paddingHorizontal: 8, paddingTop: 12, fontSize: 12, color: "#A1A1AA", textTransform: "uppercase" }}>{sec.title}</Text>
            {sec.items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase())).map((i) => (
              <Pressable key={i.id} onPress={() => onSelect(i.id)} style={{ height: 32, borderRadius: 8, paddingHorizontal: 8, justifyContent: "center", backgroundColor: i.id === active ? "#27272A" : "transparent" }}>
                <Text style={{ fontSize: 14, color: i.id === active ? "#fff" : "#A1A1AA" }}>{i.label}</Text>
              </Pressable>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}
