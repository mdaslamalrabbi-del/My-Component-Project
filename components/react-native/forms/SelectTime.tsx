import { View } from "react-native";
import { Picker } from "@react-native-picker/picker"; // npx expo install @react-native-picker/picker

export function SelectTime({ value, onChange, options, type = "number" }) {
  return (
    <View style={{ width: type === "time" ? 84 : 96, height: 32, borderRadius: 8, backgroundColor: "#202022", justifyContent: "center", overflow: "hidden" }}>
      <Picker selectedValue={value} onValueChange={onChange} dropdownIconColor="#fff"
        style={{ color: type === "time" ? "#F7F5FA" : "#fff", fontSize: type === "time" ? 14 : 11 }}>
        {options.map((o) => <Picker.Item key={o} label={o} value={o} />)}
      </Picker>
    </View>
  );
}
