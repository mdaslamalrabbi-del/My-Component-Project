import { Pressable, Text } from "react-native";
import { ChevronDown } from "lucide-react-native"; // swap for your icon set

export function ButtonSkip({ kind = "button", showLeft = false, showRight = false, title = "Skip", onPress }) {
  return (
    <Pressable onPress={onPress} style={{ height: 24, paddingHorizontal: 12, borderRadius: 6, gap: 4,
      flexDirection: "row", alignItems: "center", alignSelf: "flex-start",
      backgroundColor: kind === "button" ? "#272729" : "transparent" }}>
      {showLeft && <ChevronDown size={10} color="#A1A1AA" strokeWidth={1.5} />}
      <Text style={{ fontSize: 12, lineHeight: 16, color: "#fff", fontWeight: kind === "text" ? "500" : "400" }}>{title}</Text>
      {showRight && <ChevronDown size={10} color="#A1A1AA" strokeWidth={1.5} />}
    </Pressable>
  );
}
