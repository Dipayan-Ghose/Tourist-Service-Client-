import React from "react";
import "./Home.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";


const LimitCard = ({ singleService }) => {
  const {_id, image_url, name, details, rating, cost } = singleService;

  return (
    <div>
      <div
        className="flex justify-center "
        data-aos="fade-up"
        data-aos-delay="80"
        data-aos-duration="1000"
      >
        <div className="card lg:card-side  bg-base-100 shadow-2xl  limitCardWidth m-3">
        <PhotoProvider  maskOpacity={0.5} >
     <PhotoView src={image_url}>
          <figure>
            <img className="imgWidth p-1 " src={image_url} alt="Album" />
          </figure>
          </PhotoView>
     </PhotoProvider>
          <div className="card-body">
            <h2 className="text-2xl font-bold text-green-600 text-center">{name}</h2>
            {details.length > 100 ? (
              <p className="text-black">{details.slice(0, 100) + ".."} </p>
            ) : (
              <p>{details}</p>
            )}
            <div className="card-actions justify-between">
            <div className="badge badge-primary badge-outline p-3 text-green-700 " >Place Rating: {rating.number}</div>
            <div className="badge badge-primary badge-outline p-3 text-green-700"> Cost: {cost}Tk</div>
          </div>
          <Link to={`services/${_id}`}><button className="w-40  btnView p-2 text-center bg-green-500 place-self-center mb-2 text-white ">View Details</button>
</Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LimitCard;
