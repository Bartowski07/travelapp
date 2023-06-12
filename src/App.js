import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/navbar/Navbar";
import Aboutus from "./components/aboutus/Aboutus";

export default function App() {
  const tours = [
    {
      title: "Immerse into Falls",
      rating: 4.5,
      price: 500,
      description:
        "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
      url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
    },
    {
      title: "2",
      rating: 4.5,
      price: 500,
      description:
        "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
      url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
    },
    {
      title: "3",
      rating: 4.5,
      price: 500,
      description:
        "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
      url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
    },
    {
      title: "4",
      rating: 4.5,
      price: 500,
      description:
        "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
      url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
    },
    {
      title: "Immerse into Falls",
      rating: 4.5,
      price: 500,
      description:
        "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
      url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
    },
    {
      title: "Immerse into Falls",
      rating: 4.5,
      price: 500,
      description:
        "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
      url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
    },
    {
      title: "5",
      rating: 4.5,
      price: 500,
      description:
        "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
      url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
    },
    {
      title: "6",
      rating: 4.5,
      price: 500,
      description:
        "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
      url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
    },
    {
      title: "7",
      rating: 4.5,
      price: 500,
      description:
        "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
      url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
    },
    {
      title: "8",
      rating: 4.5,
      price: 500,
      description:
        "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
      url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Aboutus />
      <Routes>
        <Route path="/" element={<Home tours={tours} />} />
      </Routes>
    </div>
  );
}
