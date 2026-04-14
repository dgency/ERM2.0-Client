"use client";
import { useEffect, useRef, useState } from "react";

export default function LazyBgVideo({
  video_url,
  poster,
  loadLazy = false,
  isRounded = false,
}) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(loadLazy);

  useEffect(() => {
    if (loadLazy) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px" },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
      videoRef.current.play();
    }

    return () => observer.disconnect();
  }, [loadLazy]);

  return (
    <div className="lazyload-video relative w-full h-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={
          poster ? poster : "/escape-room-marketer-default-video-poster.webp"
        }
        preload={"metadata"}
        controlsList="nofullscreen"
        className={
          isRounded
            ? "w-full h-full object-cover rounded-2xl"
            : "w-full h-full object-cover"
        }
      >
        {/*============================================================= load video when the view port enter  */}
        {shouldLoad && <source src={video_url} type="video/webm" />}
      </video>
    </div>
  );
}
