type Props = { children: React.ReactNode; tone?: "accent" | "normal" };

export function InlineCode({ children, tone = "accent" }: Props) {
  return (
    <code
      className={`inline-flex h-4 items-center rounded bg-[#272729] px-1 font-sans text-xs leading-4
        shadow-[inset_0_0_0_1px_#272729] ${tone === "accent" ? "text-[#FF9492]" : "text-[#D2CFD9]"}`}
    >
      {children}
    </code>
  );
}
