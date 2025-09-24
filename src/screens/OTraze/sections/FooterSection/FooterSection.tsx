import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FooterSection = (): JSX.Element => {
  const navigationLinks = [
    { text: "About OTraze", size: "text-[19px]" },
    { text: "Careers", size: "text-xl" },
    { text: "Blog / Insights", size: "text-xl" },
    { text: "Why we built OTraze", size: "text-[19px]" },
    { text: "Privacy Policy", size: "text-[19px]" },
    { text: "Impressum", size: "text-xl" },
    { text: "LinkedIn", size: "text-[19px]" },
  ];

  return (
    <footer id="about" className="w-full max-w-[1200px] mx-auto bg-white relative mb-16">
      <div className="grid grid-cols-3 gap-6 h-[584px]">
          {/* OTraze Logo Card */}
          <div className="flex flex-col gap-6">
            <Card className="h-[296px] bg-[#459af8] border-none rounded-3xl">
              <CardContent className="p-0 relative h-full flex flex-col items-start justify-start pt-8 pl-8">
                <img 
                  src="/LogoOtrazeWhite.png" 
                  alt="OTraze Logo" 
                  className="h-12 w-auto mt-[10px]"
                />
                <div className="mt-4 [font-family:'Roboto',Helvetica] font-medium text-white text-lg tracking-[0] leading-[22px]">
                  The map your OT never had.
                </div>
                <div className="mt-6 [font-family:'Roboto',Helvetica] font-normal text-white text-sm tracking-[0] leading-[18px]">
                  Friedrichstraße 114a<br />
                  10117 Berlin<br />
                  Deutschland
                </div>
              </CardContent>
            </Card>

          {/* Team Card */}
          <Card className="h-[278px] bg-[#f0f1f5] border-none rounded-3xl overflow-hidden">
            <CardContent className="p-0 relative h-full">
              <div className="relative h-[278px]">
                <img
                  className="w-full h-[278px] object-cover"
                  alt="Team"
                  src="/annie-spratt-qckxruozjrg-unsplash-1.png"
                />
                <Button className="absolute bottom-6 left-6 bg-white text-[#20294c] hover:bg-gray-100 rounded-full h-auto px-6 py-4 flex items-center gap-2">
                  <span className="[font-family:'Roboto',Helvetica] font-semibold text-base tracking-[0] leading-[17px] whitespace-nowrap">
                    Team
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Center Message Card */}
        <Card className="h-[584px] bg-[#f0f1f5] border-none rounded-3xl">
          <CardContent className="p-0 relative h-full">
            <div className="absolute w-[335px] h-[560px] top-[9px] left-[17px] [font-family:'Roboto',Helvetica] font-bold text-[#459af8] text-[54px] tracking-[-3.00px] leading-[64px]">
              Got questions? We&#39;re here to help. <br />
              Reach out anytime.
            </div>
          </CardContent>
        </Card>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Navigation Links Card */}
          <Card className="flex-1 bg-[#f0f1f5] border-none rounded-3xl">
            <CardContent className="p-12 pt-[47px] pb-12">
              <nav className="flex flex-col space-y-2">
                {navigationLinks.map((link, index) => (
                  link.text === "Why we built OTraze" ? (
                    <button
                      key={index}
                      className={`[font-family:'Roboto',Helvetica] font-semibold text-[#459af8] ${link.size} tracking-[0] leading-[30px] hover:underline text-left`}
                      onClick={() => {
                        window.location.href = "/why-we-built-otraze";
                      }}
                    >
                      {link.text}
                    </button>
                  ) : (
                    <a
                      key={index}
                      href={
                        link.text === "Privacy Policy" 
                          ? "/privacy" 
                          : link.text === "Impressum" 
                          ? "/impressum" 
                          : link.text === "LinkedIn"
                          ? "https://www.linkedin.com/company/otraze/"
                          : "#"
                      }
                      className={`[font-family:'Roboto',Helvetica] font-semibold text-[#459af8] ${link.size} tracking-[0] leading-[30px] hover:underline`}
                      target={link.text === "LinkedIn" ? "_blank" : "_self"}
                      rel={link.text === "LinkedIn" ? "noopener noreferrer" : ""}
                      onClick={(e) => {
                        if (link.text === "Privacy Policy" || link.text === "Impressum") {
                          e.preventDefault();
                          window.location.href = link.text === "Privacy Policy" ? "/privacy" : "/impressum";
                          window.scrollTo(0, 0);
                        }
                      }}
                    >
                      {link.text}
                    </a>
                  )
                ))}
              </nav>
            </CardContent>
          </Card>

          {/* Copyright Card */}
          <Card className="h-auto bg-[#f0f1f5] border-none rounded-3xl">
            <CardContent className="p-12 pt-[47px] pb-12">
              <div className="space-y-1">
                <div className="[font-family:'Roboto',Helvetica] font-normal text-[#1C2B33] text-xs tracking-[0] leading-4">
                  © 2025 OTraze. All rights reserved.
                </div>
                <div className="[font-family:'Roboto',Helvetica] font-normal text-[#1C2B33] text-xs tracking-[0] leading-4">
                  Reach out to us at{" "}
                  <a 
                    href="mailto:info@otraze.io" 
                    className="text-[#459af8] hover:underline text-sm"
                  >
                    info@otraze.io
                  </a>
                </div>
                <div className="[font-family:'Roboto',Helvetica] font-normal text-[#1C2B33] text-xs tracking-[0] leading-4">
                  Built with ❤️ in Berlin
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </footer>
  );
};
