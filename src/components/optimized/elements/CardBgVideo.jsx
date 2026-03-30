"use client";
import { useEffect, useRef } from "react";
export default function CardBgVideo({ video_url, poster }) {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <div className="absolute inset-0 z-10 card-video-bg apl">
      <div className={` w-full h-full relative`}>
        <video
          ref={videoRef}
          src={video_url}
          autoPlay
          loop
          muted
          poster={poster && process.env.NEXT_PUBLIC_API_URL + poster}
          playsInline
          controlsList="nofullscreen"
          preload="metadata"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="rounded-2xl absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
