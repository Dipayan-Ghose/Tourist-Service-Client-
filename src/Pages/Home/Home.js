import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import './Home.css';
import LimitCard from "./LimitCard";

const Home = () => {
const getServices= useLoaderData();
const [slider, nextSlider]= useState(getServices[0]);
const [limitService, setLimitService]= useState([]);

const sliderClick=(index)=>{
    console.log('click');
    const slide=getServices[index];
    nextSlider(slide);
};

useEffect(()=>{
    fetch('http://localhost:5000/threeServices')
    .then(res=>res.json())
    .then(data=>setLimitService(data))
    .catch((error) => console.log(error))

},[])

  return (
    <div className="">
        <div className="justify-content-center mb-5" data-aos="fade-up" data-aos-delay="80" data-aos-duration="600">
            <img className="mx-auto widht mb-2" src={slider.image_url} width='500'></img>
            
            <div className="flex justify-center responsiveImg" data-aos="fade-left" data-aos-delay="80" data-aos-duration="1000">
            {
                getServices.map((service,i)=> <img
                className="m-1 border-2 border-black multiImg"
                key={service._id}
                src={service.image_url}
                onClick={()=> sliderClick(i)}
                alt=''
                ></img>)
            }
            </div>   
        </div>

        <div className="mt-3">
            {limitService.map(singleService=> <LimitCard
            key={singleService._id}
            singleService={singleService}
            ></LimitCard>)} 
        </div>
        <div className="mb-5" data-aos="fade-up" data-aos-delay="40" data-aos-duration="400">
            <button className="btn btn-primary w-48 mt-2"><Link to='/services'>See All</Link></button>
        </div>
    </div>
  );
};

export default Home;
