import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllReview from "./AllReview";
import MyReview from "./MyReview";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const getDetails = useLoaderData();
  console.log(getDetails);
  const { name, details, cost } = getDetails;
  const [rev, setRev]= useState([]); 

  useEffect(()=>{
    fetch('http://localhost:5000/all_reviews')
    .then(res=>res.json())
    .then(data=>setRev(data))
    .catch(err=>console.log(err))
},[])



  return (
    <div >
      <div className="width mx-auto ">
        <div className="flex flex-col w-full flex-row ">
          
          <div className="my-5 p-5 grid flex-grow card bg-green-100 rounded-box ">
            <h1 className="text-2xl text-green-700 font-bold text-start ">
              Service Details
            </h1>
            <div>
              <h1 className="text-2xl text-green-700 text-center mt-4">
                All You Need To Know About <br></br>'{name}'
              </h1>
              <p className="text-start my-5">{details}</p>
              <h1 className="text-xl font-semibold text-green-600">
                Estimated Cost: {cost}Tk (It may changeable)
              </h1>
            </div>
          </div>


          <div> 
          {
            rev.map(eachReview=> <AllReview
              key={eachReview._id}
              eachReview={eachReview}
            ></AllReview>)
          }
          </div>  
      
        </div>
      </div>

      <MyReview getDetails={getDetails}></MyReview>

    </div>
  );
};

export default ServiceDetails;
