"use client";

import { useEffect, useRef, memo } from "react";
import Hls from "hls.js";

const VideoPlayer = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = "https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-10 w-full h-screen object-cover scale-[1.2] origin-left ml-[200px]"
      />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#070612] to-transparent z-10 pointer-events-none" />
    </>
  );
});

VideoPlayer.displayName = "VideoPlayer";
export default VideoPlayer;
