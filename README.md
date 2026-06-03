# elevenraysproductions

## Media optimization

Images are rendered through `next/image` using the local `OptimizedImage`
wrapper. Remote images from Vercel Blob are allowed through `next.config.ts`,
and Next.js will serve AVIF/WebP variants at controlled quality levels.

For Vercel Blob-hosted video, set any of these public environment variables:

```bash
NEXT_PUBLIC_VERCEL_BLOB_BASE_URL="https://your-store.public.blob.vercel-storage.com"
NEXT_PUBLIC_HERO_VIDEO_URL="https://your-store.public.blob.vercel-storage.com/videos/BIRD.mp4"
NEXT_PUBLIC_HERO_VIDEO_MOBILE_URL="https://your-store.public.blob.vercel-storage.com/videos/BIRD-mobile.mp4"
NEXT_PUBLIC_HERO_VIDEO_WEBM_URL="https://your-store.public.blob.vercel-storage.com/videos/BIRD.webm"
NEXT_PUBLIC_HERO_VIDEO_POSTER_URL="https://your-store.public.blob.vercel-storage.com/videos/BIRD-poster.webp"
```

Only `NEXT_PUBLIC_HERO_VIDEO_URL` is required when using a direct Blob URL.
The mobile, WebM, and poster URLs are optional but recommended to reduce
bandwidth. If no Blob URL is configured, the hero falls back to
`/videos/BIRD.mp4`.