import { View } from "react-native";

// Native scroll indicators cannot be restyled, so hide them and draw this thumb yourself.
// <ScrollView showsVerticalScrollIndicator={false} onScroll={...} />
export const ScrollThumb = ({ height = 256, active = false }) => (
  <View style={{ width: 6, height, borderRadius: 4, backgroundColor: active ? "#D2CFD9" : "#333137" }} />
);
