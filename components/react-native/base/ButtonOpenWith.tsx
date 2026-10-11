import { Pressable, Text } from "react-native";
import { ChevronDown } from "lucide-react-native"; // swap for your icon set

const SIZES = { large: { h: 32, r: 8, icon: 16 }, default: { h: 24, r: 6, icon: 12 } };

export function ButtonOpenWith({ text, size = "large", showLeft = true, showRight = true, onPress }) {
  const s = SIZES[size];
  return (
    <Pressable onPress={onPress} style={{ height: s.h, borderRadius: s.r, paddingHorizontal: 12, gap: 8,
      flexDirection: "row", alignItems: "center", backgroundColor: "#272729", alignSelf: "flex-start" }}>
      {showLeft && <ChevronDown size={s.icon} color="#D2CFD9" strokeWidth={1.25} />}
      <Text style={{ fontSize: 12, lineHeight: 16, fontWeight: "500", color: "#fff" }}>{text}</Text>
      {showRight && <ChevronDown size={s.icon} color="#D2CFD9" strokeWidth={1.25} />}
    </Pressable>
  );
}
