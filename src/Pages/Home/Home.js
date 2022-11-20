import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";
import LimitCard from "./LimitCard";

const Home = () => {
  const getServices = useLoaderData();
  const [slider, nextSlider] = useState(getServices[0]);
  const [limitService, setLimitService] = useState([]);
  const [like, setLike]= useState([4250]);

  const sliderClick = (index) => {
    console.log("click");
    const slide = getServices[index];
    nextSlider(slide);
  };

  useEffect(() => {
    fetch("http://localhost:5000/threeServices")
      .then((res) => res.json())
      .then((data) => setLimitService(data))
      .catch((error) => console.log(error));
  }, []);

  const rate=()=>{
    const giveLike= parseInt(like+1);
    setLike(giveLike);
    localStorage.setItem('like', JSON.stringify(like+1));

  }

  useEffect(()=>{
    const items=JSON.parse(localStorage.getItem('like'));
    if(items){
     setLike(items);
    }
   },[]);

  return (
    <div className="">
      <div
        className="justify-content-center mb-5 "
        data-aos="fade-up"
        data-aos-delay="80"
        data-aos-duration="800"
      >       
      <h2 class="absolute text-3xl text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">Want To Enjoy This Beauty?<br></br> <p className="text-sm">Check Our Services</p></h2>
        <img
          className="mx-auto widht mb-2  "
          src={slider.image_url}
          width="500"
          alt=''
        ></img>
        <div
          className="flex justify-center responsiveImg border-y-2 border-green-700 "
          // data-aos="fade-right"
          // data-aos-delay="80"
          // data-aos-duration="1000"
        >
          {getServices.map((service, i) => (
            <img
              className="m-1 border-2 border-black multiImg "
              key={service._id}
              src={service.image_url}
              onClick={() => sliderClick(i)}
              alt=""
            ></img>
          ))}
        </div>
      </div>

      <div className="mt-3">
        {limitService.map((singleService) => (
          <LimitCard
            key={singleService._id}
            singleService={singleService}
          ></LimitCard>
        ))}
      </div>
      <div
        className="mb-5"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="600"
      >
        <button className="btn btn-primary w-48 mt-2">
          <Link to="/services">See All</Link>
        </button>
      </div>

      <div  data-aos="zoom-in"
        data-aos-delay="80"
        data-aos-duration="1000">
      <div className="stats stats-vertical lg:stats-horizontal shadow-2xl statistics mt-5 mb-12">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg onClick={rate} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">{like}</div>
    <div className="stat-title">Press The Love Icon</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://picsum.photos/200/300" />
        </div>
      </div>
    </div>
    <div className="stat-value text-primary">96%</div>
    <div className="stat-title ">Positive Ratings</div>
    <div className="stat-desc ">35 Tour Completed</div>
  </div>
  
</div>
      </div>
      <div className="card w-96 mb-8 bg-green-100 shadow-lg mx-auto image-full" data-aos="flip-down"
        data-aos-delay="80"
        data-aos-duration="1000">
  <figure><img src="https://picsum.photos/400/220" alt="blog" /></figure>
  <div className="card-body">
    <h2 className="mb-3 text-2xl text-white font-bold text-center">Blogs</h2>
    <p className="text-white font-semibold text-center">Checkout Our Blogs Now!</p>
    <div className="card-actions justify-center">
      <Link to='/blogs'><button className="btn btn-primary ">Blogs</button></Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;
