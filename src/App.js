import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Sitemap from "./utils/Sitemap";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
    <BrowserRouter>
      <Routes>
        <Route path="/sitemap.xml" element={<Sitemap />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
