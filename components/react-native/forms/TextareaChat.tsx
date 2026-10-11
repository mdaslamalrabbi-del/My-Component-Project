import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

type Props = { value: string; onChange: (v: string) => void; onSend: () => void; processing?: string; placeholder?: string };

export function TextareaChat({ value, onChange, onSend, processing, placeholder = "Write a message…" }: Props) {
  const hasText = value.trim().length > 0;
  return (
    <View style={{ gap: 16 }}>
      {!!processing && <Text style={s.status} accessibilityRole="alert">{processing}</Text>}
      <View style={s.box}>
        <TextInput value={value} onChangeText={onChange} placeholder={placeholder} placeholderTextColor="#A1A1AA" multiline style={s.input} />
        <Pressable onPress={onSend} disabled={!hasText} accessibilityLabel="Send"
          style={[s.send, { backgroundColor: hasText ? "#9C86FF" : "#27272A" }]}>
          <Text style={{ color: hasText ? "#fff" : "#6C6A64", fontSize: 16 }}>↑</Text>
        </Pressable>
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  status: { color: "#A1A1AA", fontSize: 13 },
  box: { flexDirection: "row", alignItems: "center", gap: 24, padding: 16, borderRadius: 16, borderWidth: 1, borderColor: "#27272A", backgroundColor: "#181715" },
  input: { flex: 1, color: "#fff", fontSize: 14, padding: 0, maxHeight: 120 },
  send: { width: 32, height: 32, borderRadius: 8, alignItems: "center", justifyContent: "center" },
});
