import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Authentication/Auth/Auth";
import ReviewRows from "./ReviewRows";
import './OwnReview.css';

const MyReview = () => {
const {user}= useContext(authContext);
const [review, setReview]= useState([]);
const [del, setDel]=useState([]);

useEffect(()=>{
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=> setReview(data))
    .catch(err=>console.log(err))
},[del]);

const handleDelete=(id)=>{
  const msg=window.confirm('Want to delete this service?');
  if(msg){
    fetch(`http://localhost:5000/reviews/${id}`,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount>0){
        alert('Deleted');
        const remaining= review.filter(re=>re._id !== id);
        setDel(remaining);
      }
    })
    .catch(err=>console.log(err))
  }
  };



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
                    handleDelete={handleDelete}
                ></ReviewRows>) 
                
            
            }
          </tbody>
        </table>
       
        
      </div>
    </div>
  );
};

export default MyReview;
