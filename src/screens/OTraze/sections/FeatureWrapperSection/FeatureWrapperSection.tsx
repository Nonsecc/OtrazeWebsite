import React from "react";

export const FeatureWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col lg:flex-row w-full items-start gap-8 lg:gap-[126px] px-4 lg:px-[102px] py-12 relative -mt-[32rem] ml-32">
      <div className="flex flex-col w-full lg:w-[588px] items-start gap-[13px] pt-0 pb-8 px-0 relative">
        <div className="flex flex-col w-full items-start relative">
          <div className="relative w-fit [font-family:'Roboto',Helvetica] font-semibold text-[#676b89] text-xl tracking-[0.50px] leading-[30px] whitespace-nowrap">
            YOU KNOW,
          </div>

          <div className="inline-flex flex-col w-full items-start gap-0.5 pt-[22px] pb-[21px] relative">
            <div className="relative w-fit [font-family:'Roboto',Helvetica] font-bold text-[#20294c] text-4xl lg:text-[100px] tracking-[-3.00px] leading-tight lg:leading-[85px]">
              It&apos;s just your
            </div>

            <div className="relative w-fit [font-family:'Roboto',Helvetica] font-bold text-[#20294c] text-4xl lg:text-[100px] tracking-[-3.00px] leading-tight lg:leading-[85px]">
              infrastructure,
            </div>

            <div className="relative w-fit [font-family:'Roboto',Helvetica] font-bold text-[#20294c] text-4xl lg:text-[100px] tracking-[-3.00px] leading-tight lg:leading-[85px]">
              after-all.
            </div>
          </div>
        </div>

        <div className="flex w-full items-start py-0 relative">
          <div className="relative w-full [font-family:'Roboto',Helvetica] font-normal text-[#20294c] text-lg lg:text-2xl tracking-[0] leading-relaxed lg:leading-9">
            This isn&#39;t about theoretical risk – it&apos;s about your
            systems. Your turbines, your water pumps, your public transit, your
            infrastructure. OTraze helps you protect them – with insight, not
            noise.
            <br />
            No security fluff. No vendor lock-in. Just real help, where it
            matters most.
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 w-full lg:w-[467px] h-auto lg:h-[715px] ml-16">
        <img
          className="w-full h-full object-contain"
          alt="PLC image"
          src="/plc.png"
        />
      </div>
    </section>
  );
};
