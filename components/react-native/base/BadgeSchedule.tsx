import { View, Text } from "react-native";
import { Clock } from "lucide-react-native"; // swap for your icon set

export const BadgeSchedule = ({ label }) => (
  <View style={{ height: 18, flexDirection: "row", alignItems: "center", gap: 4, alignSelf: "flex-start",
    paddingLeft: 4, paddingRight: 6, borderRadius: 4, backgroundColor: "#1B4721" }}>
    <Clock size={8} color="#3FB950" strokeWidth={1.5} />
    <Text style={{ fontSize: 12, lineHeight: 16, color: "#3FB950" }}>{label}</Text>
  </View>
);
