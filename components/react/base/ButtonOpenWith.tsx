import { ChevronDown } from "lucide-react"; // swap for your icon set

const SIZES = {
  large: { h: 32, r: 8, icon: 16 },
  default: { h: 24, r: 6, icon: 12 },
} as const;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  size?: keyof typeof SIZES;
  showLeft?: boolean;
  showRight?: boolean;
};

export function ButtonOpenWith({ text, size = "large", showLeft = true, showRight = true, ...props }: Props) {
  const s = SIZES[size];
  return (
    <button
      className="inline-flex items-center gap-2 bg-[#272729] px-3 text-xs font-medium text-white"
      style={{ height: s.h, borderRadius: s.r }}
      {...props}
    >
      {showLeft && <ChevronDown size={s.icon} color="#D2CFD9" strokeWidth={1.25} />}
      <span>{text}</span>
      {showRight && <ChevronDown size={s.icon} color="#D2CFD9" strokeWidth={1.25} />}
    </button>
  );
}
