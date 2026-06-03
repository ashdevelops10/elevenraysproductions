import Image, { type ImageProps } from "next/image";

const DEFAULT_IMAGE_QUALITY = 92;

export default function OptimizedImage({
  alt,
  quality = DEFAULT_IMAGE_QUALITY,
  ...props
}: ImageProps) {
  return <Image {...props} alt={alt} quality={quality} />;
}