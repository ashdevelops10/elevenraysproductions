# workbysuri

## Media

All media (hero background, portfolio galleries, brand logos) is served as
static files from `public/`, rendered through `next/image` via the local
`OptimizedImage` wrapper. Next.js serves AVIF/WebP variants at controlled
quality levels automatically — no external storage or environment variables
are required.
