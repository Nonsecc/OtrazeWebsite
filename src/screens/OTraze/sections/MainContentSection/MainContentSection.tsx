import React from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-8">
        <div className="relative w-[161px] h-[142px] overflow-hidden">
          <div className="relative w-[178px] h-[142px]">
            <img
              className="absolute w-[158px] h-[89px] top-[53px] left-5"
              alt="Vector"
              src="/vector-450.svg"
            />

            <img
              className="absolute w-[113px] h-[89px] top-[53px] left-[27px]"
              alt="Intersect"
              src="/intersect-2.svg"
            />

            <img
              className="absolute w-[125px] h-[89px] top-0 left-0"
              alt="Group"
              src="/group-213.png"
            />

            <img
              className="absolute w-[33px] h-[29px] top-5 left-[72px]"
              alt="Vector"
              src="/vector-452.svg"
            />

            <img
              className="absolute w-14 h-[53px] top-[83px] left-3.5"
              alt="Vector"
              src="/vector-633.svg"
            />

            <img
              className="absolute w-5 h-[42px] top-[83px] left-8"
              alt="Intersect"
              src="/intersect-3.svg"
            />

            <div className="absolute w-[31px] h-[30px] top-[89px] left-[63px] bg-[#1883e5] rotate-[57.09deg]" />

            <div className="absolute w-[39px] h-[39px] top-[60px] left-[100px] bg-[#ff766d] rounded-[19.75px/19.64px]" />

            <img
              className="absolute w-[30px] h-[29px] top-[71px] left-[100px]"
              alt="Intersect"
              src="/intersect.svg"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 mb-6">
        <h1 className="[font-family:'Roboto',Helvetica] font-bold text-[#20294c] text-[64px] text-center tracking-[-1.92px] leading-[58px] max-w-[788px]">
          More than a MAC address <br />
          in a spreadsheet.
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-2xl tracking-[0] leading-9 text-center">
          Not just the numbers – but the risk story behind them.
        </p>
      </div>
    </section>
  );
};
