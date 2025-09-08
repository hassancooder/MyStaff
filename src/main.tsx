import { createRoot } from "react-dom/client";
import Home from "./Pages/Home/Home.tsx";
import About from "./Pages/About/About.tsx";
import Manufacturing from "./Pages/Manufacturing/Manufacturing.tsx";
import HealthCare from "./Pages/HealthCare/HealthCare.tsx";
import Pharmaceutical from "./Pages/Pharmaceutical/Pharmaceutical.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/pharmaceutical" element={<Pharmaceutical />} />
      </Routes>
    </BrowserRouter>
  </>
);
