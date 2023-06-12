import React from "react";
import "./Home.css";
import ResponsiveAppBar from "../components/navbar/Navbar";
import Aboutus from "../components/aboutus/Aboutus";
import Destinations from "../components/Destinations";
import Footer from "../components/Footer";

export default function Home({ tours }) {
  return (
    <div>
      <Destinations tours={tours} />
      <Footer />
    </div>
  );
}
