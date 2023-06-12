import React from "react";
import "./Home.css";
import Destinations from "../components/Destinations";

export default function Home({ data }) {
  return (
    <div>
      <h1>TRAVEL APP</h1>
      <Destinations data={data} />
    </div>
  );
}
