import { Pressable } from "react-native";
import { ArrowUp, Square } from "lucide-react-native"; // swap for your icon set
// For the exact gradient border, wrap the send state in expo-linear-gradient (#0718D2 > #CF8BFF > #A4ABFF).

export function ButtonSend({ state = "send", onPress }) {
  const send = state === "send";
  return (
    <Pressable
      onPress={onPress}
      disabled={state === "disabled"}
      accessibilityLabel={state === "pause" ? "Stop" : "Send"}
      style={{ width: 32, height: 32, borderRadius: 8, alignItems: "center", justifyContent: "center",
        backgroundColor: send ? "#9C86FF" : "#272729", borderWidth: send ? 1 : 0, borderColor: "#CF8BFF" }}
    >
      {state === "pause" ? <Square size={20} color="#D2CFD9" strokeWidth={1.25} />
        : <ArrowUp size={send ? 16 : 20} strokeWidth={send ? 1 : 1.25} color={send ? "#fff" : "#6C6A64"} />}
    </Pressable>
  );
}
