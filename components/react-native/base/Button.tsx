import { Pressable, Text } from "react-native";

// 24, 32 and 40 come from the Figma component. 36 and 48 are proposed, not in Figma.
const SIZES = {
  24: { h: 24, font: 12, radius: 6, gap: 4, pad: { text: 12, one: 10, both: 4, only: 4 } },
  32: { h: 32, font: 14, radius: 8, gap: 6, pad: { text: 12, one: 8, both: 8, only: 8 } },
  36: { h: 36, font: 14, radius: 8, gap: 8, pad: { text: 14, one: 12, both: 8, only: 9 } },
  40: { h: 40, font: 14, radius: 8, gap: 8, pad: { text: 16, one: 14, both: 8, only: 10 } },
  48: { h: 48, font: 16, radius: 8, gap: 8, pad: { text: 20, one: 16, both: 10, only: 12 } },
};

export function Button({ title, size = 40, iconLeft, iconRight, iconOnly, disabled, onPress }) {
  const s = SIZES[size];
  const kind = iconOnly ? "only" : iconLeft && iconRight ? "both" : iconLeft || iconRight ? "one" : "text";
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => ({
        height: s.h,
        width: kind === "only" ? s.h : undefined,
        paddingHorizontal: s.pad[kind],
        gap: s.gap,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: kind === "only" ? 8 : s.radius,
        borderWidth: 1,
        backgroundColor: disabled ? "#181715" : pressed || size === 24 ? "#27272A" : "#181715",
        borderColor: pressed && !disabled ? "#333137" : kind === "only" && !disabled ? "#27272A" : "transparent",
      })}
    >
      {({ pressed }) =>
        iconOnly ?? (
          <>
            {iconLeft}
            <Text style={{ fontSize: s.font, fontWeight: "500",
              color: disabled ? "#6C6A64" : pressed ? "#FFFFFF" : "#D2CFD9" }}>{title}</Text>
            {iconRight}
          </>
        )
      }
    </Pressable>
  );
}
