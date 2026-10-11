import { Pressable } from "react-native";
import Svg, { Path } from "react-native-svg";

export function Checkbox({ checked, onChange, disabled }) {
  return (
    <Pressable accessibilityRole="checkbox" accessibilityState={{ checked, disabled }} disabled={disabled}
      onPress={() => onChange(!checked)} hitSlop={8}
      style={{ width: 20, height: 20, borderRadius: 6, borderWidth: checked ? 0 : 1, borderColor: "#333137",
        backgroundColor: checked ? "#9C86FF" : "#27272A", alignItems: "center", justifyContent: "center", opacity: disabled ? 0.5 : 1 }}>
      {checked && (
        <Svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
          <Path d="M5 12.5l4.5 4.5L19 7.5" />
        </Svg>
      )}
    </Pressable>
  );
}
