import React from "react";
import "./Home.css";

const LimitCard = ({ singleService }) => {
  const { image_url, name, details } = singleService;

  return (
    <div>
      <div
        className="flex justify-center"
        data-aos="fade-right"
        data-aos-delay="80"
        data-aos-duration="700"
      >
        <div className="card lg:card-side  bg-base-100 shadow-2xl limitCardWidth m-2">
          <figure>
            <img className="imgWidth p-1 " src={image_url} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold text-green-600 text-center">{name}</h2>
            {details.length > 100 ? (
              <p>{details.slice(0, 100) + ".."} </p>
            ) : (
              <p>{details}</p>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LimitCard;
