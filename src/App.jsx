import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import Domain from "./pages/Domain";
import Hosting from "./pages/Hosting";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
