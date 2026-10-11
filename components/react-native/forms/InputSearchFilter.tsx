import { View, TextInput, Pressable } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

export function InputSearchFilter({ value, onChangeText, onFilter, placeholder = "Search Projects" }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 12, width: 330 }}>
      <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#4A4850" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </Svg>
      <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor="#4A4850"
        accessibilityLabel={placeholder} style={{ flex: 1, color: "#D2CFD9", fontSize: 16, fontWeight: "500", padding: 0 }} />
      <Pressable onPress={onFilter} accessibilityLabel="Filter" hitSlop={8}>
        <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#6C6A64" strokeWidth={1.5} strokeLinecap="round">
          <Path d="M4 7h10M18 7h2M4 17h2M10 17h10" /><Circle cx={16} cy={7} r={2} /><Circle cx={8} cy={17} r={2} />
        </Svg>
      </Pressable>
    </View>
  );
}
