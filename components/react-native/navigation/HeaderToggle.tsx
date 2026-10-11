import { Pressable, View } from "react-native";

export function HeaderToggle({ pressed, onChange, label, children }: { pressed: boolean; onChange: (v: boolean) => void; label: string; children: React.ReactNode }) {
  return (
    <Pressable onPress={() => onChange(!pressed)} accessibilityRole="button" accessibilityLabel={label} accessibilityState={{ selected: pressed }}
      style={{ width: 26, height: 26, borderRadius: 6, alignItems: "center", justifyContent: "center", backgroundColor: pressed ? "#171329" : "transparent" }}>
      <View style={{ width: 16, height: 16 }}>{children}</View>
    </Pressable>
  );
}
