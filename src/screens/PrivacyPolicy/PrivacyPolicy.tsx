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

export const PrivacyPolicy = (): JSX.Element => {
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
                    This privacy policy explains how OTraze GmbH ("we", "us", or "our") collects, uses, and protects your personal data when you use our website. We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Data Controller
                </h3>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                  OTraze GmbH<br />
                  Friedrichstraße 114a<br />
                  10117 Berlin<br />
                  Deutschland<br />
                  Email: info@otraze.io
                </p>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Types of Data We Collect
                </h3>
                <div className="space-y-2">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    When you use our website, we may process the following categories of data:
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Personal information you provide (e.g., name, email address, company, when contacting us)
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Technical data (e.g., IP address, browser type, operating system, date and time of access)
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Usage data (e.g., visited pages, time spent on the website, referral sources)
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    We do not use third-party tracking or marketing tools.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Purposes and Legal Bases of Processing
                </h3>
                <div className="space-y-2">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    We process personal data in accordance with Art. 6 GDPR:
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Contract performance (Art. 6(1)(b) GDPR): when you contact us or request services.
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Legitimate interests (Art. 6(1)(f) GDPR): to ensure website security, analyze performance, and improve user experience.
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Consent (Art. 6(1)(a) GDPR): if you voluntarily subscribe to a newsletter or agree to optional cookies (currently not in use).
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Legal obligations (Art. 6(1)(c) GDPR): to comply with retention and documentation requirements.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Hosting and Data Processing
                </h3>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                  Our website is hosted by Hostinger International Ltd.. All data related to website usage is processed on servers within the European Union.
                </p>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                  We have concluded a Data Processing Agreement (DPA) with Hostinger in accordance with Art. 28 GDPR.
                </p>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Use of Hostinger Analytics
                </h3>
                <div className="space-y-2">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    We use the analytics tool provided by Hostinger to understand how visitors interact with our website. This tool collects pseudonymized data such as:
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • IP address (shortened/anonymized)
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • browser type and version
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • operating system
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • referring URL
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • visited pages, time and date of access
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • approximate location (country/region)
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    The processing is based on our legitimate interests (Art. 6(1)(f) GDPR) in:
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • ensuring website stability and IT security,
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • monitoring technical performance,
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • and improving the user experience.
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    All data is stored on EU-based servers operated by Hostinger. Raw server logs are typically retained for 30 days before deletion or anonymization. The data is not shared with third parties.
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    You can object to this processing at any time (Art. 21 GDPR) if reasons arise from your particular situation.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  International Data Transfers
                </h3>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                  We do not transfer personal data outside the EU/EEA. Should this change in the future, we will implement adequate safeguards (e.g., adequacy decisions or Standard Contractual Clauses) in accordance with GDPR.
                </p>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Data Retention
                </h3>
                <div className="space-y-2">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    We store personal data only for as long as necessary for the purposes described:
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Contact requests: deleted after the request has been fully processed, unless further storage is required (max. 12 months).
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Legal retention: commercial and tax-related data are retained for 6–10 years.
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Technical server logs: automatically deleted or anonymized after 30 days.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Your Rights under GDPR
                </h3>
                <div className="space-y-2">
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    You have the following rights regarding your personal data:
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Right of access (Art. 15 GDPR)
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Right to rectification (Art. 16 GDPR)
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Right to erasure ("right to be forgotten") (Art. 17 GDPR)
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Right to restriction of processing (Art. 18 GDPR)
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Right to data portability (Art. 20 GDPR)
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    • Right to object (Art. 21 GDPR)
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                    To exercise your rights, please contact us at: info@otraze.io
                  </p>
                </div>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Data Security
                </h3>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Please note that no method of internet transmission or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#676b89] text-xl mb-4">
                  Updates to This Privacy Policy
                </h3>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                  We may update this privacy policy from time to time. The most current version will always be available on this page.
                </p>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#676b89] text-lg leading-7">
                  Last updated: 24.09.2025
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
