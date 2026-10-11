import { Pressable, Text, View, StyleSheet } from "react-native";

type State = "default" | "active" | "active2" | "light" | "indented";
const bg: Record<State, string | undefined> = { default: undefined, active: "#181715", active2: "#27272A", light: "#fff", indented: undefined };
const fg: Record<State, string> = { default: "#A1A1AA", active: "#D2CFD9", active2: "#fff", light: "#333137", indented: "#A1A1AA" };

export function NavItem({ label, icon, trailing, state = "default", onPress }:
  { label: string; icon?: React.ReactNode; trailing?: React.ReactNode; state?: State; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} accessibilityRole="button" accessibilityState={{ selected: state !== "default" && state !== "indented" }}
      style={[s.row, { backgroundColor: bg[state], paddingLeft: state === "indented" ? 34 : 8 }]}>
      {state !== "indented" && icon ? <View style={s.icon}>{icon}</View> : null}
      <Text numberOfLines={1} style={[s.label, { color: fg[state] }]}>{label}</Text>
      {trailing}
    </Pressable>
  );
}
const s = StyleSheet.create({
  row: { height: 32, borderRadius: 6, padding: 8, flexDirection: "row", alignItems: "center", gap: 10 },
  icon: { width: 16, height: 16 },
  label: { flex: 1, fontSize: 14 },
});
