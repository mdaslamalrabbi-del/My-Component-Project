import { View } from "react-native";
// For the wave type, draw it with react-native-svg: <Path d="M0 3 q2.5 -1.6 5 0 t5 0 ..." stroke="#272729" />

export function Divider({ type = "default" }) {
  const color = "#272729";
  if (type === "vertical") return <View style={{ width: 1, height: 24, marginVertical: 8, backgroundColor: color }} />;
  return <View style={{ height: 1, marginHorizontal: type === "padded" ? 8 : 0, backgroundColor: color }} />;
}
