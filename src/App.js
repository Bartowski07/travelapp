import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
