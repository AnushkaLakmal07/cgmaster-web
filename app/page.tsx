import Header from "./components/Header";
import Hero from "./components/Hero";
import CoursesSection from "./components/CoursesSection";
import FaqAccordion from "./components/FaqAccordion";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <CoursesSection />
      <FaqAccordion />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
