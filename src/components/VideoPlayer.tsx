"use client";

import { memo, useState, useEffect } from "react";

const VideoPlayer = memo(() => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {!isMobile && (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero_bg.png"
          className="absolute top-[20%] w-full h-auto object-contain z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
            type="video/mp4"
          />
        </video>
      )}

      {isMobile && (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero_bg_mobile.png"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://res.cloudinary.com/djn647nlz/video/upload/v1774283828/hero_video_1_e96vke.mp4"
            type="video/mp4"
          />
        </video>
      )}

      <div className="absolute bottom-0 inset-x-0 h-80 lg:h-96 bg-gradient-to-t from-[#000000] to-transparent z-10 pointer-events-none" />
    </>
  );
});

VideoPlayer.displayName = "VideoPlayer";
export default VideoPlayer;
