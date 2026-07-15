import Header from "./components/Header";
import Hero from "./components/Hero";
import CoursesSection from "./components/CoursesSection";
import FaqAccordion from "./components/FaqAccordion";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <CoursesSection />
      <FaqAccordion />
      <Footer />
    </main>
  );
}
