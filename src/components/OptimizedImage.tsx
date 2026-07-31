import Image, { type ImageProps } from "next/image";

// Images are served unoptimized (see next.config.ts) — every file is
// already a pre-compressed WebP, so there's no server-side re-encoding
// for a `quality` prop to affect.
export default function OptimizedImage({ alt, ...props }: ImageProps) {
  return <Image {...props} alt={alt} />;
}