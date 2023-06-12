import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Navbar from "./components/navbar/Navbar";
import Aboutus from "./components/aboutus/Aboutus";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Aboutus />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
