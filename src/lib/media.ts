export type VideoSource = {
  src: string;
  type?: string;
  media?: string;
};

const blobBaseUrl = process.env.NEXT_PUBLIC_VERCEL_BLOB_BASE_URL?.replace(
  /\/+$/,
  ""
);

export function blobAsset(path: string, fallback: string) {
  if (/^https?:\/\//.test(path)) return path;
  if (!blobBaseUrl) return fallback;

  return `${blobBaseUrl}/${path.replace(/^\/+/, "")}`;
}

export const HERO_VIDEO_POSTER =
  process.env.NEXT_PUBLIC_HERO_VIDEO_POSTER_URL || undefined;

export const HERO_VIDEO_SOURCES: VideoSource[] = [
  ...(process.env.NEXT_PUBLIC_HERO_VIDEO_MOBILE_URL
    ? [
        {
          src: process.env.NEXT_PUBLIC_HERO_VIDEO_MOBILE_URL,
          type: "video/mp4",
          media: "(max-width: 767px)",
        },
      ]
    : []),
  ...(process.env.NEXT_PUBLIC_HERO_VIDEO_WEBM_URL
    ? [
        {
          src: process.env.NEXT_PUBLIC_HERO_VIDEO_WEBM_URL,
          type: "video/webm",
        },
      ]
    : []),
  {
    src:
      process.env.NEXT_PUBLIC_HERO_VIDEO_URL ||
      "https://rqtwrhwx5gcwgfdq.public.blob.vercel-storage.com/C0042.MP4",
    type: "video/mp4",
  },
];

export const CONTACT_VIDEO_SOURCES: VideoSource[] = [
  {
    src:
      process.env.NEXT_PUBLIC_CONTACT_VIDEO_URL ||
      "https://rqtwrhwx5gcwgfdq.public.blob.vercel-storage.com/C0060.MP4",
    type: "video/mp4",
  },
];