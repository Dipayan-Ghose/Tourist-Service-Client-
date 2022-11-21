import React, { useContext } from 'react';
import { authContext } from '../../Authentication/Auth/Auth';
import './OwnReview.css';

const ReviewRows = ({row}) => {
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
                        alt="Avatar Tailwind CSS Component"
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
              <td>{comment}</td>
              <th>
                <button className="btn btn-warning btn-xs mr-4">Update</button>
                <button className="btn btn-error btn-xs">Delete</button>
              </th>
            </tr>
        
    );
};

export default ReviewRows;