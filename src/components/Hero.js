import React, { useEffect, useState } from 'react'
import "./Hero.css";

export default function Hero() {
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const res = await fetch("http://localhost:8086/tours%22");
    //         if (!res.ok) {
    //           throw new Error(res.error);
    //         }
    //         const parseRes = await res.json();
    //         console.log(parseRes);
    //       } catch (error) {
    //         console.log(error.message);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1 className="hero-title">EXPLORE</h1>
        <h4 className="hero-subtitle">
          And create Memories That Span Continents: Your Journey Starts Here
        </h4>
        <div className="input-wrapper">
          <input
            placeholder="  Search..."
            value={""}
            className="input-search"
          ></input>
          <button className="button-submit" type="submit">
            Go!
          </button>

          <button className="button1">Discover locations</button>
          <button className="button1">When you wanna go?</button>
        </div>
      </div>
    </div>
  );
}
