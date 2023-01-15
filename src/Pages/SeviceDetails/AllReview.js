import React, { useContext } from "react";
import { authContext } from "../../Authentication/Auth/Auth";

const AllReview = ({ eachReview }) => {
  const { _id, name, email, service, comment } = eachReview;
  const { user } = useContext(authContext);

  return (
    <tr className="h-[100px]">
      <td >
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 ">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold text-black">{name}</div>
            <div className="text-sm opacity-50 text-black">{email}</div>
          </div>
        </div>
      </td>
      <td className="text-orange-600">
        {comment}
        <br />
      </td>
    </tr>
  );
};

export default AllReview;
