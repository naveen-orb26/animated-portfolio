import "./app.scss"
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Services from "./Components/services/Services";
import Parallax from "./Components/parallax/Parallax";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import React from "react";
import Cursor from "./Components/cursor/Cursor";
import TechCarousel from "./Components/techCarousel/TechCarousel";
import About from "./Components/about/About";



const App = () => {
  return (
  <div>
    <Cursor />
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    
    <section id="About">
      <About />
    </section>
    <section id="Services">
   
    <Parallax type="services"/>
    </section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section><TechCarousel/></section>
    <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>
  </div>
  );
};

export default App;
