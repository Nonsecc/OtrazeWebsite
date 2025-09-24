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

export const Impressum = (): JSX.Element => {
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
      <header className="w-full bg-[#f0f1f5] border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-10 py-[42px]">
          <div className="flex items-center justify-between">
            <img 
              src="/o--1--1.png" 
              alt="OTraze Logo" 
              className="h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => {
                window.location.href = '/';
                window.scrollTo(0, 0);
              }}
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

      {/* Main Content */}
      <div className="w-full bg-[#f0f1f5] h-[400px]">
        <main className="max-w-[1200px] mx-auto px-6 py-16 h-full">
          <div className="relative h-full">
            {/* Thin vertical lines left and right */}
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[#c7cbdb] to-transparent"></div>
            <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-[#c7cbdb] to-transparent"></div>
            
            <div className="px-8 h-full flex flex-col justify-center relative">
              {/* Left line close to Impressum */}
              <div className="absolute left-8 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#c7cbdb] to-transparent transform -translate-y-1/2"></div>
              
              {/* Right line close to Impressum */}
              <div className="absolute right-8 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#c7cbdb] to-transparent transform -translate-y-1/2"></div>
              
              {/* Main Title - positioned at the border */}
              <div className="text-center mb-16 mt-96">
                <h1 className="[font-family:'Roboto',Helvetica] font-bold text-[#20294c] text-[100px] tracking-[-3.00px] leading-[85px]">
                  Impressum
                </h1>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Content Section with White Background */}
      <main className="max-w-[1200px] mx-auto px-6 py-16 bg-white">
        <div className="relative">
          {/* Thin vertical lines left and right - full height */}
          <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[#c7cbdb] to-transparent"></div>
          <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-[#c7cbdb] to-transparent"></div>
          
          <div className="px-8">
            {/* Content */}
            <div className="space-y-8">
              <section>
                <h2 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-2xl mb-4">
                  Legal Notice (Impressum)
                </h2>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-6">
                  Information according to § 5 TMG
                </h3>
                
                <div className="space-y-4">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    Sascha Buhle
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    operating under the name "OTraze"
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    Friedrichstraße 114a
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    10117 Berlin
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    Germany
                  </p>
                </div>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Contact
                </h3>
                <div className="space-y-2">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    Email: info@otraze.io
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    Phone: [optional but recommended]
                  </p>
                </div>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Responsible for content pursuant to § 18 Abs. 2 MStV
                </h3>
                <div className="space-y-2">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    Sascha Buhle
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    Friedrichstraße 114a
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    10117 Berlin
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    Germany
                  </p>
                </div>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Disclaimer
                </h3>
                <h4 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-lg mb-3">
                  Liability for Content
                </h4>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                  As a service provider, we are responsible for our own content on these pages according to § 7 para. 1 TMG and general laws. However, according to §§ 8 to 10 TMG, we are not obliged to permanently monitor transmitted or stored external information, or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected.
                </p>
              </section>

              <section>
                <h4 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-lg mb-3">
                  Liability for Links
                </h4>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                  Our website contains links to external third-party websites. We have no influence over the content of these websites, therefore we cannot assume any liability for such external content. The respective provider or operator of the linked pages is always responsible for their content. At the time of linking, no illegal content was recognizable. Permanent monitoring of the content of linked pages is unreasonable without concrete evidence of a legal violation. If we become aware of any legal violations, we will remove such links immediately.
                </p>
              </section>

              <section>
                <h4 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-lg mb-3">
                  Copyright
                </h4>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                  The content and works created by the site operators on these pages are subject to German copyright law. Duplication, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this website are permitted only for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected and such content is marked accordingly.
                </p>
              </section>
            </div>
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

