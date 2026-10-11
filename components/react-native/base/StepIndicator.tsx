import { View, Text } from "react-native";
import { Check, ChevronRight } from "lucide-react-native"; // swap for your icon set

export function StepIndicator({ status, number }) {
  if (status === "done")
    return (
      <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "#A1A1AA", alignItems: "center", justifyContent: "center" }}>
        <Check size={8} color="#181715" strokeWidth={3} />
      </View>
    );
  if (status === "caret") return <ChevronRight size={12} color="#A1A1AA" strokeWidth={1.5} />;
  return <Text style={{ width: 12, textAlign: "center", fontSize: 11, lineHeight: 16, color: "#A1A1AA" }}>{number}</Text>;
}
