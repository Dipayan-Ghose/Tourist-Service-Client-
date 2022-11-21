import React, { useContext } from 'react';
import { authContext } from '../../Authentication/Auth/Auth';

const AllReview = ({eachReview}) => {
    const {_id, name, email, service, comment}=eachReview;
    const {user}= useContext(authContext);

    return (
        <div>
             <div className="grid flex-grow my-5 p-5 card bg-green-100 rounded-box ">
          <h1 className="text-2xl text-green-700 font-bold text-start ">
              Review
            </h1>

              <div className="grid  ">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Comments</th>
                    </tr>
                  </thead>
                  <tbody>
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
                            <div className="text-sm opacity-50">
                              {email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {comment}
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            
          </div>  
        </div>
    );
};

export default AllReview;