// import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./assets/About";
import Contact from "./assets/Contact";
import Extras from "./assets/Extras";
import Head from "./assets/Head";
import Navbar from "./assets/Navbar";
import Portfolio from "./assets/Portfolio";

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="home">
        <Head />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <Extras />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
