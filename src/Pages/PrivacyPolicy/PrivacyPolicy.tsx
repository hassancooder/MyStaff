import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "../Comps/Footer";
import PolicyComponent from "./Components/PolicyComponent";
function About() {
  useEffect((): void => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-screen bg-white font-myfont overflow-hidden">
      <Header />
      <main>
        <Hero />
        <PolicyComponent />
      </main>
      <Footer />
    </div>
  );
}

export default About;
