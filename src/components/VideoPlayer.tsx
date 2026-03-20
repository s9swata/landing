"use client";

import { memo } from "react";

const VideoPlayer = memo(() => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute top-[20%] w-full h-auto object-contain z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
      </video>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#070612] to-transparent z-10 pointer-events-none" />
    </>
  );
});

VideoPlayer.displayName = "VideoPlayer";
export default VideoPlayer;
