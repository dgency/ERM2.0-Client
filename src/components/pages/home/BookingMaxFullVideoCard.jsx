"use client";

import { useState } from "react";
import LazyBgVideo from "@/components/optimized/elements/LazyBgVideo";
import VideoPopUp from "@/components/global/VideoPopUp";
import FillButton from "@/components/ui/buttons/FillButton";
import StrokeButton from "@/components/ui/buttons/StrokeButton";

export default function BookingMaxFullVideoCard({ cardData, isStroke = true }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="bkm-l relative max-w-full rounded-2xl mx-auto aspect-300/400 xs:aspect-398/295  md:aspect-1540/700 bg-[rgba(22,26,30,0.90)]  ">
      <div className="booking-max-card-video-bg absolute inset-0 ">
        <LazyBgVideo
          video_url={cardData?.intro_video_url}
          poster={
            cardData?.poster
              ? process.env.NEXT_PUBLIC_API_URL + cardData?.poster
              : "/pages/home/booking-max-intro-poster.jpg"
          }
          isRounded={true}
        />
      </div>
      <div className="absolute shadow-[0px_0px_10px_#ff492c60] h-[100.5%] w-full z-10 bg-linear-to-t from-black to-transparent rounded-2xl "></div>

      <div className="flex items-end h-full pb-7.5 md:pb-12.5 px-5 md:px-8 relative z-20">
        <div
          className={`lg:flex gap-6 items-end w-full ${cardData?.title ? "justify-between " : "justify-end"}`}
        >
          {cardData?.title && (
            <div className="max-w-175">
              <span className="block text-[20px] sm:text-[24px] text-neutral-50 font-semibold mb-2">
                {cardData?.title}
              </span>
              <span className="block text-[14px] sm:text-[18px] text-neutral-300">
                {cardData?.short_description}
              </span>
            </div>
          )}
          <div className="flex items-center md:flex-none gap-3 mt-5 lg:mt-0">
            {isStroke && (
              <StrokeButton
                text="Learn More"
                url="/bookingmax"
                right_icon="/icons/Right_Arrow.svg"
              />
            )}
            <FillButton
              text="Watch Video"
              handleClick={handleOpen}
              right_icon="/icons/play.svg"
            />
          </div>
        </div>
      </div>
      {/* Fullscreen Overlay */}
      {open && (
        <VideoPopUp
          video_url={cardData?.video_url}
          open={open}
          setOpen={setOpen}
        />
      )}
    </div>
  );
}
