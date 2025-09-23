import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const categoryTags = [
  {
    icon: "/autorickshaw-svg.svg",
    label: "CRITICAL",
    width: "w-[163px]",
    top: "top-0",
    left: "left-0",
  },
  {
    icon: "/watering-can-svg.svg",
    label: "UNKNOWN",
    width: "w-[167px]",
    top: "top-0",
    left: "left-[175px]",
  },
  {
    icon: "/swiggy-svg.svg",
    label: "VULNERABLE",
    width: "w-[200px]",
    top: "top-0",
    left: "left-[354px]",
  },
  {
    icon: "/video-game-svg.svg",
    label: "FIELD",
    width: "w-[153px]",
    top: "top-[54px]",
    left: "left-0",
  },
  {
    icon: "/tooth-svg.svg",
    label: "GATEWAY",
    width: "w-[140px]",
    top: "top-[54px]",
    left: "left-[165px]",
  },
  {
    icon: "/tea-glass-svg.svg",
    label: "ISOLATED",
    width: "w-[200px]",
    top: "top-[54px]",
    left: "left-[317px]",
  },
  {
    icon: "/heart-svg.svg",
    label: "PERSONAL",
    width: "w-[153px]",
    top: "top-[108px]",
    left: "left-0",
  },
  {
    icon: "/sparkles-svg.svg",
    label: "GIFT",
    width: "w-[105px]",
    top: "top-[108px]",
    left: "left-[165px]",
  },
  {
    icon: null,
    label: "TWIN",
    width: "w-[109px]",
    top: "top-[108px]",
    left: "left-[282px]",
  },
  {
    icon: null,
    label: "UNCLASSIFIED",
    width: "w-[126px]",
    top: "top-[108px]",
    left: "left-[406px]",
  },
  {
    icon: "/paintbrush-svg.svg",
    label: "PERSONAL",
    width: "w-[153px]",
    top: "top-[162px]",
    left: "left-0",
  },
  {
    icon: "/medical-plus-svg.svg",
    label: "UNMANAGED",
    width: "w-[162px]",
    top: "top-[162px]",
    left: "left-[165px]",
  },
  {
    icon: "/shoes-svg.svg",
    label: "INTERNAL",
    width: "w-[156px]",
    top: "top-[162px]",
    left: "left-[339px]",
  },
  {
    icon: "/padlock-svg.svg",
    label: "PERSONAL",
    width: "w-[153px]",
    top: "top-[216px]",
    left: "left-0",
  },
  {
    icon: "/tickets-svg.svg",
    label: "EXTERNAL",
    width: "w-[198px]",
    top: "top-[216px]",
    left: "left-[165px]",
  },
  {
    icon: "/bread-loaf-svg.svg",
    label: "SCADA",
    width: "w-[167px]",
    top: "top-[216px]",
    left: "left-[375px]",
  },
  {
    icon: "/ethereum-svg.svg",
    label: "HMI",
    width: "w-[167px]",
    top: "top-[270px]",
    left: "left-0",
  },
  {
    icon: "/restaurant-svg.svg",
    label: "PROTOCOL",
    width: "w-[200px]",
    top: "top-[270px]",
    left: "left-[179px]",
  },
];

