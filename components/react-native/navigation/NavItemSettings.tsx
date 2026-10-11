import { View } from "react-native";

export function NavItemSettings({ label = "General", icon, active, onPress }: { label?: string; icon?: React.ReactNode; active?: boolean; onPress?: () => void }) {
  return (
    <View style={{ width: 278, maxWidth: "100%" }}>
      <NavItem label={label} icon={icon} state={active ? "active2" : "default"} onPress={onPress} />
    </View>
  );
}
