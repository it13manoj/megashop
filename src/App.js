import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import TopHead from "./Components/Header/TopHead"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";



import Index from "./Components/View/Index";
import Single from "./Components/View/Single";
function App() {
  return (
    <>
      <TopHead />
      <Header />
      <main id="main" >
        <Routes>

        <Route exact path="/" element={<Index />} />
        <Route exact path="/Single" element={<Single />} />

          {/* <Route exact path="/" element={<HeroSection />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/why" element={<Why />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/testimonial" element={<TeamSection />} />
          <Route exact path="/team" element={<TeamSection />} />
          <Route exact path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      <Footer />
    </>

  );
}

export default App;
