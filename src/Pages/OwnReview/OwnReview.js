import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Authentication/Auth/Auth";
import ReviewRows from "./ReviewRows";
import './OwnReview.css';
import { toast } from 'react-toastify';
import useHelmet from "../../Helmet/useHelmet";

const MyReview = () => {
  useHelmet('My Review');

const {user, providerLogout}= useContext(authContext);
const [review, setReview]= useState([]);
const [del, setDel]=useState([]);

useEffect(()=>{
    fetch(`http://localhost:5000/revieww?email=${user?.email}`, {
      headers: {
          authorization: `Bearer ${localStorage.getItem('tourist-token')}`
      }
  })
      .then(res => {
          if (res.status === 401 || res.status === 403) {
              return providerLogout();
          }
          return res.json();
      })
      .then(data => {
        setReview(data);
      })
    .catch(err=>console.log(err))
},[del, providerLogout]);

const handleDelete=(id)=>{
  const msg=window.confirm('Want to delete this review?');
  if(msg){
    fetch(`http://localhost:5000/reviews/${id}`,{
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('tourist-token')}`
    }
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount>0){
        toast.error('Deleted Successfully',{
          icon: '❌',
          position: "top-center",
          autoClose: 1000,});
        const remaining= review.filter(re=>re._id !== id);
        setDel(remaining);
      }
    })
    .catch(err=>console.log(err))
  }
  };

  const handleChange=(e)=>{
    const field= e.target.name;
    const value= e.target.value;
    const newUser= {...del}
    newUser[field]=value;
    console.log(newUser);
    setDel(newUser);
  };

  const handleUpdate=(event)=>{
    event.preventDefault();
    console.log('Clicked');

    fetch(`http://localhost:5000/reviews/${del._id}`, {
      method: 'PATCH',
      headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('tourist-token')}`
      },
      body: JSON.stringify(del)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
              alert('updated');
              setDel(data);
          }
      })
  };



  return (
    <div>
      <div data-aos="fade-left" data-aos-delay="80" data-aos-duration="1000" className="grid md:hidden:overflow-x-scroll overflow-y-scroll Oheight flex-grow my-5 p-5 card bg-green-100 rounded-box mx-auto width">
        <table className="table-normal ">
          <thead>
            <tr className="">
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
                    handleUpdate={handleUpdate}
                    handleChange={handleChange}
                ></ReviewRows>) 
            }   
            
            
          </tbody>

        </table>
        <h1 className="text-center ">{review.length===0 && 'No Reviews Were Added'} </h1>

       
        
      </div>
    </div>
  );
};

export default MyReview;
