import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import PetCategorySection from "@/components/PetCategorySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PetCategorySection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
