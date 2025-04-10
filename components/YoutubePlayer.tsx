"use client"

import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import YouTube from "react-youtube";

export interface YouTubePlayerRef {
  skipTo: (time: number) => void;
}

const YoutubePlayer = forwardRef<YouTubePlayerRef, { videoId: string }>(({ videoId }, ref) => {
  const playerRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useImperativeHandle(ref, () => ({
    skipTo: (time: number) => {
      if (playerRef.current?.internalPlayer) {
        playerRef.current.internalPlayer.seekTo(time);
      }
    },
  }));

  return (
    <div>
      {isLoading && (
        <img
          src={`https://i.ytimg.com/vi/${videoId}/sddefault.jpg`}
          alt="Video thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <YouTube
        ref={playerRef}
        videoId={videoId}
        className="w-full aspect-video"
        onReady={() => setIsLoading(false)}
        opts={{
          width: "100%",
          height: "100%",
          host: "https://www.youtube-nocookie.com",
          playerVars: {
            autoplay: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            origin: window.location.origin,
            enablejsapi: 1,
            widget_referrer: window.location.href,
          },
        }}
      />
    </div>
  );
});

YoutubePlayer.displayName = "YoutubePlayer";
export default YoutubePlayer;
