import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Authentication/Auth/Auth";
import ReviewRows from "./ReviewRows";
import './OwnReview.css';
import { toast } from 'react-toastify';
import useHelmet from "../../Helmet/useHelmet";

const MyReview = () => {
  useHelmet('My Review');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

const {user, providerLogout}= useContext(authContext);
const [review, setReview]= useState([]);
const [del, setDel]=useState([]);

useEffect(()=>{
    fetch(`https://tourist-service-server-ecru.vercel.app/revieww?email=${user?.email}`, {
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
    fetch(`https://tourist-service-server-ecru.vercel.app/reviews/${id}`,{
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

    fetch(`https://tourist-service-server-ecru.vercel.app/reviews/${del._id}`, {
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
      <div data-aos="fade-left" data-aos-delay="80" data-aos-duration="1000" className="grid md:hidden:overflow-x-scroll overflow-y-scroll lg:h-[500px] Oheight flex-grow my-8 lg:mb-48 p-5 card bg-green-100 rounded-box mx-auto ownRevWidth">
        <table className="table-normal ">
          <thead>
            <tr className="text-black">
              <th>User Name</th>
              <th>Service Name</th>
              <th>Comments</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className="text-black">
       

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
      <input type="checkbox" id="updateModal" className="modal-toggle" />
        <div className="modal modal-middle ">
          <div className="modal-box modalHeight" >
            <label
              htmlFor="updateModal"
              className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">
              {/* Want to edit {service}'s review? */}
            </h3>
            <p className="py-4">
              <div className="">
              <form onSubmit={handleUpdate}>
                  <div className="card mx-auto bg-green-100 rounded-box my-5 p-5">
                    <h1 className="text-2xl mb-5 text-green-700 font-bold text-center ">
                      Edit Review
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
                      <input
                        type="text"
                        
                        placeholder=""
                        className="input input-bordered input-primary w-48 max-w-xs input-sm"
                        readOnly
                        defaultValue={user?.email}
                      />
                      <input
                        type="text"
                        placeholder=""
                        className="input input-bordered input-primary w-48 max-w-xs input-sm"
                        readOnly
                        // defaultValue={`Service: ${service}`}
                      />
                    </div>
                    <textarea
                    onChange={handleChange}
                      name="comment"
                      className="textarea textarea-primary w-full mt-5"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                  <div className="modal-action">
                    <label
                      type="submit"
                      htmlFor="updateModal"
                      className="btn btn-primary"
                    >
                      Update
                    </label>
                  </div>
               </form>
              </div>
            </p>
          </div>
        </div>
      
    </div>
  );
};

export default MyReview;
