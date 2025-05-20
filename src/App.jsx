import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SpeakersSection from "./components/SpeakersSection";
import CountdownTimer from "./components/CountdownTimer";
import Vsection from "./components/Vsection";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite">
      {/* <Hero /> */}
      <HeroSection />
      <CountdownTimer targetDate="2025-06-03T00:00:00" />
      <About />
      <Vsection />
      <SpeakersSection />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}