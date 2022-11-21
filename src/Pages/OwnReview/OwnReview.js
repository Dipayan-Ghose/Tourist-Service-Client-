import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Authentication/Auth/Auth";
import ReviewRows from "./ReviewRows";
import './OwnReview.css';

const MyReview = () => {
const {user}= useContext(authContext);
const [review, setReview]= useState([]);

useEffect(()=>{
    fetch(`http://localhost:5000/my_reviews?email=${user.email}`)
    .then(res=>res.json())
    .then(data=> setReview(data))
    .catch(err=>console.log(err))
},[user?.email])



  return (
    <div>
      
      <div className="grid flex-grow my-5 p-5 card bg-green-100 rounded-box mx-auto width">
        <table className="table ">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Service Name</th>
              <th>Comments</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className="">
            {
                review.map(row=> <ReviewRows 
                    key={row._id}
                    row={row}
                ></ReviewRows>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
