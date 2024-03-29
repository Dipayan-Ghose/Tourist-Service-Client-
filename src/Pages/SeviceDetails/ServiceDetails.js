import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../../Authentication/Auth/Auth";
import AllReview from "./AllReview";
import MyReview from "./MyReview";
import "./ServiceDetails.css";
import axios from 'axios'
import useHelmet from "../../Helmet/useHelmet";


const ServiceDetails = () => {
  useHelmet('Service Details');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getDetails = useLoaderData();
  const{user}= useContext(authContext);
  const {_id, name, details, cost } = getDetails;
  const [rev, setRev] = useState([]);
const [service, setService]= useState([]);
  
  useEffect(() => {
    fetch(`https://tourist-service-server-ecru.vercel.app/review?serviceId=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setRev(data)
        
        })
      .catch((err) => console.log(err));
  }, [rev]);

  return (
    <div>
      <div className="detailswidth mx-auto " data-aos="fade-up" data-aos-delay="80" data-aos-duration="1000">
        <div className="flex flex-col w-full flex-row ">
          <div className="my-5 p-5 grid flex-grow card bg-green-100 rounded-box ">
            <h1 className="text-2xl text-green-700 font-bold text-center lg:text-start ">
              Service Details
            </h1>
            <div>
              <h1 className="text-2xl text-green-700 text-center mt-4">
                All You Need To Know About <br></br>'{name}'
              </h1>
              <p className="text-start text-black my-5">{details}</p>
              <h1 className="text-xl font-semibold text-green-600">
                Estimated Cost: {cost}Tk (It may changeable)
              </h1>
            </div>
          </div>

          <div>
            <div data-aos="fade-up" data-aos-delay="80" data-aos-duration="1000" className="grid flex-grow my-5 p-5 card bg-green-100 rounded-box ">
              <h1 className="text-2xl mb-3 text-green-700 font-bold text-start ">
                Reviews
              </h1>

              <div className="grid md:hidden:overflow-x-scroll  overflow-y-scroll Sheight">
                <table className="table-auto">
                  <thead className="bg-primary border-b">
                    <tr>
                      <th className="text-gray-800">Name</th>

                      <th className="text-gray-800">Comments</th>
                    </tr>
                  </thead>
                  <tbody className=" border">
                    {rev.map((eachReview) => (
                      <AllReview
                        key={eachReview._id}
                        eachReview={eachReview}
                      ></AllReview>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div data-aos="fade-up" data-aos-delay="80" data-aos-duration="1000" className="width mx-auto">
     {
        user?.uid?
        <MyReview getDetails={getDetails}></MyReview>
        :
        <div className="mb-8">
                  <h1 className="text-green-800 font-semibold text-center text-2xl my-5">Please login to add a review</h1>
          <Link to='/login'> <button  className="btn btn-primary">Login</button></Link>
          </div>
      }

     </div>
      
    </div>
  );
};

export default ServiceDetails;
