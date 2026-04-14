import React from "react";
import Link from "next/link";
import LazyBgVideo from "../elements/LazyBgVideo";

export default function ServiceBgVideoCard({ serviceData,poster }) {
  return (
    <Link
      href={`/${serviceData?.slug}`}
      className="service_card drop-shadow-[0px_0px_10px_#ff492c] w-full max-w-full mx-auto h-112.5 md:h-[inherit] md:aspect-1316/900 lg:aspect-1316/700 rounded-[10px] lg:rounded-[0.9rem] overflow-hidden relative flex flex-col justify-end px-4 md:px-7.5 xl:px-15 py-6 xl:py-12.5 "
    >
      <div className="relative z-20">
        <p className="text-neutral-50 text-[20px] xl:text-[32px] font-medium leading-[1.3] pb-2.5">
          {serviceData?.hero?.hero_text?.headline}
        </p>
        <p className="text-neutral-300 text-[14px] xl:text-[20px] pb-6.25 leading-[1.3] max-w-225">
          {serviceData?.hero?.hero_text?.description}
        </p>
        <p className="group cursor-pointer text-primary-600 text-[16px] font-medium flex items-center gap-1.25">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="8"
            viewBox="0 0 5 8"
            fill="none"
            className="mt-[0.5 transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:scale-110"
          >
            <path
              d="M0.689453 1.07009L0.689453 4.41199L0.689453 7.42132C0.689453 7.93629 1.3117 8.19377 1.67647 7.829L4.45513 5.05033C4.90036 4.6051 4.90036 3.88093 4.45513 3.4357L3.39838 2.37896L1.67647 0.657045C1.3117 0.297644 0.689453 0.555126 0.689453 1.07009Z"
              fill="#E64027"
            />
          </svg>
        </p>
      </div>

      <div className="absolute inset-0 z-10 left-px">
        <LazyBgVideo video_url={serviceData?.hero?.background_video_url} poster={poster} isRounded={true}  />
      </div>
    </Link>
  );
}
