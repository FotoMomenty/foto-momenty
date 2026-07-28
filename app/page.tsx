import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Stats from "./components/Stats";
import Offer from "./components/Offer";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <WhyUs />

      <Stats />

      <Offer />

      <Portfolio />

      <Reviews />

      <Contact />

      <Footer />

      <FloatingButtons />

    </main>
  );
}