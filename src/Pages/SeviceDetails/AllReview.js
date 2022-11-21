import React, { useContext } from 'react';
import { authContext } from '../../Authentication/Auth/Auth';

const AllReview = ({eachReview}) => {
    const {_id, name, email, service, comment}=eachReview;
    const {user}= useContext(authContext);

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
    );
};

export default AllReview;

