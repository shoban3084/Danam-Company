import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import About from "./components/Home/About/About";
import Loader from "./components/Home/Loader";
import Contact from "./components/Home/Contact/Contact";
import Services from './components/Home/Slider/services';
import Industries from './components/Home/Slider/industries';
import Sap from './components/Home/DropDown/Sap';
import Oracle from './components/Home/DropDown/Oracle';
import SevAI from './components/Home/DropDown/SevAI';
import TestingPractice from "./components/Home/DropDown/TestingPractice";
import IndustriesDetails from './components/Home/Slider2/IndustriesDetails';
import './App.css';
import Careers from "./components/Home/Careers/Careers";
import Fico from "./components/Home/Feature/Fico";
import Hcm from "./components/Home/Feature/Hcm";
import SapSolution from "./components/Home/Service/SapSolution";
import Ifrs from "./components/Home/Service/Ifrs";
import Scm from "./components/Home/Service/Scm";
import Crm from "./components/Home/Service/Crm";

function App() {
  return (
    <Router>
      <RouteChangeHandler />
    </Router>
  );
}

function RouteChangeHandler() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Show loader when route changes
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/sap" element={<Sap />} />
        <Route path="/Oracle" element={<Oracle />} />
        <Route path="/SevAI" element={<SevAI />} />
        <Route path="/TestingPractice" element={<TestingPractice />} />
        <Route path="/industries/:industryName" element={<IndustriesDetails />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Fico" element={<Fico />} />
        <Route path="/Hcm" element={<Hcm />} />
        <Route path="/SapSolution" element={<SapSolution />} />
        <Route path="/Ifrs" element={<Ifrs />} />
        <Route path="/Scm" element={<Scm />} />
        <Route path="/Crm" element={<Crm />} />
      </Routes>
    </>
  );
}

export default App;
