const themes = {
  dark: "bg-[#272729] text-white",
  light: "bg-[#F7F5FA] text-[#121113]",
};

type Props = { initial: string; theme?: keyof typeof themes };

export function AvatarInitial({ initial, theme = "dark" }: Props) {
  return (
    <span
      aria-hidden
      className={`inline-flex size-8 items-center justify-center rounded-full
        text-xs font-semibold leading-4 ${themes[theme]}`}
    >
      {initial.slice(0, 1).toUpperCase()}
    </span>
  );
}
