import { Pressable, View } from "react-native";
import { ChevronDown } from "lucide-react-native"; // swap for your icon set

export const CaretButton = ({ pressed: forced = false, onPress }) => (
  <Pressable onPress={onPress} accessibilityLabel="Toggle" hitSlop={8}>
    {({ pressed }) => {
      const on = pressed || forced;
      return (
        <View style={{ width: 10, height: on ? 16 : 10, borderRadius: 12, alignItems: "center",
          justifyContent: "center", backgroundColor: on ? "#272729" : "transparent" }}>
          <ChevronDown size={10} color="#A1A1AA" strokeWidth={1.5} />
        </View>
      );
    }}
  </Pressable>
);
