import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ComparisonTable from "./components/ComparisonTable";
import DocumentApproach from "./components/DocumentApproach";
import SavingsCalculator from "./components/SavingsCalculator";
import ProductModules from "./components/ProductModules";
import Awards from "./components/Awards";
import Impact from "./components/Impact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import InfoSection from "./components/InfoSection";
function App() {
  useEffect((): void => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-screen bg-white font-myfont overflow-hidden">
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <Features />
        <ComparisonTable />
        <DocumentApproach />
        <SavingsCalculator />
        <ProductModules />
        <Awards />
      </main>
      <Impact />
      <Footer />
    </div>
  );
}

export default App;
