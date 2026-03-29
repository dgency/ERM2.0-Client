import Image from "next/image";
import HeroBgVideo from "@/components/optimized/elements/HeroBgVideo";
import AnimatedText from "../hero/AnimatedText";
import HeroButton from "@/components/ui/buttons/HeroButton";

export default function HomeHeroSection({ data }) {
  return (
    <section className="relative w-full sm:h-[96vh] bg-secondary-950 home-hero-section">
      {/* =========================================================================================background video autoplay */}
      <div className="absolute inset-0 z-10 hero-bg-video-wrapper">
        <HeroBgVideo video_url={data?.video_url} />
        <div className="absolute inset-0 z-20 bg-[#000000c6] video-overlay"></div>
      </div>
      {/* =========================================================================================background video autoplay end*/}
      {/* =====================================================================================Hero section Content */}
      <div className="relative z-30 h-full py-[150px] sm:py-0 px-2.5 sm:px-4 text-center">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 items-center h-full ">
          <div className="Hero-content">
            <h1 className="highlighted_text mb-3">{data?.Eyebrow_headline}</h1>
            <p className=" text-[clamp(20px,9vw,34px)] xs:text-[36px] sm:text-[54px] md:text-[64px] xl:text-[90px] font-extrabold text-neutral-50 leading-tight  ">
              {data?.title_first_line}
              <br />
              <span className="relative inline-block h-[1.4em] sm:h-[1.4em] w-full ">
                <AnimatedText sentences={data?.title_second_line} />
              </span>
            </p>
            <p className="max-w-[880px] mx-auto text-base md:text-[20px] text-neutral-300 sm:-mt-2.5 mb-[50px] sm:mb-[60px]">
              {data?.description}
            </p>

            <div className="flex justify-center mb-[50px] sm:mb-0">
              <HeroButton
                text={
                  data?.button_text
                    ? data?.button_text
                    : "UNLOCK MARKETING PLAN"
                }
              />
            </div>
          </div>
        </div>
        {/* =============================================Partner Logos */}
        <div className="flex justify-center">
          <div className="max-w-[940px] mx-auto flex gap-5 xxs:gap-8 md:gap-16 absolute bottom-10">
            {data?.logos.map((logo, i) => (
              <Image
                key={i}
                src={logo ? process.env.NEXT_PUBLIC_API_URL + logo?.url : ""}
                alt={`Partner Logo ${i}`}
                height={45}
                width={100}
                className="h-[25px] xs:h-[30px] sm:h-[35px] 2xl:h-[45px] w-auto"
                priority={true}
              />
            ))}
          </div>
        </div>
        {/* =============================================Partner Logos end */}
      </div>
      {/* =====================================================================================Hero section Content end */}
    </section>
  );
}
