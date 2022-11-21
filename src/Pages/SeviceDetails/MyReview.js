import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Authentication/Auth/Auth";


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
        alert('Please Add a Meaningful Comment')
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
                alert('Review Added')
                form.reset();
            }
        })
        .catch(er=> console.log(er));

    }

};   

   

  return (
    <div>
      <form onSubmit={handleOrder}>
      <div className="card inputWidth mx-auto  bg-green-100 rounded-box m-5 p-5">
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
        <input type="submit" className="btn btn-primary mt-5 w-64 mx-auto " value="Add Your Review" />
      </div>
      </form>
    </div>
  );
};

export default MyReview;
