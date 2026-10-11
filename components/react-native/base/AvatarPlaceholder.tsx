import { Image } from "react-native";

export const AvatarPlaceholder = ({ uri, size = 46 }) => (
  <Image
    source={{ uri }}
    style={{ width: size, height: size, borderRadius: size / 2 }}
    resizeMode="cover"
  />
);
