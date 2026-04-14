"use client";
import LazyBgVideo from "@/components/optimized/elements/LazyBgVideo";
export default function BookingMaxVideoCard({cardData,cardIndex}) {
  return (
    <div className="group relative rounded-2xl px-5 md:px-8 pb-11.25  flex flex-col justify-end h-131.5 lg:h-173.75">
      <span className="highlighted_text mb-1 absolute z-20 top-7.5 md:top-12">
        {cardIndex}
        {cardData?.tag} 
      </span>
      <div className="relative z-20">
        <h3 className="text-neutral-50 font-semibold text-[20px] md:text-[24px] mb-2.5">
          {cardData?.title}
        </h3>
        <p className="text-[14px] md:text-[16px] text-neutral-300 leading-[1.4]">
          {cardData?.short_description}
        </p>
      </div>
      <div className="booking-max-bg-video absolute inset-0 z-0 ">
        {/* ========= <LazyLoadingVideo video_url={card?.video_url} />========================= <CardBgVideo video_url={card?.video_url} />+++++*/}
        <LazyBgVideo video_url={cardData?.video_url} poster={cardData?.poster? process.env.NEXT_PUBLIC_API_URL + cardData?.poster:"/pages/home/booking-max-service-"+cardIndex+".jpg"} isRounded={true} />
      </div>
      <div className="absolute shadow-[0px_0px_10px_#ff492c50] top-0 left-0 h-[100.2%] w-full z-10 bg-linear-to-t from-[#000000] to-[#00000049] group-hover:to-transparent duration-500 rounded-2xl "></div>
    </div>
  );
}
