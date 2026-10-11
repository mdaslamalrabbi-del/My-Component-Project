import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

const Folder = () => (
  <Svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </Svg>
);
const Branch = () => (
  <Svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <Path d="M6 3v12" /><Circle cx={18} cy={6} r={3} /><Circle cx={6} cy={18} r={3} /><Path d="M18 9a9 9 0 0 1-9 9" />
  </Svg>
);
const text = { fontSize: 13, lineHeight: 18, color: "#D2CFD9" };

export function ContextChip({ type = "default", label = "samiis-portfolio", icon, checked, onCheckedChange, toggleLabel = "worktree" }) {
  const [inner, setInner] = useState(false);
  const on = checked ?? inner;
  return (
    <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "flex-start", height: 24, gap: 6,
      paddingHorizontal: 6, borderRadius: 4, backgroundColor: "#27272A" }}>
      {icon ?? (type === "branch" ? <Branch /> : <Folder />)}
      {type !== "icon" && <Text style={text}>{label}</Text>}
      {type === "branch" && (
        <>
          <View style={{ width: 1, height: 12, backgroundColor: "#333137" }} />
          <Pressable accessibilityRole="checkbox" accessibilityState={{ checked: on }}
            onPress={() => (onCheckedChange ? onCheckedChange(!on) : setInner(!on))}
            style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <View style={{ width: 12, height: 12, borderRadius: 2, borderWidth: 1,
              borderColor: on ? "#9C86FF" : "#A1A1AA", backgroundColor: on ? "#9C86FF" : "transparent" }} />
            <Text style={text}>{toggleLabel}</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

// Wrapper bar from the Figma set: #202022, 12px padding, 8px gap, 5px radius.
export const ContextBar = ({ children }) => (
  <View style={{ flexDirection: "row", alignItems: "center", gap: 8, padding: 12, borderRadius: 5, backgroundColor: "#202022", alignSelf: "flex-start" }}>{children}</View>
);
