import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/header/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skiils";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work"
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer  from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
// import Apps from "./components/gift/Apps";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        {/* <Apps /> */}
        <Work />
        
        <Testimonials />
        <Contact />
        
        
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
