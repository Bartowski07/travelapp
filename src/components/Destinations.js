import React from "react";
import "./Destinations.css";
import { useState } from "react";

export default function Destinations({ tours }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? tours.length - 1 : prevIndex - 1
    );
  };

  const handleClickNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === tours.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderTours = () => {
    const slicedTours = [...tours, ...tours].slice(
      activeIndex,
      activeIndex + 6
    );
    return slicedTours.map((tour, index) => (
      <div className="tour-card" key={index}>
        <img src={tour.url} alt={tour.title} className="tour-image" />
        <div className="tour-info">
          <h3 className="tour-title">{tour.title}</h3>
          <p className="tour-rating">Rating: {tour.rating}</p>
        </div>
      </div>
    ));
  };
  return (
    <div className="pop-destinations">
      <div className="desttext">
        <div className="textleft">
          <h4>Our Destinations</h4>
          <h2>Popular Destinations</h2>
        </div>
        <div className="textright">
          <h5>
            Fruitcake wafer jelly-o carrot cake sugar plum. Chupa chups ice
            cream biscuit pie biscuit marzipan jelly. Dessert carrot cake
            croissant lemon drops biscuit soufflé.
          </h5>
        </div>
      </div>
      <div className="tour-container">
        <button className="prev-button" onClick={handleClickPrev}>
          &#8249;
        </button>

        {renderTours()}

        <button className="next-button" onClick={handleClickNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
}
