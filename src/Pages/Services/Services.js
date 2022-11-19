import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachService from './EachService';
import './Service.css';



const Services = () => {
const getServices= useLoaderData();
console.log(getServices);


    return (
        
        <div className='wid grid bg-scroll mx-auto justify-items-center  lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1'>
            {
                getServices.map(service=> <EachService 
                    key={service._id}
                    service={service}
                ></EachService>)
            }
        </div>
    );
};

export default Services;


 