import { View, Text, TextInput, Pressable } from "react-native";

const Btn = ({ children, onPress }) => (
  <Pressable onPress={onPress} style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
    <Text style={{ color: "#A1A1AA", fontSize: 12 }}>{children} ⌄</Text>
  </Pressable>
);

export function InstructionsField({ type = "cloud", value, onChangeText, label = "Instructions",
  placeholder = "Describe what Puku should do in each session", worktree, onWorktreeChange,
  repo = "Select a repository", env = "puku-cli", folder = "Select folder" }) {
  return (
    <View style={{ gap: 8 }}>
      <Text style={{ color: "#fff", fontSize: 13, fontWeight: "500" }}>{label}</Text>
      <View style={{ borderRadius: 8, overflow: "hidden", backgroundColor: "#181715" }}>
        <View style={{ minHeight: 96, padding: 14, justifyContent: "space-between", gap: 16 }}>
          <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor="#4A4850"
            multiline style={{ color: "#fff", fontSize: 14, padding: 0 }} />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16, justifyContent: type === "cloud" ? "flex-end" : "space-between" }}>
            {type === "cloud" ? (<><Btn>Voice</Btn><Btn>Opus 4.8</Btn></>) : (<><Btn>Manual</Btn><Btn>Default</Btn></>)}
          </View>
        </View>
        <View style={{ height: 36, paddingHorizontal: 14, backgroundColor: "#202022", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ color: "#A1A1AA", fontSize: 13 }}>{type === "cloud" ? repo : folder}</Text>
          {type === "cloud" ? <Text style={{ color: "#D2CFD9", fontSize: 13 }}>{env}</Text> : (
            <Pressable onPress={() => onWorktreeChange?.(!worktree)} accessibilityRole="checkbox" accessibilityState={{ checked: !!worktree }}
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
              <View style={{ width: 12, height: 12, borderRadius: 2, borderWidth: 1, borderColor: worktree ? "#9C86FF" : "#A1A1AA", backgroundColor: worktree ? "#9C86FF" : "transparent" }} />
              <Text style={{ color: "#A1A1AA", fontSize: 13 }}>Worktree</Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}
