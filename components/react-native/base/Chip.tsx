import { View, Text } from "react-native";
import { ChevronDown, FolderOpen } from "lucide-react-native"; // swap for your icon set

export function Chip({ label, leftIcon = true, rightIcon = true, outlined = false }) {
  return (
    <View style={{ height: 20, paddingHorizontal: 8, gap: 6, flexDirection: "row", alignItems: "center",
      alignSelf: "flex-start", borderRadius: 4, backgroundColor: "#272729",
      borderWidth: outlined ? 1 : 0, borderColor: "#333137" }}>
      {leftIcon && <FolderOpen size={12} color="#D2CFD9" strokeWidth={1.5} />}
      {label ? <Text style={{ fontSize: 11, lineHeight: 16, fontWeight: "500", color: "#D2CFD9" }}>{label}</Text> : null}
      {rightIcon && <ChevronDown size={12} color="#D2CFD9" strokeWidth={1.5} />}
    </View>
  );
}
