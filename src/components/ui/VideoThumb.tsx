import Image from "next/image";

type Props = {
  videoId: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function VideoThumb({
  videoId,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: Props) {
  return (
    <Image
      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}
