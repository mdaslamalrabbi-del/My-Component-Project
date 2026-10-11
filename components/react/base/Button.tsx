import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"; // swap for your icon set

// 24, 32 and 40 come from the Figma component. 36 and 48 are proposed, not in Figma.
const SIZES = {
  24: { h: 24, font: 12, radius: 6, gap: 4, icon: 16, pad: { text: 12, one: 10, both: 4, only: 4 } },
  32: { h: 32, font: 14, radius: 8, gap: 6, icon: 16, pad: { text: 12, one: 8, both: 8, only: 8 } },
  36: { h: 36, font: 14, radius: 8, gap: 8, icon: 18, pad: { text: 14, one: 12, both: 8, only: 9 } },
  40: { h: 40, font: 14, radius: 8, gap: 8, icon: 20, pad: { text: 16, one: 14, both: 8, only: 10 } },
  48: { h: 48, font: 16, radius: 8, gap: 8, icon: 24, pad: { text: 20, one: 16, both: 10, only: 12 } },
} as const;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: keyof typeof SIZES;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconOnly?: React.ReactNode; // square icon button, add an aria-label
};

export function Button({ size = 40, iconLeft, iconRight, iconOnly, children, className = "", style, ...props }: Props) {
  const s = SIZES[size];
  const kind = iconOnly ? "only" : iconLeft && iconRight ? "both" : iconLeft || iconRight ? "one" : "text";
  return (
    <button
      className={`inline-flex items-center justify-center font-medium text-[#D2CFD9]
        ${size === 24 ? "bg-[#27272A]" : "bg-[#181715]"}
        hover:bg-[#27272A] hover:shadow-[inset_0_0_0_1px_#333137]
        active:bg-[#27272A] active:text-white
        disabled:bg-[#181715] disabled:text-[#6C6A64] disabled:shadow-none disabled:cursor-not-allowed
        ${kind === "only" ? "shadow-[inset_0_0_0_1px_#27272A]" : ""} ${className}`}
      style={{
        height: s.h,
        width: kind === "only" ? s.h : undefined,
        padding: `0 ${s.pad[kind]}px`,
        gap: s.gap,
        fontSize: s.font,
        borderRadius: kind === "only" ? 8 : s.radius,
        ...style,
      }}
      {...props}
    >
      {iconOnly ?? <>{iconLeft}{children}{iconRight}</>}
    </button>
  );
}
