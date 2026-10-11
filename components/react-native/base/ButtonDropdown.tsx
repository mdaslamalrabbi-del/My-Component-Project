import { Pressable, Text } from "react-native";
import { ChevronDown } from "lucide-react-native"; // swap for your icon set

export const ButtonDropdown = ({ label = "New task", onPress }) => (
  <Pressable onPress={onPress} style={{ height: 32, flexDirection: "row", alignItems: "center", gap: 6,
    paddingLeft: 12, paddingRight: 10, borderRadius: 8, backgroundColor: "#F7F5FA", alignSelf: "flex-start" }}>
    <Text style={{ fontSize: 14, lineHeight: 20, color: "#121113" }}>{label}</Text>
    <ChevronDown size={12} color="#121113" strokeWidth={1.5} />
  </Pressable>
);
