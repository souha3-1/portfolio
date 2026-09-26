import { motion } from "motion/react";
import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import { Marquee } from "../sections/Marquee";
import { ProcessSection } from "../sections/ProcessSection";
import { ServicesSection } from "../sections/ServicesSection";
import { WorkSection } from "../sections/WorkSection";

export function HomeView() {
  return (
    <motion.main
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <WorkSection />
      <Marquee />
      <ProcessSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </motion.main>
  );
}
