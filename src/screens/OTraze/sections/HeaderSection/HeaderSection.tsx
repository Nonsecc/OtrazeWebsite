import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { DemoModal } from "../../../../components/ui/demo-modal";

export const HeaderSection = (): JSX.Element => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { label: "Home", href: "#", active: true, onClick: () => scrollToSection('hero-section') },
    { label: "Why OTraze", href: "#", active: false, onClick: () => scrollToSection('why-otraze') },
    { label: "Features", href: "#", active: false, onClick: () => scrollToSection('features') },
    { label: "Compliance", href: "#", active: false, onClick: () => scrollToSection('clarity-text') },
    { label: "About", href: "#", active: false, onClick: () => scrollToSection('about') },
  ];

  return (
    <div className="relative w-full h-[863px]" style={{ backgroundColor: '#F1F5F8' }}>
      <header className="flex items-center justify-between px-10 py-[42px]">
        <img 
          src="/o--1--1.png" 
          alt="OTraze Logo" 
          className="h-8 w-auto"
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
            onClick={() => setIsDemoModalOpen(true)}
            className="h-[45px] px-6 bg-white text-[#20294c] border border-gray-300 rounded-[32px] hover:bg-gray-50"
          >
            <span className="font-medium text-[#20294c] text-lg tracking-[0] leading-[normal] [font-family:'Roboto',Helvetica]">
              Book a Demo
            </span>
          </Button>
          <Button className="h-[45px] w-[137px] bg-[#0582fb] rounded-[32px] flex items-center justify-center gap-2 px-[17px]">
            <span className="font-medium text-white text-xl tracking-[0] leading-[normal] [font-family:'Roboto',Helvetica]">
              Contact
            </span>
            <ArrowRightIcon className="w-6 h-6 text-white" />
          </Button>
        </div>
      </header>

      <main id="hero-section" className="flex flex-col items-center justify-center px-4 pt-[80px]">
        <div className="text-center max-w-5xl">
          <div className="mb-8">
            <h1 className="[font-family:'Roboto',Helvetica] font-bold text-[#0582fb] text-[100px] text-center tracking-[-3.00px] leading-[85px] mb-4">
              OT is complex. <br />
              Visibility shouldn&apos;t be.
            </h1>
            <div className="flex justify-center mb-8">
              <img
                className="w-6 h-1.5"
                alt="Span absolute"
                src="/span-absolute.svg"
              />
            </div>
          </div>

          <p className="[font-family:'Roboto',Helvetica] font-normal text-[#20294c] text-2xl text-center tracking-[0] leading-9 max-w-[900px] mx-auto mb-16">
            One CVE can lead to a complete shutdown. OTraze visualizes real attack paths in<br />
            critical infrastructure — from misconfigurations to exploitable access. Turn complexity into real-time insight.
          </p>

          <div className="flex flex-col items-center">
            <div className="[font-family:'Roboto',Helvetica] font-medium text-[#20294c] text-2xl text-center tracking-[0] leading-9 mb-6">
              Supported by
            </div>
            <img
              className="w-[200px] h-[60px] object-cover"
              alt="Image"
              src="/image-1.png"
            />
          </div>
        </div>
      </main>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
};
