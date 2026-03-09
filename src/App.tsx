import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useCursorGlow } from "@/hooks/useCursorGlow";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const active = useActiveSection();
  const cursor = useCursorGlow();

  return (
    <>
      {/* Ambient cursor glow */}
      <div
        className="fixed pointer-events-none z-[9999] w-[360px] h-[360px] rounded-full bg-cursor-glow -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-100 max-[1024px]:hidden"
        style={{ left: cursor.x, top: cursor.y }}
      />

      <Sidebar active={active} onNav={scrollTo} />

      <main
        id="main"
        className="ml-[var(--width-sidebar)] max-[1024px]:ml-0 max-[1024px]:pb-[74px]"
      >
        <HeroSection onNav={scrollTo} />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>

      <MobileNav active={active} onNav={scrollTo} />
    </>
  );
}
