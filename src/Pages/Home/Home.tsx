import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import PageLinks from "./Components/PageLinks";
function Home() {
  useEffect((): void => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-screen bg-white font-myfont overflow-hidden">
      <Header />
      <main>
        <Hero />
        <PageLinks />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
