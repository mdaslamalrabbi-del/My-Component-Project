export function Avatar({ size = 46, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block rounded-full bg-black ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
