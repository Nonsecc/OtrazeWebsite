import React from "react";
import { ActionGroupSection } from "./sections/ActionGroupSection/ActionGroupSection";
import { ClaritySection } from "./sections/ClaritySection/ClaritySection";
import { FeatureGridSection } from "./sections/FeatureGridSection/FeatureGridSection";
import { FeatureWrapperSection } from "./sections/FeatureWrapperSection/FeatureWrapperSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { InfoWrapperSection } from "./sections/InfoWrapperSection/InfoWrapperSection";
import { IntroSection } from "./sections/IntroSection/IntroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { BGPattern } from "../../components/ui/bg-pattern";

export const OTraze = (): JSX.Element => {
  return (
    <main className="bg-white w-full relative min-h-screen">
      <div className="w-full flex flex-col relative">
        <HeaderSection />
        <IntroSection />
        
        <MainContentSection />
        <ActionGroupSection />
        <ClaritySection />
        <InfoWrapperSection />
        <FeatureGridSection />
        <FeatureWrapperSection />
        <FooterSection />
      </div>
    </main>
  );
};
