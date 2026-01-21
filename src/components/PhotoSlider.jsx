import React, { useState, useEffect } from "react";
import "./PhotoSlider.css";

const photos = [
  "/images/IMG_2797.JPG",
  "/images/IMG_3327.JPG",
  "/images/IMG_3756.JPG",
  "/images/IMG_2893.JPG",
  "/images/IMG_2969.JPG",
  "/images/IMG_3026.JPG",
];

const PhotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Changer toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${currentIndex * 33.3333}%)`,
        }}
      >
        {photos.concat(photos.slice(0, 3)).map((photo, index) => (
          <div key={index} className="slider-item">
            <img src={photo} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
