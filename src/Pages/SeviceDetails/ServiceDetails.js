import React from "react";
import { useLoaderData } from "react-router-dom";
import './ServiceDetails.css';

const ServiceDetails = () => {
  const getDetails = useLoaderData();
  console.log(getDetails);
  const { name, details, cost } = getDetails;
  return (
    <div className="width mx-auto ">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="my-5 p-5 grid flex-grow card bg-green-100 rounded-box ">
          <h1 className="text-2xl text-green-700 font-bold text-start ">Service Details</h1>
          <div>
            <h1 className="text-2xl text-green-700 text-center mt-4">All You Need To Know About <br></br>'{name}'</h1>
            <p className="text-start my-5">{details}</p>
            <h1 className="text-xl font-semibold text-green-600">Estimated Cost: {cost}Tk (It may changeable)</h1>
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="grid flex-grow  card bg-green-100 rounded-box place-items-center">
        <h1 className="font-2xl text-green-700 font-bold ">Review</h1>
            
            
            <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Zemlak, Daniel and Leannon
                        <br/>
                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    
                    </tbody>
                
                
                    
                </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
