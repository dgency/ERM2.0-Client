import Image from "next/image";
import HeroBgVideo from "@/components/optimized/elements/HeroBgVideo";
import AnimatedText from "../hero/AnimatedText";
import HeroButton from "@/components/ui/buttons/HeroButton";

export default function HomeHeroSection({ data }) {
  return (
    <section className="home-hero-section relative  bg-secondary-950 ">
      {/* =========================================================================================background video autoplay */}
      <div className="hero-bg-video-container absolute inset-0 ">
        <HeroBgVideo video_url={data?.video_url} />
        <div className="absolute inset-0 z-10 bg-[#000000c6] video-overlay"></div>
      </div>
      {/* =========================================================================================background video autoplay end*/}
      {/* =====================================================================================Hero section text Content */}
      <div className="hero-main-content relative z-20 sm:min-h-[96vh] flex flex-col justify-center items-center ">
        <div className="max-w-310 py-37 sm:py-32 px-2.5 sm:px-4 ">
          <div className="Hero-text-content text-center">
            <h1 className="highlighted_text mb-3">{data?.Eyebrow_headline}</h1>
            <p className=" text-[clamp(20px,9vw,34px)] xs:text-[36px] sm:text-[54px] md:text-[64px] xl:text-[90px] font-extrabold text-neutral-50 leading-tight  ">
              {data?.title_first_line}
              <br />
              <span className="relative inline-block h-[1.4em] sm:h-[1.4em] w-full ">
                <AnimatedText sentences={data?.title_second_line} />
              </span>
            </p>
            <p className="max-w-220 mx-auto text-base md:text-[20px] text-neutral-300 sm:-mt-2.5 mb-12.5 sm:mb-15">
              {data?.description}
            </p>

            <div className="flex justify-center mb-12.5 sm:mb-0">
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
      </div>
      {/* =====================================================================================Hero section text Content end */}
      {/* ============================================================================================================Partner Logos */}
      <div className="hero-partners-logo max-w-100 absolute left-0 right-0 bottom-12 mx-auto z-30 ">
        <div className=" flex justify-center gap-5 xxs:gap-8 md:gap-16 ">
          {data?.logos.map((logo, index) => (
            <div
              key={index}
              className="h-6.25 xs:h-7.5 sm:h-8.75 2xl:h-11.25 w-1/3 relative"
            >
              {/*<Image
                src={logo ? process.env.NEXT_PUBLIC_API_URL + logo?.url : ""}
                alt={`Partner Logo ${index}`}
                height={45}
                width={100}
                style={{
                  width: "auto",
                  height: "100%",
                }}
                className="object-contain"
                priority={true}
              />*/}
              <Image
                src={logo ? process.env.NEXT_PUBLIC_API_URL + logo.url : ""}
                alt={`Partner Logo ${index}`}
                fill
                sizes="(max-width: 768px) 33vw, 20vw" // Helps Next.js serve the right size
                className="object-contain" // Keeps the logo's aspect ratio inside the box
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>
      {/* ========================================================================================================Partner Logos end */}
      {/* =====================================================================================Hero section Content end */}
    </section>
  );
}
