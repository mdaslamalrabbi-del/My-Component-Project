import { View } from "react-native";

export const Avatar = ({ size = 46 }) => (
  <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: "#000" }} />
);
