import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const filterTags = [
  {
    icon: "/svg-1.svg",
    label: "NEW",
    className: "pl-[9px] pr-[16.3px]",
  },
  {
    icon: "/svg-10.svg",
    label: "RISK",
    className: "pl-3 pr-[13px]",
  },
  {
    icon: "/svg-5.svg",
    label: "TAGGED",
    className: "pl-[9px] pr-[13.98px]",
  },
];

const filterTagsRight = [
  {
    icon: "/svg-6.svg",
    label: "TODAY",
    className: "pl-[9px] pr-[13.89px]",
  },
  {
    icon: "/svg-4.svg",
    label: "OLD",
    className: "pl-[9px] pr-[13.06px]",
  },
  {
    icon: "/svg-8.svg",
    label: "MISSING",
    className: "pl-[9px] pr-[14.42px]",
  },
];

export const ClaritySection = (): JSX.Element => {
  return (
    <section id="compliance" className="flex flex-col w-full items-start relative">
      <div className="flex w-full items-start px-[120px] py-0 relative [background:radial-gradient(50%_50%_at_55%_181%,rgba(240,241,245,0.3)_0%,rgba(0,0,0,0)_100%)]">
        <div className="relative w-full max-w-[1200px] h-[698.02px] mx-auto">
          <div className="max-w-[1200px] w-[75px] p-0 absolute top-[-59px] left-1/2 transform -translate-x-1/2 flex items-start justify-center">
            <img className="relative w-44 h-44" alt="Idea" src="/idea.svg" />
          </div>

          <div className="absolute w-[877px] h-56 top-[74px] left-1/2 transform -translate-x-1/2">
            <div className="flex w-[359px] items-start gap-2 absolute top-[165px] left-0 opacity-30">
              {filterTags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`inline-flex items-center gap-2 ${tag.className} py-[7px] rounded-full border-[#788dba80] bg-transparent`}
                >
                  <img className="w-6 h-6" alt="Icon" src={tag.icon} />
                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[#20294c] text-[17px] tracking-[0.43px] leading-[17px]">
                    {tag.label}
                  </span>
                </Badge>
              ))}
            </div>

            <div className="inline-flex items-start gap-2 absolute top-[165px] left-[547px] opacity-30">
              {filterTagsRight.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`inline-flex items-center gap-2 ${tag.className} py-[7px] rounded-full border-[#788dba80] bg-transparent`}
                >
                  <img className="w-6 h-6" alt="Icon" src={tag.icon} />
                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[#20294c] text-base tracking-[0.43px] leading-[17px]">
                    {tag.label}
                  </span>
                </Badge>
              ))}
            </div>

            <div className="absolute w-[792px] h-56 top-0 left-[43px]">
              <div className="relative h-[304px]">
                <div className="absolute w-[792px] h-[304px] top-0 left-0">
                  <h1 className="absolute -top-10 left-[162px] [font-family:'Roboto',Helvetica] font-bold text-[#20294c] text-[64px] text-center tracking-[-1.92px] leading-[152px]">
                    Search. Prioritize
                    <br />
                    Act
                  </h1>
                </div>

                <div className="flex w-[792px] items-end justify-between pl-6 pr-5 pt-[18px] pb-[19px] absolute top-[73px] left-0 bg-[#332e2ecc] rounded-2xl shadow-[0px_9px_25px_#20294c1f]">
                  <div className="inline-flex items-end gap-3 relative z-[1]">
                    <div className="relative self-stretch w-1 bg-white" />
                    <div className="inline-flex items-start pl-0 pr-[6.28px] pt-0 pb-px relative">
                      <span className="relative w-fit mt-[-1.00px] font-normal text-white text-[32px] tracking-[0] leading-10 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                        Siemens
                      </span>
                    </div>
                  </div>

                  <Button className="relative z-0 h-auto p-0 bg-transparent border-0 hover:bg-transparent">
                    <img
                      className="relative"
                      alt="Search button"
                      src="/button.svg"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[588px] h-[352px] items-start absolute top-[346px] left-[306px]">
            <div className="flex flex-col w-[588px] items-start gap-6 relative">
              <Card className="w-[588px] rounded-3xl overflow-hidden bg-white shadow-[0px_9px_25px_#20294c1f] border-0">
                <CardContent className="p-0">
                  <div className="flex w-[588px] items-start justify-between px-8 py-3">
                    <div className="inline-flex items-start">
                      <h3 className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-semibold text-[#676b89] text-[26px] tracking-[0] leading-[31px] whitespace-nowrap">
                        Siemens S7-1200
                      </h3>
                    </div>

                    <div className="pl-0 pr-[0.14px] py-0 inline-flex items-start">
                      <span className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-[26px] tracking-[0] leading-[31px] whitespace-nowrap">
                        02 July, 07:20 PM
                      </span>
                    </div>
                  </div>

                  <div className="flex w-[588px] items-center justify-between pt-[29.75px] pb-[26.75px] px-8 border-t-[3px] border-[#f0f1f5]">
                    <div className="relative w-[175.38px] h-[42px]">
                      <div className="inline-flex items-start pt-0 pb-[19px] px-0 absolute -top-px left-0">
                        <span className="relative w-fit mt-[-1.00px] font-medium text-[#979db5] text-2xl tracking-[0] leading-6 [font-family:'Roboto',Helvetica] whitespace-nowrap">
                          +
                        </span>
                      </div>

                      <span className="absolute h-[42px] -top-px left-4 [font-family:'Roboto',Helvetica] font-medium text-[#20294c] text-[42px] tracking-[0] leading-[42px] whitespace-nowrap">
                        High Risk
                      </span>
                    </div>

                    <Badge className="w-[221px] h-[52px] bg-[#f0f1f5] rounded-lg border-0 hover:bg-[#f0f1f5] flex items-center justify-start pl-2.5">
                      <span className="[font-family:'Roboto',Helvetica] font-semibold text-[#20294c] text-[18.2px] tracking-[0.68px] leading-5 whitespace-nowrap">
                        OUTDATED FIRMWARE
                      </span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-[588px] rounded-3xl bg-white shadow-[0px_9px_25px_#20294c1f] border-0">
                <CardContent className="pt-[55px] pb-0 px-0">
                  <div className="relative flex-1 h-[109px] border-t-[3px] border-[#f0f1f5]" />
                </CardContent>
              </Card>
            </div>

            <div className="absolute w-[588px] h-[180px] top-[172px] left-0 bg-[linear-gradient(0deg,rgba(240,241,245,1)_0%,rgba(240,241,245,0)_100%)]" />
          </div>
        </div>
      </div>

      <div className="flex w-full items-start justify-center px-[303px] py-12 relative -mt-16 bg-white">
        <div className="flex max-w-[833.76px] w-[833.75px] items-start justify-center px-[14px] py-0 relative">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#20294c] text-2xl text-center tracking-[0] leading-9">
            Need to find all PLCs running old firmware?
            <br /> Devices using SMB? Assets with open ports?
            <br />
            With OTraze, you can filter by protocol, vendor, risk level, and
            more.
            <br /> No more spreadsheets. No more guessing. Just clarity and
            action.
          </p>
        </div>
      </div>
    </section>
  );
};
