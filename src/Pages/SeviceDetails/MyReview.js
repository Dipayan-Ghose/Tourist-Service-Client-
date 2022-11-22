import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Authentication/Auth/Auth";
import { toast } from 'react-toastify';
import './ServiceDetails.css';

const MyReview = ({getDetails}) => {
 const {_id, name}= getDetails;
 const {user}=useContext(authContext);
   

 const handleOrder=(event)=>{
    event.preventDefault();
    const form= event.target;
    const name= user?.displayName || "No Name"
    const email= user?.email || 'Not Registered';
    const service= getDetails.name;
    const comment= form.comment.value;

    const addReview={
        serviceId: _id,
        name,
        email,
        service,
        comment
    };

    
      if(comment.length<2){
        toast.error('Please Add a Meaningful Comment',{
          position: "top-center",
          autoClose: 1200,});
    }
    else{
        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            if(data.acknowledged){
              toast.success('Review Added',{
                    position: "top-center",
                    autoClose: 1200,});
                form.reset();
                // window.location.reload();
            }
        })
        .catch(er=> console.log(er));


    }
    
};   

  return (
    <div className="">
      <form onSubmit={handleOrder}>
      <div className="card mx-auto bg-green-100 rounded-box my-5 p-5">
        <h1 className="text-2xl mb-5 text-green-700 font-bold text-center ">
          Add Your Review
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
          <input
            type="text"
            name="name"
            placeholder=""
            className="input input-bordered input-primary  w-48 max-w-xs input-sm"
            readOnly
            defaultValue={user?.displayName}
          />
          <input
            type="text"
            name="email"
            placeholder=""
            className="input input-bordered input-primary w-48 max-w-xs input-sm"
            readOnly
            defaultValue={user?.email}
          />
          <input
            type="text"
            name="serviceName"
            placeholder=""
            className="input input-bordered input-primary w-48 max-w-xs input-sm"
            readOnly
            defaultValue={`Service: ${name}`}
          />
        </div>
        <textarea
          name="comment"
          className="textarea textarea-primary w-full mt-5"
          placeholder="Comment"
        >
          
        </textarea>
        <div className="">
        <input type="submit" className="btn btn-primary mt-5 w-auto mx-auto " value="Add Your Review" />
        </div>
      </div>
      </form>
      
    </div>
  );
};

export default MyReview;

