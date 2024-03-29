import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import useHelmet from "../../Helmet/useHelmet";
import EachService from "./EachService";
import "./Service.css";

const Services = () => {
  useHelmet('Services');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getServices = useLoaderData();
  console.log(getServices);

  return (
    <div>
      <div
        className="text-center mx-auto my-8 w-80 lg:w-full"
        data-aos="zoom-in"
        data-aos-delay="80"
        data-aos-duration="1000"
      >
        <h1 className="text-3xl font-semibold text-green-800 ">
          Let's Checkout Our Visited Places
        </h1>
        <p className="text-green-700 mt-1">
          WE ARE HERE TO MAKE YOUR LIFE MORE EASIER.<br></br> BRING YOUR HAND TO
          US & ENJOY THE BEAUTY OF BANGLADESH.
        </p>
      </div>

      <div className="wid grid bg-scroll mx-auto justify-items-center  lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
        {getServices.map((service) => (
          <EachService key={service._id} service={service}></EachService>
        ))}
      </div>
    </div>
  );
};

export default Services;
