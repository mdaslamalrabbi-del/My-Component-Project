import Image from "next/image";

type Props = { src: string; alt: string; size?: number };

export function AvatarPlaceholder({ src, alt, size = 46 }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full object-cover"
    />
  );
}
