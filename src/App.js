import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState, useEffect } from "react";

export default function App() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://backend-crossover.onrender.com/tours");
        if (!res.ok) {
          throw new Error(res.error);
        }
        const parseRes = await res.json();
        console.log(parseRes);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home tours={tours} />} />
      </Routes>
    </div>
  );
}
