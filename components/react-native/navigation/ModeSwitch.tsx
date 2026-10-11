import { View } from "react-native";

export function ModeSwitch({ items, value, onChange, large }: { items: string[]; value: string; onChange: (v: string) => void; large?: boolean }) {
  return (
    <View accessibilityRole="tablist" style={{ flexDirection: "row", alignSelf: "flex-start", gap: large ? 4 : 2, padding: large ? 4 : 2, borderRadius: 6, backgroundColor: "#121113" }}>
      {items.map((i) => <ModeSwitchItem key={i} label={i} large={large} active={i === value} onPress={() => onChange(i)} />)}
    </View>
  );
}
