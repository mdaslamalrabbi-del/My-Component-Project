import { View, Text, Pressable } from "react-native";
import * as DocumentPicker from "expo-document-picker"; // npx expo install expo-document-picker

const Tile = ({ children }) => (
  <View style={{ width: 40, height: 40, borderRadius: 6, backgroundColor: "#121113", alignItems: "center", justifyContent: "center" }}>{children}</View>
);

export function DropZone({ variant = "file", children, icon, onFiles, onPress }) {
  const pick = async () => {
    const res = await DocumentPicker.getDocumentAsync({ multiple: true });
    if (!res.canceled) onFiles?.(res.assets);
  };
  return (
    <Pressable accessibilityRole="button" onPress={variant === "file" ? pick : onPress}
      style={{ width: 262, height: 140, borderRadius: 12, borderWidth: 1, borderColor: "#27272A", backgroundColor: "#181715",
        alignItems: "center", justifyContent: "center", gap: 16, paddingHorizontal: 24 }}>
      <Tile>{icon}</Tile>
      <Text style={{ color: "#A1A1AA", fontSize: 13, lineHeight: 18, textAlign: "center" }}>{children}</Text>
    </Pressable>
  );
}
// Native apps have no drag and drop between apps, so the file variant opens the system picker.
