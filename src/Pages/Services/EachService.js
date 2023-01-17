import React from "react";
import './EachService.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";


const EachService = ({service}) => {

    const {_id, name, image_url, cost, rating, details}=service;
    

  return (
    
    <div className="flex justify-center" data-aos="fade-up" data-aos-delay="80" data-aos-duration="1000">
      <div className="card lg:w-[400px] m-3 bg-base-100 drop-shadow-2xl backgroundImg" >
      <PhotoProvider  maskOpacity={0.5} >
     <PhotoView src={image_url}>
     <figure>
          <img className="imgWidth p-2" src={image_url} alt="" />
        </figure>
     </PhotoView>
     </PhotoProvider>
        
        <div className="card-body">
          <h2 className="text-3xl font-bold text-green-600 text-center">
           {name}
            
          </h2>
          
            {
            details.length > 100 ? 
               <p className="text-start text-black tracking-wide">{details.slice(0,100)+'...' } </p>
            
            : 
             <p>{details}</p> 
            
            }
         
          <div className="flex justify-between flex-row">
            <div className="badge badge-outline p-3 text-green-800 " >Rating: {rating.number}</div>
            <div className="badge badge-outline p-3 text-green-800  lg:ml-5"> Cost: {cost}Tk</div>
          </div>
            <Link to={`/services/${_id}`}><button className="w-40 rounded p-2 text-center bg-lime-700 place-self-center mt-2 text-white ">View Details</button>
</Link>
        </div>
      </div>
    </div>
   
  );
};

export default EachService;

