import { View, Text, TextInput, StyleSheet } from "react-native";

const format = (v: string) => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

export function CardNumberField({ label = "Card number", value, onChange, flag, brands }:
  { label?: string; value: string; onChange: (v: string) => void; flag?: React.ReactNode; brands?: boolean }) {
  return (
    <View style={s.wrap}>
      {!!label && <Text style={s.label}>{label}</Text>}
      <View style={s.box}>
        <TextInput value={value} onChangeText={(t) => onChange(format(t))} keyboardType="number-pad"
          placeholder="1234 1234 1234 1234" placeholderTextColor="#6C6A64" style={s.input} />
        {flag}
        {brands && <Text style={s.visa}>VISA</Text>}
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { gap: 8, width: 348, maxWidth: "100%" },
  label: { color: "#fff", fontSize: 13, fontWeight: "500" },
  box: { flexDirection: "row", alignItems: "center", gap: 8, height: 40, paddingHorizontal: 12, borderRadius: 8, borderWidth: 1, borderColor: "#27272A", backgroundColor: "#202022" },
  input: { flex: 1, color: "#fff", fontSize: 14, padding: 0 },
  visa: { color: "#fff", fontSize: 14, fontWeight: "900", fontStyle: "italic" },
});
