import { View } from "react-native";

export const IconTileSmall = ({ children }) => (
  <View style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: "#272729",
    alignItems: "center", justifyContent: "center" }}>
    {children /* a 20px icon in #D2CFD9 */}
  </View>
);
