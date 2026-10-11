import { useState } from "react";
import { View, Text, Pressable, ScrollView, TextInput } from "react-native";

export function Select({ options, value, onChange, placeholder = "Select your role", size = "lg", leading, searchable }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const current = options.find((o) => o.value === value);
  const shown = options.filter((o) => o.label.toLowerCase().includes(q.toLowerCase()));
  return (
    <View style={{ width: 348, maxWidth: "100%", zIndex: open ? 10 : 0 }}>
      <Pressable accessibilityRole="combobox" accessibilityState={{ expanded: open }} onPress={() => setOpen(!open)}
        style={{ height: size === "lg" ? 40 : 32, paddingHorizontal: size === "lg" ? 12 : 8, borderRadius: 8, borderWidth: 1,
          flexDirection: "row", alignItems: "center", justifyContent: "space-between",
          borderColor: open ? "#9C86FF" : "#27272A", backgroundColor: open ? "#121113" : "#181715" }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          {leading}
          <Text style={{ color: current ? "#fff" : "#A1A1AA", fontSize: 14 }}>{current?.label ?? placeholder}</Text>
        </View>
        <Text style={{ color: "#A1A1AA", fontSize: 12 }}>⌄</Text>
      </Pressable>
      {open && (
        <View style={{ position: "absolute", top: 44, left: 0, right: 0, padding: 6, borderRadius: 8, borderWidth: 1,
          borderColor: "#333137", backgroundColor: "#202022", elevation: 8, maxHeight: 300 }}>
          {searchable && (
            <TextInput value={q} onChangeText={setQ} placeholder="Search" placeholderTextColor="#6C6A64"
              style={{ height: 32, borderRadius: 8, backgroundColor: "#27272A", paddingHorizontal: 8, color: "#fff", marginBottom: 6 }} />
          )}
          <ScrollView>
            {shown.map((o) => (
              <Pressable key={o.value} accessibilityRole="menuitem" onPress={() => { onChange(o.value); setOpen(false); setQ(""); }}
                style={{ height: 27, paddingHorizontal: 12, borderRadius: 4, flexDirection: "row", alignItems: "center", justifyContent: "space-between",
                  backgroundColor: o.value === value ? "#27272A" : "transparent" }}>
                <Text style={{ color: o.value === value ? "#fff" : "#D2CFD9", fontSize: 14 }}>{o.label}</Text>
                {o.value === value && <Text style={{ color: "#A1A1AA" }}>✓</Text>}
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
}
