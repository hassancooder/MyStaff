import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
// import ComparisonTable from "./components/ComparisonTable";
import ComplianceFeatures from "./Components/ComplianceFeatures";
import UseCases from "./Components/UseCases";
import DocumentApproach from "./Components/DocumentApproach";
import SavingsCalculator from "./Components/SavingsCalculator";
import ProductModules from "./Components/ProductModules";
import Awards from "./Components/Awards";
import Footer from "../Comps/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import InfoSection from "./Components/InfoSection";
import Contact from "./Components/Contact";
function Pharmaceutical() {
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
        {/* <ComparisonTable /> */}
        <ComplianceFeatures />
        <UseCases />
        <DocumentApproach />
        <SavingsCalculator />
        <ProductModules />
        <Awards />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default Pharmaceutical;
