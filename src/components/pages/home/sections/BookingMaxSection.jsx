import UnderlineHeadline from "@/components/ui/UnderlineHeadline";
import BookingMaxFullVideoCard from "../BookingMaxFullVideoCard";
import BookingMaxVideoCard from "../BookingMaxVideoCard";
import BookingMaxServiceCarousel from "../BookingMaxServiceCarousel";

export default function BookingMaxSection({ bookingmaxData,serviceCarouselData }) {
  // Split by the apostrophe
  const [before, highlightedWithQuotes] = bookingmaxData
    ? bookingmaxData?.headline?.split("'")
    : [];

  // Remove extra quotes if any
  const highlighted = highlightedWithQuotes?.replace(/'/g, "");

  return (
    <section className="booking-max-section min-h-screen overflow-x-hidden bg-[url('/pages/home/bookingMaxBg.png')] bg-repeat bg-size-[240px_240px] pb-35 lg:pb-35">
      <div className="relative py-25 md:py-35">
        {/*======================================================================================================= Glow/Gradient Backgrounds */}
        <div className="glow_background absolute -left-40 top-75 w-75 h-75 rounded-full blur-[120px] bg-primary-500 "></div>
        <div className="glow_background absolute z-10 -right-40 bottom-0 w-75 h-75 rounded-full blur-[120px] bg-primary-500 "></div>
        {/*=============================================================================================================== =================Video section container =====*/}
        <div className="section-container px-2.5 max-w-385 mx-auto ">
          {/*=====================================================================================================section head */}
          <div className="section-head px-2.5 flex flex-col items-center mb-12.5 md:mb-20 relative z-10">
            <h1 className="text-[clamp(50px,15.6vw,160px)]  font-normal text-neutral-50 mb-1">
              {before}
              {highlighted && (
                <span className="text-primary-500 font-bold">
                  {highlighted}
                </span>
              )}
            </h1>
            <UnderlineHeadline
              text={bookingmaxData?.description}
              text_light={true}
              text_center={true}
            />
          </div>
          {/*======================================================================================================booking max full screen video */}
          <div className="booking-max-full-screen-video-card">
            <BookingMaxFullVideoCard cardData={bookingmaxData?.long_card} />
          </div>
          {/*======================================================================================================booking max video cards */}
          <div className="booking-max-video-card relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 md:mt-20 ">
            {bookingmaxData?.other_card?.map((card, index) => (
              <div key={index}>
                <BookingMaxVideoCard cardData={card} cardIndex={index + 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*=============================================================================================================== =================Service Carousel section =====*/}
      <div className="booking-max-service-section relative z-20">
        <BookingMaxServiceCarousel serviceCarouselData={serviceCarouselData} />
      </div>
    </section>
  );
}
