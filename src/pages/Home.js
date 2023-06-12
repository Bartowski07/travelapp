import React from "react";
import "./Home.css";
import ResponsiveAppBar from "../components/navbar/Navbar";
import Aboutus from "../components/aboutus/Aboutus";

export default function Home() {
  return (
    <div>
      
      <ResponsiveAppBar />
      <Aboutus />
      <h1>TRAVEL APP</h1>
    </div>
  );
}
