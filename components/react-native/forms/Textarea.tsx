import { TextInput } from "react-native";
import { useState } from "react";

export function Textarea(props) {
  const [focus, setFocus] = useState(false);
  return (
    <TextInput multiline textAlignVertical="top" placeholderTextColor="#6C6A64" {...props}
      onFocus={(e) => { setFocus(true); props.onFocus?.(e); }} onBlur={(e) => { setFocus(false); props.onBlur?.(e); }}
      style={[{ minHeight: 93, padding: 12, borderRadius: 8, backgroundColor: "#27272A", color: "#fff", fontSize: 14,
        borderWidth: 1, borderColor: focus ? "#333137" : "transparent" }, props.style]} />
  );
}
