"use client";
import { useEffect, useRef } from "react";
export default function HeroBgVideo({ video_url, poster }) {
  const videoRef = useRef(null);
   useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <div className="hero-bg-video-box w-full h-full relative">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={
          poster
            ? process.env.NEXT_PUBLIC_API_URL + poster
            : "/pages/home/escape-room-marketer-hero-video-poster.jpg"
        }
        preload="auto"
        controlsList="nofullscreen"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video_url} type="video/webm" />
      </video>
    </div>
  );
}

/*
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
        className=" absolute inset-0 w-full h-full object-cover"
      />
*/
