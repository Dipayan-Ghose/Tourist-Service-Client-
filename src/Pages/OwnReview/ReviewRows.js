import React, { useContext, useState } from 'react';
import { authContext } from '../../Authentication/Auth/Auth';
import './OwnReview.css';

const ReviewRows = ({row,handleDelete}) => {
    const {user}= useContext(authContext);
    const {_id, name,email, comment,service}= row;
   

   
    return (
          
            
              <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{email}</div>
                  </div>
                </div>
              </td>
              <td>
                {service}
                <br />
              </td>
             
              {
              comment.length!==0 ?
              <td>{comment}</td>
              :
              <h1>No reviews were added</h1>
              }
              
              <th>
                <button className="btn btn-warning btn-xs mr-4">Edit Review</button>
                <button onClick={()=>handleDelete(_id)} className="btn btn-error btn-xs">Delete Review</button>
              </th>
            </tr>
                 
        
    );
};

export default ReviewRows;