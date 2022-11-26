import React, { useEffect, useState } from 'react';
import useHelmet from '../../Helmet/useHelmet';

const OurVision = () => {
    useHelmet('Our Achievments');
    const [like, setLike]= useState([4250]);

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
        
        <div>
<div
        className="text-center my-8"
        data-aos="zoom-in"
        data-aos-delay="80"
        data-aos-duration="1000"
      >
        <h1 className="text-3xl font-semibold text-green-800 ">
          Our Achievments
        </h1>
       
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
  </div>
    )
       
    
};

export default OurVision;