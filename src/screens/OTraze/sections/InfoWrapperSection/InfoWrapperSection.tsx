import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    image: "/bildschirmfoto-2025-09-14-um-22-55-47-1.png",
    description:
      "Export and share compliance evidence directly from your asset risk view — without spreadsheets or guesswork.",
  },
  {
    image: "/bildschirmfoto-2025-09-14-um-23-13-20-1.png",
    description: "Stop tracking fragile asset details in Excel.",
  },
  {
    image: "/bildschirmfoto-2025-09-14-um-23-25-37-1.png",
    description:
      "Operators wish for visibility tools that detect gaps before audits do.",
  },
  {
    searchPlaceholder: "E.g. CVE-2020-15782...",
    description:
      "Search any asset, CVE, protocol, or control — without leaving the console.",
  },
];

export const InfoWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center">
      <div className="relative max-w-[1200px] w-full">
        <div className="relative w-full">
          <div className="flex items-start gap-8 py-[50px] relative">
            <div className="flex flex-col w-full max-w-[486px] items-start justify-center px-0">
            <div className="max-w-[486px] relative w-full flex items-start justify-start mb-8">
              <div className="relative w-[97px] h-[123px]">
                <div className="relative w-[95px] h-[120px]">
                  <img
                    className="absolute w-[51px] h-[52px] top-[18px] left-3.5"
                    alt="Vector"
                    src="/vector-695.svg"
                  />
                  <div className="absolute w-[15px] h-[95px] top-[30px] left-[54px] rotate-[-35.03deg]">
                    <div className="relative h-[95px]">
                      <div className="absolute w-[15px] h-[95px] top-0 left-0 bg-[#17181b]" />
                      <div className="absolute w-[15px] h-6 top-0 left-0 bg-[#ffdb5b]" />
                      <div className="absolute w-[3px] h-6 top-0 left-[3px] bg-[#ff4c4c] opacity-30" />
                      <div className="absolute w-[3px] h-[59px] top-7 left-[3px] bg-white opacity-30" />
                    </div>
                  </div>
                  <img
                    className="absolute w-[60px] h-[54px] top-3 left-px"
                    alt="Vector"
                    src="/vector-1.svg"
                  />
                  <img
                    className="absolute w-3.5 h-[13px] top-[23px] left-14"
                    alt="Vector"
                    src="/vector-690.svg"
                  />
                  <img
                    className="absolute w-[5px] h-2 top-16 left-7"
                    alt="Vector"
                    src="/vector-691.svg"
                  />
                  <img
                    className="absolute w-[21px] h-2.5 top-[38px] left-0"
                    alt="Vector"
                    src="/vector-692.svg"
                  />
                  <img
                    className="absolute w-[18px] h-[27px] top-0 left-[25px]"
                    alt="Vector"
                    src="/vector-693.svg"
                  />
                  <div className="absolute w-1.5 h-1.5 top-[43px] left-[61px] bg-[#19e59a] rounded-[3.19px]" />
                </div>
              </div>
            </div>

            <div className="flex items-start pt-[31px] pb-8 px-0 relative w-full">
              <div className="flex w-full items-start pr-[115px]">
                <h1 id="clarity-text" className="relative w-fit [font-family:'Roboto',Helvetica] font-bold text-[#20294c] text-[100px] tracking-[-3.00px] leading-[85px]">
                  Clarity, <br />
                  not just <br />
                  compliance.
                </h1>
              </div>
            </div>

            <div className="flex items-start pr-7 py-0 relative w-full">
              <p className="relative w-full [font-family:'Roboto',Helvetica] font-normal text-[#20294c] text-2xl tracking-[0] leading-9">
                Understanding your OT environment shouldn&#39;t feel like
                decoding a raw syslog feed.
                <br />
                OTraze highlights the patterns that matter — from risky
                connections to sudden protocol changes — and helps you make
                confident, informed decisions.
              </p>
            </div>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <img
                className="absolute bottom-[-80px] -right-32 w-[850px] h-[400px] rounded-[40px] object-cover shadow-2xl z-10"
                alt="Bildschirmfoto"
                src="/bildschirmfoto-2025-09-16-um-21-19-20-1.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center gap-[100px] relative">
        <div className="flex items-start justify-center px-[120px] py-0 relative w-full bg-[#0582fb]">
          <div className="relative max-w-[1200px] w-full py-[150px] pt-[200px]">
            <div className="max-w-[1200px] w-[75px] flex items-start justify-center mb-[-76px]">
              <div className="relative w-28 h-[76px]">
                <div className="relative h-[76px]">
                  <img
                    className="absolute w-[103px] h-[67px] top-[9px] left-[9px]"
                    alt="Vector"
                    src="/vector-3.svg"
                  />
                  <img
                    className="absolute w-[91px] h-16 top-3 left-[18px]"
                    alt="Intersect"
                    src="/intersect-1.svg"
                  />
                  <img
                    className="absolute w-[103px] h-[67px] top-0 left-0"
                    alt="Vector"
                    src="/vector.svg"
                  />
                  <img
                    className="absolute w-[57px] h-6 top-[22px] left-3.5"
                    alt="Vector"
                    src="/vector-2.svg"
                  />
                </div>
              </div>
            </div>

            <div className="flex w-[690px] items-center justify-between px-4 py-[16.5px] mb-[50px] ml-[102px] bg-white rounded-lg shadow-2xl">
              <div className="relative flex items-center gap-3">
                <img
                  className="w-8 h-8"
                  alt="Padlock svg"
                  src="/padlock-svg.svg"
                />
                <div className="flex items-center">
                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[#979db5] text-xl tracking-[0] leading-[30px]">
                    https://
                  </span>
                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[#9da3ba] text-xl tracking-[0] leading-[30px]">
                    otraze.io/demo
                  </span>
                </div>
              </div>

              <Badge
                variant="outline"
                className="px-[17px] py-2 bg-neutral-50 rounded-full border border-solid border-[#788dba80]"
              >
                <span className="[font-family:'Roboto',Helvetica] font-normal text-[#20294c] text-[17px] tracking-[0] leading-6">
                  Coming soon
                </span>
              </Badge>
            </div>

            <div className="flex w-[1000px] items-start pr-[135px] py-0 ml-[102px] mb-[348px]">
              <h2 className="relative w-full [font-family:'Roboto',Helvetica] font-bold text-white text-[100px] tracking-[-3.00px] leading-[85px]">
                Never wait for an OT auditor to tell you what&apos;s wrong
                again.
              </h2>
            </div>

            <div className="flex w-[282px] items-start justify-end pl-[10.14px] pr-0 py-0 -mt-60">
              <p className="relative w-[303px] [font-family:'Roboto',Helvetica] font-semibold text-white text-lg text-right tracking-[0] leading-[27px]">
                Audit stress?
                <br /> OTraze shows you beforehand what auditors will flag – and
                why.
                <br />
                Visualize vulnerabilities, generate audit reports, and fix
                issues before they become a finding.
                <br /> It&apos;s not just visibility. It&apos;s control.
              </p>
            </div>
          </div>
        </div>

        <div className="relative max-w-[1200px] w-full">
          <img
            className="w-[892px] h-[466px] mb-20 ml-auto mr-0 -mt-[30rem] rounded-[43px] object-cover shadow-2xl"
            alt="Bildschirmfoto"
            src="/bildschirmfoto-2025-09-14-um-21-45-09-1.png"
          />

          <div className="grid grid-cols-2 gap-6">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                className="bg-[#f0f1f5] rounded-[20px] overflow-hidden border-0 h-[332px]"
              >
                <CardContent className="flex items-center gap-[23px] pl-[78px] pr-0 py-0 h-full relative">
                  <div className="w-px h-[236px] bg-[linear-gradient(0deg,rgba(199,203,219,1)_0%,rgba(199,203,219,0)_100%)]" />

                  <div className="flex flex-col w-[486px] items-start justify-end pr-12 pt-0 pb-0 relative">
                    {card.image ? (
                      <img
                        className={`relative ${index === 0 ? "w-[432px] h-[174.5px] rounded-[48px]" : index === 1 ? "w-[415px] h-[154px] rounded-[23px]" : "w-[438px] h-[180.61px] rounded-[23px]"} object-cover mb-8`}
                        alt="Bildschirmfoto"
                        src={card.image}
                      />
                    ) : (
                      <div className="flex flex-col gap-2 mb-8 w-full">
                        <div className="flex pl-6 pr-[113px] pt-[15px] pb-[17px] w-full bg-white rounded-lg shadow-[0px_6px_16px_#20294c1f,0px_1px_5px_#20294c17]">
                          <span className="[font-family:'Roboto',Helvetica] font-normal text-[#979db5] text-xl tracking-[0] leading-[30px]">
                            {card.searchPlaceholder}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start pr-7 pb-12 w-full">
                      <p className="relative w-full [font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-2xl tracking-[0] leading-9">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-[150px] bg-[linear-gradient(180deg,rgba(240,241,245,1)_0%,rgba(240,241,245,0)_100%)]" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
