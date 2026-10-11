import { useState } from "react";
import { View, Text, TextInput } from "react-native";

export function Input({ label, helper, size = "lg", icon, disabled, onFocus, onBlur, ...props }) {
  const [focus, setFocus] = useState(false);
  const lg = size === "lg";
  return (
    <View style={{ width: 280, gap: 8 }}>
      {label && <Text style={{ color: "#fff", fontSize: 13, lineHeight: 18, fontWeight: "500" }}>{label}</Text>}
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 12,
        height: lg ? 40 : 32, borderRadius: lg ? 8 : 6, borderWidth: 1, backgroundColor: "#202022",
        borderColor: focus ? "#9C86FF" : "#27272A", opacity: disabled ? 0.6 : 1 }}>
        {icon}
        <TextInput {...props} editable={!disabled} placeholderTextColor="#6C6A64"
          onFocus={(e) => { setFocus(true); onFocus?.(e); }} onBlur={(e) => { setFocus(false); onBlur?.(e); }}
          style={{ flex: 1, color: "#fff", fontSize: lg ? 14 : 13, padding: 0 }} />
      </View>
      {helper && <Text style={{ color: "#A1A1AA", fontSize: 13, lineHeight: 18 }}>{helper}</Text>}
    </View>
  );
}
