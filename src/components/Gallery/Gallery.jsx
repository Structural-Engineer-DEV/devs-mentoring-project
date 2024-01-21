import React, { useState } from "react";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";

const Gallery = ({ photos }) => {
  const [activePhotoNum, setActivePhotoNum] = useState(0);

  const handleThumbnailClick = (num) => {
    setActivePhotoNum(num);
  };

  const handleArrowClick = (side) => {
    if (side === "left")
      setActivePhotoNum((prev) => (prev - 1 + photos.length) % photos.length);
    if (side === "right")
      setActivePhotoNum((prev) => (prev + 1) % photos.length);
  };
  return (
    <div className="flex flex-row justify-between max-h-[500px] my-4 w-max ">
      <div className="flex flex-col w-32 overflow-y-auto">
        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo}
            alt={`photo-${i}`}
            className={`my-1 box-border ${
              i === activePhotoNum ? "border-2 border-black" : ""
            }`}
            onClick={() => handleThumbnailClick(i)}
          />
        ))}
      </div>
      <div className="relative ml-5">
        <img
          src={photos[activePhotoNum]}
          alt={`photo-${activePhotoNum}`}
          className="h-full bg-transparent"
        />
        <SlArrowLeftCircle
          size={32}
          onClick={() => handleArrowClick("left")}
          className="left-0 -translate-x-full top-1/2 absolute active:translate-y-1"
        />
        <SlArrowRightCircle
          size={32}
          onClick={() => handleArrowClick("right")}
          className="right-0 translate-x-full top-1/2 absolute active:translate-y-1"
        />
      </div>
    </div>
  );
};

export default Gallery;
