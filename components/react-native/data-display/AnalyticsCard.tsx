import { View, Text, StyleSheet } from "react-native";

const C = { bg: "#181715", pill: "#272729", muted: "#A1A1AA", bar: "#7F64F7", dot: "#9C86FF" };

const Pill = ({ label, selected }) => (
  <View style={[s.pill, selected && { backgroundColor: C.pill }]}>
    <Text style={[s.pillText, selected && { color: "#fff" }]}>{label}</Text>
  </View>
);

export function AnalyticsCard({ bars, yLabels, xLabels, models, activeTab = "Overview", activeRange = "All" }) {
  return (
    <View style={s.card}>
      <View style={s.row}>
        {["Overview", "Models"].map(t => <Pill key={t} label={t} selected={t === activeTab} />)}
        <View style={{ flex: 1 }} />
        {["All", "30d", "7d"].map(r => <Pill key={r} label={r} selected={r === activeRange} />)}
      </View>
      <View style={s.chart}>
        <View style={s.y}>{yLabels.map(l => <Text key={l} style={s.muted}>{l}</Text>)}</View>
        <View style={s.bars}>
          {bars.map((b, i) => (
            <View key={i} style={{ flex: 1, height: b.h, backgroundColor: b.on ? C.bar : C.pill,
              borderTopLeftRadius: 2, borderTopRightRadius: 2 }} />
          ))}
        </View>
      </View>
      <View style={s.x}>{xLabels.map(l => <Text key={l} style={s.muted}>{l}</Text>)}</View>
      {models.map(m => (
        <View key={m.name} style={s.model}>
          <View style={s.row}><View style={s.dot} /><Text style={s.name}>{m.name}</Text></View>
          <View style={s.row}><Text style={s.muted}>{m.usage}</Text><Text style={s.pct}>{m.share}</Text></View>
        </View>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  card: { backgroundColor: C.bg, borderRadius: 12, padding: 16, gap: 20 },
  row: { flexDirection: "row", alignItems: "center", gap: 2 },
  pill: { height: 20, paddingHorizontal: 6, borderRadius: 4, justifyContent: "center" },
  pillText: { fontSize: 13, fontWeight: "500", color: C.muted },
  chart: { flexDirection: "row", height: 161, gap: 16 },
  y: { width: 45, justifyContent: "space-between", alignItems: "flex-end" },
  bars: { flex: 1, flexDirection: "row", alignItems: "flex-end", gap: 6, paddingRight: 12 },
  x: { flexDirection: "row", justifyContent: "space-between", paddingLeft: 76, paddingRight: 12 },
  muted: { fontSize: 12, color: C.muted },
  model: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  dot: { width: 10, height: 10, borderRadius: 2, backgroundColor: C.dot, marginRight: 8 },
  name: { fontSize: 13, fontWeight: "500", color: "#fff" },
  pct: { width: 60, textAlign: "right", fontSize: 12, fontWeight: "500", color: "#fff", marginLeft: 32 },
});
