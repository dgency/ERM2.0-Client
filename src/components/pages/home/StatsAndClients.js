import React from "react";
import Container from "@/components/ui/Container";
import UnderlineHeadline from "@/components/ui/UnderlineHeadline";
import AnimatedLogoGrid from "./AnimatedLogoGrid";
import ToolsCard from "./ToolsCard";

function StatsAndClients({ data, about }) {
  return (
    <div className="bg-secondary-900 py-25 md:py-35">
      <Container>
        <div className="max-w-315 mb-10 xs:mb-15 lg:mb-37.5">
          <p className="highlighted_text">{data?.Eyebrow_headline}</p>
          <UnderlineHeadline text={data?.headline} text_light={true} />
        </div>
        <div
          className={`${about ? "" : "grid grid-cols-1 lg:grid-cols-3 gap-6"}`}
        >
          <div className="lg:col-start-1 lg:col-end-4 2xl:col-end-3">
            <div
              className={`${about ? "max-w-325 mx-auto" : ""} grid sm:grid-cols-2 sm:justify-items-start gap-y-10 sm:gap-y-25`}
            >
              {data?.statistics.map((stat, i) => (
                <div className="group" key={i}>
                  <div className="relative mb-2 sm:mb-0">
                    <p className="text-[48px] sm:text-[74px] lg:text-[96px] font-midum text-neutral-50">
                      {stat?.title}
                    </p>
                  
                  </div>
                  <span className="text-[12px] sm:text-[14px] lg:text-[16px] px-6.5 py-2.5 text-neutral-400 group-hover:text-neutral-100 duration-300 rounded-[10px] bg-secondary-800">
                    {stat?.short_description}
                  </span>
                </div>
              ))}
            </div>
            {!about && (
              <div className=" 2xl:hidden  mt-25 grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                {data?.cards.map((card, i) => (
                  <ToolsCard key={i} data={card} />
                ))}
              </div>
            )}
            <div className="mt-25 lg:mt-34">
              <p className="text-[24px] sm:text-[36px] font-bold text-neutral-50 mb-12.5">
                Trusted by Escape Room Companies Globally
              </p>
              <div className="relative ">
                <AnimatedLogoGrid logos={data?.logos} speed={0.10} />
                <div className="w-full h-12.5 bg-linear-to-t from-secondary-900 to-transparent absolute bottom-0 left-0"></div>
                <div className="w-full h-12.5 bg-linear-to-b from-secondary-900 to-transparent absolute top-0 left-0"></div>
              </div>
            </div>
          </div>
          {!about && (
            <div className="hidden 2xl:block space-y-7.5 col-start-3 col-end-4">
              {data?.cards.map((card, i) => (
                <ToolsCard key={i} data={card} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default StatsAndClients;