export const ActionGroupSection = (): JSX.Element => {
  return (
    <section id="features" className="w-full relative">
      <div className="flex w-full items-start gap-6 px-0 py-8 relative">
        <div className="flex flex-col w-1/2 items-start pl-0 pr-px py-0 relative border-r border-solid border-[#f0f1f5]">
          <div className="flex w-full items-center pl-[48.09px] pr-0 py-[18.08px] relative flex-[0_0_auto] z-[1]">
            <img
              className="relative max-w-full w-[638.91px]"
              alt="Merchant map svg"
              src="/merchant-map-svg.svg"
            />

            <Card className="flex flex-col w-[243px] items-start relative -ml-[243px] bg-white rounded-[12px_0px_0px_12px] overflow-hidden shadow-[0px_9px_25px_#20294c1f]">
              <CardContent className="p-0 w-full">
                <div className="flex w-[243px] items-start justify-between pt-[16.2px] pb-[17.55px] px-[21.6px] relative flex-[0_0_auto] border-b border-solid border-[#f0f1f5]">
                  <div className="inline-flex items-start justify-center pl-0 pr-[0.62px] pt-[3.35px] pb-[5.05px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-[23px] text-center tracking-[0] leading-6 whitespace-nowrap">
                      Siemens S7-1200
                    </div>
                  </div>

                  <div className="relative w-[159.53px] h-[32.4px] -ml-[139px]" />
                </div>

                <div className="flex w-[486px] items-center justify-between p-[21.6px] relative flex-[0_0_auto] -mr-[243px]">
                  <div className="relative w-[87.71px] h-[32.4px]">
                    <div className="flex w-[53px] h-[26px] items-start justify-center pl-0 pr-[0.39px] pt-[3.3px] pb-[9.4px] absolute top-[13px] left-px">
                      <div className="relative w-fit mt-[-1.00px] mb-[-2.70px] font-normal text-[23px] tracking-[0.68px] leading-[17px] [font-family:'Roboto',Helvetica] text-[#20294c] text-center whitespace-nowrap">
                        385
                      </div>
                    </div>

                    <div className="h-6 top-[-25px] left-0 font-medium text-[32.4px] text-center tracking-[0] leading-6 whitespace-nowrap absolute [font-family:'Roboto',Helvetica] text-[#20294c]">
                      Risk Score
                    </div>
                  </div>

                  <Badge className="inline-flex items-center justify-center pl-[67.5px] pr-[20.66px] pt-[17.2px] pb-[19.5px] relative flex-[0_0_auto] bg-[#f0f1f5] rounded-lg">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-semibold text-[#676b89] text-[17.9px] text-center tracking-[0.56px] leading-5 whitespace-nowrap">
                      TRANSPORT
                    </div>
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col w-full items-end gap-2 pl-[315.61px] pr-6 pt-0 pb-12 relative flex-[0_0_auto] -mt-12 z-0">
            <img className="relative w-8 h-8" alt="Svg" src="/svg-3.svg" />

            <div className="inline-flex max-w-[347.4px] items-start justify-end pl-[27.86px] pr-[0.53px] py-0 relative flex-[0_0_auto] ml-[-0.01px]">
              <div className="relative w-[401px] mt-[-1.00px] ml-[-81.99px] [font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-2xl text-right tracking-[0] leading-9">
                Devices are identified automatically based on observed network
                behavior and protocol signatures.
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-1/2 h-[664.55px] border-l border-solid border-[#f0f1f5]">
          <div className="relative h-[675px] -top-2.5">
            <div className="flex-col w-full gap-2 pl-6 pr-[246.12px] pt-0 pb-12 top-[481px] left-px flex items-start absolute">
              <img
                className="relative w-[30px] h-[30px]"
                alt="Svg"
                src="/svg.svg"
              />

              <div className="flex max-w-[416.88px] w-[416.88px] items-start pl-0 pr-[14.88px] py-0 relative flex-[0_0_auto]">
                <div className="relative w-[523px] mt-[-1.00px] mr-[-121.00px] [font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-[23px] tracking-[0] leading-9">
                  The OTraze engine automatically maps connections, identifies
                  exposure points, and categorizes risk severity.
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-center pl-0 pr-3 pt-[103.27px] pb-[103.28px] absolute top-0 left-0">
              <Card className="flex-col w-[243px] items-end absolute top-[185px] left-px z-[1] rounded-[0px_12px_12px_0px] overflow-hidden flex bg-white shadow-[0px_9px_25px_#20294c1f]">
                <CardContent className="p-0 w-full">
                  <div className="flex w-[486px] items-start justify-between pt-[16.2px] pb-[17.55px] px-[21.6px] relative flex-[0_0_auto] -ml-[243px] border-b border-solid border-[#f0f1f5]">
                    <div className="inline-flex items-start justify-center pl-0 pr-[0.62px] pt-[3.35px] pb-[5.05px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-[23px] text-center tracking-[0] leading-6 whitespace-nowrap">
                        Uber
                      </div>
                    </div>

                    <div className="justify-center pl-0.5 pr-[3.53px] pt-[3.35px] pb-[5.05px] inline-flex items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-[21px] text-center tracking-[0] leading-6 whitespace-nowrap">
                        Today, 11:30 AM
                      </div>
                    </div>
                  </div>

                  <div className="flex w-[486px] items-center justify-between p-[21.6px] relative flex-[0_0_auto] -ml-[243px]">
                    <div className="relative w-[87.71px] h-[32.4px]">
                      <div className="inline-flex items-start justify-center pl-0 pr-[0.99px] pt-[2.95px] pb-[5.45px] absolute top-0 left-0">
                        <div className="relative w-fit mt-[-1.00px] font-medium text-[#979db5] text-[32.4px] text-center tracking-[0] leading-6 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                          -
                        </div>
                      </div>

                      <div className="inline-flex items-start justify-center pl-0 pr-[0.39px] pt-[3.3px] pb-[9.4px] absolute top-[3px] left-[18px]">
                        <div className="relative w-fit mt-[-1.00px] font-normal text-[#20294c] text-[23px] text-center tracking-[0.68px] leading-[17px] [font-family:'Roboto',Helvetica] whitespace-nowrap">
                          ₹
                        </div>
                      </div>

                      <div className="absolute h-6 top-0.5 left-[31px] font-medium text-[32.4px] tracking-[0] leading-6 [font-family:'Roboto',Helvetica] text-[#20294c] text-center whitespace-nowrap">
                        385
                      </div>
                    </div>

                    <Badge className="relative w-[148px] h-14 bg-[#f0f1f5] rounded-lg">
                      <div className="absolute h-5 top-4 left-8 [font-family:'Roboto',Helvetica] font-semibold text-[#676b89] text-[17.9px] text-center tracking-[0.56px] leading-5 whitespace-nowrap">
                        MODBUS
                      </div>
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="relative w-[663px] h-[312px] ml-[-231px] z-0 opacity-30">
                {categoryTags.map((tag, index) => (
                  <Badge
                    key={`tag-${index}`}
                    className={`absolute ${tag.width} h-[42px] ${tag.top} ${tag.left} bg-[#f0f1f5] rounded-xl`}
                  >
                    {tag.icon && (
                      <img
                        className="absolute w-[26px] h-[26px] top-2 left-4"
                        alt={`${tag.label} svg`}
                        src={tag.icon}
                      />
                    )}
                    <div
                      className={`absolute h-5 top-[9px] ${tag.icon ? "left-[50px]" : "left-[25px]"} [font-family:'Roboto',Helvetica] font-semibold text-[#20294c] ${tag.label.length > 10 ? "text-[15px]" : "text-base"} text-center tracking-[0.68px] leading-5 whitespace-nowrap`}
                    >
                      {tag.label}
                    </div>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
