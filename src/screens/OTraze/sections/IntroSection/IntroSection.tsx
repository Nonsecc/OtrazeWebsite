import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { BGPattern } from "../../../../components/ui/bg-pattern";
import SwitchWithDualIcons from "../../../../components/ui/demo";
import { RecentDiscoveries } from "../../../../components/ui/recent-discoveries";

export const IntroSection = (): JSX.Element => {
  const badgeData = [
    {
      icon: "/svg-2.svg",
      text: "Passive Network Scanning",
      className: "pl-[17px] pr-[17.77px]",
    },
    {
      icon: "/svg-2.svg",
      text: "Listen, Don't Touch",
      className: "pl-[17px] pr-[23px]",
    },
  ];


  return (
    <section id="why-otraze" className="relative max-w-[1200px] w-full mx-auto px-4 py-12">
      {/* Dark/Light Mode Toggle */}
      <div className="absolute top-[40px] left-1/2 -translate-x-1/2 z-20">
        <div className="bg-gray-100 rounded-full p-1.5 shadow-sm border border-purple-200">
          <SwitchWithDualIcons />
        </div>
      </div>

      <img
        className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[942px] h-[400px] object-cover object-top rounded-lg shadow-lg z-10"
        alt="OTraze Dashboard"
        src="/Dashboard.jpg"
      />

      
        {/* Background Pattern only after Dashboard */}
        <div
          className="absolute top-[0px] left-0 right-0 h-[700px] z-0"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(229, 231, 235, 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(229, 231, 235, 0.35) 1px, transparent 1px), linear-gradient(to bottom, transparent, rgba(255, 255, 255, 1))',
            backgroundSize: '80px 40px, 80px 40px, 100% 100px',
            backgroundPosition: '0 0, 0 0, 0 400px',
            backgroundColor: '#ffffff'
          }}
        />
      
      <div className="flex w-full items-start gap-8 pt-[550px] pb-[161.99px] px-0 relative z-10">
        {/* Recent Discoveries Card */}
        <div className="flex-shrink-0">
          <RecentDiscoveries />
        </div>

        {/* Text Content */}
        <div className="flex flex-col w-full max-w-[588px] items-start gap-4 ml-48">
        <div className="max-w-[588px] w-[75px] p-0 relative flex-[0_0_auto] flex items-start justify-center ml-8">
          <div className="relative w-[136.5px] h-[126.88px] ml-[-30.75px] mr-[-30.75px]">
            <div className="relative w-[138px] h-[129px] -top-px -left-px">
              <img
                className="absolute w-[98px] h-[88px] top-[15px] left-3"
                alt="Group"
                src="/group-421.png"
              />
              <img
                className="absolute w-[119px] h-[97px] top-3 left-2"
                alt="Vector"
                src="/vector-679.svg"
              />
              <img
                className="absolute w-8 h-[29px] top-2.5 left-[106px]"
                alt="Group"
                src="/group-419.png"
              />
              <img
                className="absolute w-[31px] h-[26px] top-3 left-[107px]"
                alt="Group"
                src="/group-420.png"
              />
              <img
                className="absolute w-[54px] h-[66px] top-px left-0"
                alt="Vector"
                src="/vector-684.svg"
              />
              <img
                className="absolute w-[22px] h-7 top-[101px] left-[62px]"
                alt="Vector"
                src="/vector-685.svg"
              />
              <img
                className="absolute w-1.5 h-2.5 top-[105px] left-5"
                alt="Ellipse"
                src="/ellipse-211.svg"
              />
              <img
                className="absolute w-[11px] h-3.5 top-[101px] left-2.5"
                alt="Ellipse"
                src="/ellipse-212.svg"
              />
              <img
                className="absolute w-2.5 h-2.5 top-[99px] left-[3px]"
                alt="Ellipse"
                src="/ellipse-213.svg"
              />
              <img
                className="absolute w-[25px] h-[21px] top-[77px] left-[113px]"
                alt="Vector"
                src="/vector-686.svg"
              />
              <img
                className="absolute w-[11px] h-3.5 top-0 left-[79px]"
                alt="Vector"
                src="/vector-687.svg"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[588px] items-start pl-0 pr-[189px] py-0 relative flex-[0_0_auto]">
          <h1 className="relative w-fit mt-[-1.00px] mr-[-3.00px] [font-family:'Roboto',Helvetica] font-bold text-[#20294c] text-[64px] tracking-[-1.92px] leading-[58px]">
            Stop guessing <br />
            what&apos;s in your <br />
            OT network.
          </h1>
        </div>

        <div className="flex w-full max-w-[588px] items-start gap-4 pl-0 pr-[162.23px] py-0 relative flex-[0_0_auto]">
          {badgeData.map((badge, index) => (
            <Badge
              key={`badge-${index}`}
              variant="outline"
              className={`${badge.className} py-[9px] inline-flex items-center gap-2 relative flex-[0_0_auto] bg-neutral-50 rounded-full border border-solid border-[#788dba80] h-auto`}
            >
              <img className="relative w-6 h-6" alt="Svg" src={badge.icon} />
              <span className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-semibold text-[#0a2d67] text-lg tracking-[0] leading-6 whitespace-nowrap">
                {badge.text}
              </span>
            </Badge>
          ))}
        </div>

        <div className="flex w-full max-w-[588px] items-start pl-0 pr-9 py-0 relative flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] mr-[-45.00px] [font-family:'Roboto',Helvetica] font-normal text-[#20294c] text-2xl tracking-[0] leading-9">
            It&#39;s easy to lose track – especially in industrial networks{" "}
            <br />
            that have grown over years. And if you can&#39;t see what&apos;s{" "}
            <br />
            running, you can&apos;t secure it. OTraze passively scans <br />
            your infrastructure – agentless, edge-based, no cloud <br />
            required. Legacy switches in the substation? <br />
            Two PLCs with SMB open? <br />
            We&apos;ll find them – so you can act before attackers do.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};
