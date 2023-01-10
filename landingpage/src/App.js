import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About'
import Contacts from './components/Contacts'
import CustomError from './components/CustomError'
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="*" element={<CustomError />} />
      </Routes>
    </>
  );
}

export default App;
