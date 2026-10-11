import { useState } from "react";
import { View, Text, TextInput } from "react-native";

export function TextField({ label, helper, error, leading, trailing, disabled, ...props }) {
  const [focus, setFocus] = useState(false);
  const border = error ? "#F85149" : focus ? "#9C86FF" : disabled ? "#27272A" : "#333137";
  return (
    <View style={{ width: 360, maxWidth: "100%", gap: 8 }}>
      {label && <Text style={{ color: disabled ? "#6C6A64" : "#fff", fontSize: 13, fontWeight: "500" }}>{label}</Text>}
      <View style={{ height: 40, flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 12, borderRadius: 6,
        borderWidth: 1, borderColor: border, backgroundColor: disabled ? "#202022" : "#27272A" }}>
        {leading}
        <TextInput {...props} editable={!disabled} cursorColor="#9C86FF" selectionColor="#9C86FF"
          placeholderTextColor={disabled ? "#6C6A64" : "#A1A1AA"}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ flex: 1, padding: 0, fontSize: 14, color: disabled ? "#6C6A64" : "#fff" }} />
        {trailing}
      </View>
      {helper && <Text style={{ fontSize: 12, color: error ? "#F85149" : disabled ? "#6C6A64" : "#A1A1AA" }}>{helper}</Text>}
    </View>
  );
}
