import React from "react";
import './EachService.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const EachService = ({service}) => {

    const {_id, name, image_url, cost, rating, details}=service;
    

  return (
    
    <div data-aos="fade-up" data-aos-delay="80" data-aos-duration="1000">
      <div className="card width m-2 bg-base-100 drop-shadow-2xl backgroundImg" >
      <PhotoProvider  maskOpacity={0.5} >
     <PhotoView src={image_url}>
     <figure>
          <img className="imgWidth p-2 mt-2" src={image_url} alt="" />
        </figure>
     </PhotoView>
     </PhotoProvider>
        
        <div className="card-body">
          <h2 className="text-2xl font-bold text-green-600 text-center">
           {name}
            {/* <div className="badge badge-secondary">
                
            </div> */}
          </h2>
          
            {
            details.length > 100 ? 
               <p className="text-start tracking-wide">{details.slice(0,100)+'...' } </p>
            
            : 
             <p>{details}</p> 
            
            }
         
          <div className="card-actions justify-between">
            <div className="badge badge-primary badge-outline p-3 text-green-700 " >Place Rating: {rating.number}</div>
            <div className="badge badge-primary badge-outline p-3 text-green-700"> Cost: {cost}Tk</div>
          </div>
          <button className="  w-28 rounded p-1 text-center bg-lime-700 place-self-center mt-2 text-white ">View Details</button>
        </div>
      </div>
    </div>
   
  );
};

export default EachService;

// return (
  
//     <div className="foo">
//       {images.map((item, index) => (
//         <PhotoView key={index} src={item}>
//           <img src={item} alt="" />
       
//       ))}
//     </div>
  
// );
