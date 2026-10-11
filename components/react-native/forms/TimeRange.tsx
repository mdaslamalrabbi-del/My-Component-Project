import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

type Props = { day: string; start: string; end: string; onStart: (v: string) => void; onEnd: (v: string) => void; times: string[]; nextDay?: boolean };

export function TimeRange({ day, start, end, onStart, onEnd, times, nextDay }: Props) {
  const pick = (value: string, onChange: (v: string) => void, width: number, label: string) => (
    <View style={[s.sel, { width }]}>
      <Picker selectedValue={value} onValueChange={onChange} accessibilityLabel={label} dropdownIconColor="#fff" style={{ color: "#fff" }}>
        {times.map((t) => <Picker.Item key={t} label={t} value={t} />)}
      </Picker>
    </View>
  );
  return (
    <View style={s.row}>
      <Text style={[s.txt, { width: 92 }]}>{day}</Text>
      <View style={s.pair}>{pick(start, onStart, 96, `${day} start`)}<Text style={s.txt}>To</Text>{pick(end, onEnd, 96, `${day} end`)}</View>
      {nextDay && <Text style={s.txt}>next day</Text>}
    </View>
  );
}
const s = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 40 },
  pair: { flexDirection: "row", alignItems: "center", gap: 8 },
  txt: { color: "#A1A1AA", fontSize: 14, fontWeight: "500" },
  sel: { height: 32, borderRadius: 8, backgroundColor: "#1D1D1F", justifyContent: "center", overflow: "hidden" },
});
