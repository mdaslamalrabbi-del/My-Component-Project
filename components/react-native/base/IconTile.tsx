import { View } from "react-native";

export const IconTile = ({ children }) => (
  <View style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: "#272729",
    alignItems: "center", justifyContent: "center" }}>
    {children /* a 16px icon in #D2CFD9 */}
  </View>
);
