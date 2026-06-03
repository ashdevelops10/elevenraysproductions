import { forwardRef, type VideoHTMLAttributes } from "react";
import type { VideoSource } from "@/lib/media";

type Props = Omit<VideoHTMLAttributes<HTMLVideoElement>, "children" | "src"> & {
  sources: VideoSource[];
};

const OptimizedVideo = forwardRef<HTMLVideoElement, Props>(
  ({ sources, preload = "metadata", playsInline = true, ...props }, ref) => {
    return (
      <video ref={ref} preload={preload} playsInline={playsInline} {...props}>
        {sources.map((source) => (
          <source
            key={`${source.media ?? "default"}-${source.src}`}
            src={source.src}
            type={source.type}
            media={source.media}
          />
        ))}
      </video>
    );
  }
);

OptimizedVideo.displayName = "OptimizedVideo";

export default OptimizedVideo;