import React, { useEffect } from "react";
import { Button } from "../../components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Card, CardContent } from "../../components/ui/card";

export const PrivacyPolicy = (): JSX.Element => {
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
    { text: "Privacy Policy", size: "text-[19px]" },
    { text: "Impressum", size: "text-xl" },
    { text: "LinkedIn", size: "text-[19px]" },
    { text: "Privacy Policy", size: "text-xl" },
    { text: "Impressum", size: "text-[19px]" },
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
                window.location.hash = '';
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
              <Button className="h-[45px] px-6 bg-white text-[#20294c] border border-gray-300 rounded-[32px] hover:bg-gray-50">
                <span className="font-medium text-[#20294c] text-lg tracking-[0] leading-[normal] [font-family:'Roboto',Helvetica]">
                  Book a Demo
                </span>
              </Button>
              <Button 
                className="h-[45px] w-[137px] bg-[#0582fb] rounded-[32px] flex items-center justify-center gap-2 px-[17px]"
                onClick={goBack}
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
              {/* Left line close to Privacy Policy */}
              <div className="absolute left-8 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#c7cbdb] to-transparent transform -translate-y-1/2"></div>
              
              {/* Right line close to Privacy Policy */}
              <div className="absolute right-8 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#c7cbdb] to-transparent transform -translate-y-1/2"></div>
              
              {/* Main Title - positioned at the border */}
              <div className="text-center mb-16 mt-96">
                <h1 className="[font-family:'Roboto',Helvetica] font-bold text-[#20294c] text-[100px] tracking-[-3.00px] leading-[85px]">
                  Privacy Policy
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
                  Privacy Policy
                </h2>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-6">
                  Information about data processing
                </h3>
                
                <div className="space-y-4">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    This privacy policy explains how OTraze GmbH ("we", "us", or "our") collects, uses, and protects your personal information when you use our website and services.
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    We are committed to protecting your privacy and ensuring the security of your personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR).
                  </p>
                </div>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Data Controller:
                </h3>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                  OTraze GmbH<br />
                  [Street and house number]<br />
                  [Postal code, City]<br />
                  [Country]<br />
                  Email: info@otraze.io
                </p>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Types of Data We Collect:
                </h3>
                <div className="space-y-2">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Personal information you provide directly (name, email, company)
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Usage data and analytics information
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Technical data (IP address, browser type, device information)
                  </p>
                </div>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  How We Use Your Data:
                </h3>
                <div className="space-y-2">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • To provide and improve our services
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • To communicate with you about our services
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • To analyze website usage and optimize user experience
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • To comply with legal obligations
                  </p>
                </div>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Your Rights:
                </h3>
                <div className="space-y-2">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Right to access your personal data
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Right to rectification of inaccurate data
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Right to erasure ("right to be forgotten")
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Right to restrict processing
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Right to data portability
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Right to object to processing
                  </p>
                </div>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Data Security:
                </h3>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Contact Us:
                </h3>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us at:
                </p>
                <div className="space-y-2">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    Email: info@otraze.io
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    Address: [Your full address]
                  </p>
                </div>
              </section>

              <section>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7 mb-4">
                  This privacy policy was last updated on [Date]. We may update this policy from time to time, and we will notify you of any material changes by posting the new policy on this page.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="about" className="w-full max-w-[1200px] mx-auto bg-white relative">
        <div className="grid grid-cols-3 gap-6 h-[584px]">
          {/* OTraze Logo Card */}
          <div className="flex flex-col gap-6">
            <Card className="h-[296px] bg-[#459af8] border-none rounded-3xl">
              <CardContent className="p-0 relative h-full flex items-start justify-start pt-12 pl-8">
                <img 
                  src="/LogoOtrazeWhite.png" 
                  alt="OTraze Logo" 
                  className="h-12 w-auto"
                />
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
                Feel free to reach out—
                <br />
                we&#39;re here to assist with <br />
                any inquiries or provide <br />
                more information
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
                    <a
                      key={index}
                      href={link.text === "Privacy Policy" ? "/privacy" : link.text === "Impressum" ? "/impressum" : "#"}
                      className={`[font-family:'Roboto',Helvetica] font-semibold text-[#459af8] ${link.size} tracking-[0] leading-[30px] hover:underline`}
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>

            {/* Copyright Card */}
            <Card className="h-auto bg-[#f0f1f5] border-none rounded-3xl">
              <CardContent className="p-12 pt-[47px] pb-12">
                <div className="[font-family:'Roboto',Helvetica] font-semibold text-[#459af8] text-xl tracking-[0] leading-6 whitespace-nowrap">
                  © 2025 OTraze. All rights reserved.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </footer>
    </div>
  );
};
