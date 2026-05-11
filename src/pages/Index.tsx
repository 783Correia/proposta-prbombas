import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import DiagnosisSection from "@/components/sections/DiagnosisSection";
import CasesSection from "@/components/sections/CasesSection";
import StrategySection from "@/components/sections/StrategySection";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import AboutSection from "@/components/sections/AboutSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import FooterSection from "@/components/sections/FooterSection";
import CountdownBar from "@/components/CountdownBar";
import WelcomeScreen from "@/components/WelcomeScreen";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <WelcomeScreen onEnter={() => setShowWelcome(false)} />;
  }

  return (
    <main className="min-h-screen bg-background text-foreground pt-10">
      <CountdownBar />
      <HeroSection />
      <DiagnosisSection />
      <CasesSection />
      <StrategySection />
      <DifferentiatorsSection />
      <TimelineSection />
      <AboutSection />
      <InvestmentSection />
      <FooterSection />
    </main>
  );
};

export default Index;
