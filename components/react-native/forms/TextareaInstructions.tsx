import { View, Text, TextInput, StyleSheet } from "react-native";

type Props = { variant?: "default" | "footer"; title?: string; description?: string; value: string; onChange: (v: string) => void;
  placeholder?: string; action?: React.ReactNode; footer?: React.ReactNode };

export function TextareaInstructions({ variant = "default", title = "Instructions for Claude", description, value, onChange,
  placeholder = "e.g. ask clarifying questions before giving detailed answers", action, footer }: Props) {
  const area = (bg: string) => (
    <TextInput value={value} onChangeText={onChange} placeholder={placeholder} placeholderTextColor="#6C6A64" multiline
      style={[s.area, { backgroundColor: bg }]} />
  );
  if (variant === "footer") {
    return (
      <View style={s.card}>
        {area("#000")}
        <View style={s.footer}>{footer}</View>
      </View>
    );
  }
  return (
    <View style={{ gap: 16 }}>
      <View style={{ flexDirection: "row", gap: 24 }}>
        <View style={{ flex: 1, gap: 16 }}>
          <Text style={s.title}>{title}</Text>
          <Text style={s.desc}>{description}</Text>
        </View>
        {action}
      </View>
      {area("#27272A")}
      <View style={{ height: 1, backgroundColor: "#27272A" }} />
    </View>
  );
}
const s = StyleSheet.create({
  card: { borderRadius: 8, backgroundColor: "#27272A", overflow: "hidden" },
  area: { height: 93, borderRadius: 8, padding: 12, color: "#fff", fontSize: 14, textAlignVertical: "top" },
  footer: { height: 40, paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  title: { color: "#fff", fontSize: 14, fontWeight: "500" },
  desc: { color: "#A1A1AA", fontSize: 13, lineHeight: 17 },
});
