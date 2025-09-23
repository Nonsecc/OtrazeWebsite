import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const FeatureGridSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <div className="w-96 h-px border-t border-white mx-auto" />

      <div className="max-w-[588px] mx-auto relative mt-32">
        <div className="relative w-full aspect-square -mt-20 mb-20">
          {/* Linke kurze Linie oben */}
          <div className="absolute top-32 -left-16 w-24 h-px bg-[#c7cbdb]" />
          {/* Rechte kurze Linie oben */}
          <div className="absolute top-32 -right-16 w-24 h-px bg-[#c7cbdb]" />
          
          <img
            className="w-full h-full object-cover mt-16 relative z-10 bg-white"
            alt="Chatgpt image"
            src="/chatgpt-image-15--sept--2025--10-18-10-1.png"
          />
        </div>

        <div className="px-1 pb-[755px] relative">
          {/* Linke vertikale Linie neben dem Text */}
          <div className="absolute top-[33px] left-0 w-px h-[800px] bg-gradient-to-b from-[#c7cbdb] via-[#c7cbdb] to-transparent" style={{background: 'linear-gradient(to bottom, #c7cbdb 0%, #c7cbdb 80%, transparent 100%)'}} />
          {/* Rechte vertikale Linie neben dem Text */}
          <div className="absolute top-[33px] right-0 w-px h-[800px] bg-gradient-to-b from-[#c7cbdb] via-[#c7cbdb] to-transparent" style={{background: 'linear-gradient(to bottom, #c7cbdb 0%, #c7cbdb 80%, transparent 100%)'}} />
          
          <div className="flex flex-col gap-[23px]">
            <div className="flex flex-col pt-[33px] pr-[11.69px]">
              <div className="[font-family:'Roboto',Helvetica] font-semibold text-[#676b89] text-xl tracking-[0.50px] leading-[30px] mb-[22px]">
                OUR GOAL
              </div>

              <div className="flex flex-col gap-0.5 mb-[21px]">
                <h2 className="[font-family:'Roboto',Helvetica] font-bold text-[#20294c] text-[100px] tracking-[-3.00px] leading-[85px]">
                  To separate
                </h2>
                <h2 className="[font-family:'Roboto',Helvetica] font-bold text-[#20294c] text-[100px] tracking-[-3.00px] leading-[85px]">
                  complexity from
                </h2>
                <h2 className="[font-family:'Roboto',Helvetica] font-bold text-[#20294c] text-[100px] tracking-[-3.00px] leading-[85px]">
                  visibility
                </h2>
              </div>
            </div>

            <div className="pr-8">
              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#20294c] text-[23px] leading-9">
                OT networks are complex: legacy systems, mixed protocols,
                undocumented assets.
                <br /> But that doesn&apos;t mean you should operate blind.
                <br />
                OTraze simplifies what matters – so even without a SOC or
                security team, you see what counts.
                <br /> Engineered for clarity. Designed for operators.
              </p>
            </div>

            <Button 
              className="inline-flex items-center gap-[12.23px] px-6 py-4 bg-[#459af8] hover:bg-[#3a8ae6] rounded-full h-auto w-fit"
              onClick={() => {
                window.location.href = "/manifesto";
              }}
            >
              <span className="[font-family:'Roboto',Helvetica] font-semibold text-white text-[17px] leading-[17px]">
                Read our manifesto
              </span>
              <ArrowRightIcon className="w-7 h-2.5" />
            </Button>
          </div>

          <div className="absolute w-[460px] h-px top-[650px] -left-[230px] border-t border-white -rotate-90" />
          <div className="absolute w-[440px] h-[101px] top-[777px] left-[148px] border-b border-[#c7cbdb]" />
        </div>
      </div>
    </section>
  );
};
