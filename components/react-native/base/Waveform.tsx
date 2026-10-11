import { View } from "react-native";

const HEIGHTS = [4, 12, 8, 4, 6]; // repeats 7 times = 35 bars

export function Waveform({ bars = 35, color = "#A1A1AA" }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", height: 12, paddingHorizontal: 4, gap: 4 }}
      accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {Array.from({ length: bars }, (_, i) => (
        <View key={i} style={{ width: 1, height: HEIGHTS[i % 5], borderRadius: 1, backgroundColor: color }} />
      ))}
    </View>
  );
}
