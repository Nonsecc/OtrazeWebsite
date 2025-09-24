import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Card, CardContent } from "../../components/ui/card";
import { DemoModal } from "../../components/ui/demo-modal";

export const Manifesto = (): JSX.Element => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const goBack = () => {
    window.history.back();
  };

  const navigateToHome = () => {
    window.location.href = '/';
  };

  const scrollToSection = (sectionId: string) => {
    // Navigate to home page first, then scroll to section
    window.location.href = `/#${sectionId}`;
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const navigationItems = [
    { label: "Home", href: "/", active: true, onClick: navigateToHome },
    { label: "Why OTraze", href: "/#why-otraze", active: false, onClick: () => scrollToSection('why-otraze') },
    { label: "Features", href: "/#features", active: false, onClick: () => scrollToSection('features') },
    { label: "Compliance", href: "/#clarity-text", active: false, onClick: () => scrollToSection('clarity-text') },
    { label: "About", href: "/#about", active: false, onClick: () => scrollToSection('about') },
  ];

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-[#f0f1f5]">
        <div className="max-w-[1200px] mx-auto px-10 py-[42px]">
          <div className="flex items-center justify-between">
            <img 
              src="/o--1--1.png" 
              alt="OTraze Logo" 
              className="h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleLogoClick}
            />

            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-8">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        item.onClick?.();
                      }}
                      className={`[font-family:'Roboto',Helvetica] text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#0582fb] transition-colors cursor-pointer ${
                        item.active
                          ? "font-medium text-[#20294c]"
                          : "font-normal text-[#676b89]"
                      }`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              <Button 
                className="h-[45px] px-6 bg-white text-[#20294c] border border-gray-300 rounded-[32px] hover:bg-gray-50"
                onClick={() => setIsDemoModalOpen(true)}
              >
                <span className="font-medium text-[#20294c] text-lg tracking-[0] leading-[normal] [font-family:'Roboto',Helvetica]">
                  Book a Demo
                </span>
              </Button>
              <Button 
                className="h-[45px] w-[137px] bg-[#0582fb] rounded-[32px] flex items-center justify-center gap-2 px-[17px]"
                onClick={() => scrollToSection('about')}
              >
                <span className="font-medium text-white text-xl tracking-[0] leading-[normal] [font-family:'Roboto',Helvetica]">
                  Contact
                </span>
                <ArrowRightIcon className="w-6 h-6 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Grey Area with Lines like Impressum */}
      <div className="w-full bg-[#f0f1f5] h-[400px]">
        <main className="max-w-[1200px] mx-auto px-6 py-16 h-full">
          <div className="relative h-full">
            
            <div className="px-8 h-full flex flex-col justify-center relative">
              {/* Left line close to Manifesto */}
              <div className="absolute left-1/4 top-1/2 w-px h-[500px] bg-gradient-to-b from-transparent via-[#c7cbdb] to-transparent transform -translate-y-1/2"></div>
              
              {/* Right line close to Manifesto */}
              <div className="absolute right-1/4 top-1/2 w-px h-[500px] bg-gradient-to-b from-transparent via-[#c7cbdb] to-transparent transform -translate-y-1/2"></div>
              
              {/* Main Title - positioned at the border */}
              <div className="text-center mb-16 mt-96">
                <h1 className="[font-family:'Roboto',Helvetica] font-bold text-[#20294c] text-[100px] tracking-[-3.00px] leading-[85px]">
                  To separate<br />
                  anxiety from<br />
                  OT
                </h1>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Content Section with White Background */}
      <main className="max-w-[800px] mx-auto px-6 py-16 bg-white">
        <div className="relative">
          {/* Date */}
          <div className="mb-8">
            <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-sm tracking-[2px] uppercase">
              January 15th, 2025
            </p>
          </div>

          {/* Author Section */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-[#459af8] rounded-full flex items-center justify-center">
              <span className="[font-family:'Roboto',Helvetica] font-bold text-white text-lg">
                S
              </span>
            </div>
            <div>
              <p className="[font-family:'Roboto',Helvetica] font-bold text-[#20294c] text-lg">
                Sascha Buhle
              </p>
              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-base">
                Founder & CEO, OTraze
              </p>
            </div>
          </div>


          <div className="space-y-8">
            <section>
              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-8 mb-6">
                Being an operator in critical infrastructure in 2025, or at any point in the last decades, guarantees having a relationship with complexity. That complexity looks different in every environment. For some, it's legacy controllers running firmware nobody dares to update. For others, it's undocumented subnets or vendor devices that appear and disappear like ghosts.
              </p>
              
              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-8 mb-6">
                But without exception, what accompanies every OT environment is blindness. Blindness to what is really there. Blindness that makes audits superficial, visibility partial, and risk harder to understand.
              </p>
              
              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-8 mb-6">
                Where does this blindness come from?
              </p>
              
              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-8 mb-6">
                It comes from a system that was never designed for clarity. Networks that grew organically over decades. Protocols that don't play well together. Assets deployed in the field that were never logged in a central register. Security tools that stop at the IT edge. The result is that operators, engineers, and compliance officers are left guessing. And in critical systems, guessing is risk.
              </p>
              
              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-8 mb-6">
                It's Monday morning in a control room, you open a spreadsheet that should represent your OT assets. Rows of MAC addresses, vendor fields half-filled, devices labeled "unknown." You know it's incomplete. You know it's outdated. A new audit is coming next month, and you'll once again spend days explaining what isn't visible. The frustration builds. The risk remains.
              </p>
              
              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-8 mb-6">
                Awareness shouldn't arrive only after the fact — after an auditor points out the gaps, or after an incident forces a forensic deep dive. Awareness should be continuous, immediate, and simple.
              </p>
            </section>

              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-8 mb-6">
                It's a failure of our current tools to not prioritize visibility. OTraze was built because we believe clarity must come first. Only by knowing what is truly in the network can you act with confidence — to prevent incidents, to meet compliance, to protect safety.
              </p>
              
              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-8 mb-6">
                Another failure is care. OT is already hard, our tools don't need to make it harder. Yet too often, security platforms overwhelm with dashboards, alerts, and noise. Operators don't need noise. They need focus. They need to see what counts.
              </p>
              
              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-8 mb-6">
                That's why we designed OTraze not just as another visibility tool, but as a clear lens: simple where others are cluttered, precise where others are vague.
              </p>
              
              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-8 mb-6">
                We wish for OTraze to do its job and then step aside. To give you clarity, not confusion. To let you focus on operations, not on deciphering your security tool.
              </p>

              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-8 mb-6">
                The OTraze you are using — or will be using — is the first step in a suite of approaches we are bringing to life. Their success depends on how well we build this one, and how openly you tell us what you need. We read every message that reaches us at info@otraze.io.
              </p>
              
              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-8 mb-6">
                If you haven't tried OTraze yet, please do, and tell us what you think. It'll be an honour and a privilege to be a small part of your operational technology journey.
              </p>
          </div>
        </div>
      </main>

      {/* Footer */}
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
                            : link.text === "About OTraze" || link.text === "Careers" || link.text === "Blog / Insights"
                            ? "/"
                            : "#"
                        }
                        className={`[font-family:'Roboto',Helvetica] font-semibold text-[#459af8] ${link.size} tracking-[0] leading-[30px] hover:underline`}
                        target={link.text === "LinkedIn" ? "_blank" : "_self"}
                        rel={link.text === "LinkedIn" ? "noopener noreferrer" : ""}
                        onClick={(e) => {
                          if (link.text === "Privacy Policy" || link.text === "Impressum" || link.text === "About OTraze" || link.text === "Careers" || link.text === "Blog / Insights") {
                            e.preventDefault();
                            if (link.text === "Privacy Policy") {
                              window.location.href = "/privacy";
                            } else if (link.text === "Impressum") {
                              window.location.href = "/impressum";
                            } else {
                              window.location.href = "/";
                            }
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

      {/* Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
};
