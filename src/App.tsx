import { AnimatePresence } from "motion/react";
import { useCallback, useEffect } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ProjectDetail } from "./components/ProjectDetail";
import { useHashRoute } from "./hooks/useHashRoute";
import { HomeView } from "./views/HomeView";

export default function App() {
  const route = useHashRoute();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useCallback(
    (sectionId: string) => {
      if (sectionId === "top") {
        if (route.name !== "home") window.location.hash = "#/";
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (route.name !== "home") {
        window.location.hash = "#/";
        window.setTimeout(() => scrollToSection(sectionId), 120);
      } else {
        scrollToSection(sectionId);
      }
    },
    [route],
  );

  return (
    <div className="min-h-screen bg-cream text-ink">
      <CustomCursor />
      <div className="grain" aria-hidden="true" />
      <Navbar onNavigate={navigate} />
      <AnimatePresence mode="wait">
        {route.name === "home" ? (
          <HomeView key="home" />
        ) : (
          <ProjectDetail key={route.slug} slug={route.slug} />
        )}
      </AnimatePresence>
      {route.name === "home" && (
        <Footer onTop={() => navigate("top")} />
      )}
    </div>
  );
}
