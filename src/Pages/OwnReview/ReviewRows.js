import React, { useContext, useState } from "react";
import { authContext } from "../../Authentication/Auth/Auth";
import "./OwnReview.css";
import { FcDeleteRow } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const ReviewRows = ({ row, handleDelete, handleUpdate,handleChange, updateModal }) => {
  const { user } = useContext(authContext);
  const { _id, name, email, comment, service } = row;

  

  return (
    <tr className=" ">
      <td className=""> 
        <div className="flex align-item-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={user?.photoURL} alt="" />
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
      <td>
        {comment}
        <br />
      </td>

      <th className="flex flex-nowrap ">
        <label htmlFor="updateModal" className="btn btn-warning btn-xs mr-4">
          <FaEdit className="mr-1"></FaEdit>Edit Review
        </label>
       
       {/* modal Body */}

        <label
          onClick={() => handleDelete(_id)}
          className="btn btn-error btn-xs align-center"
        >
          <FcDeleteRow className="mr-1"></FcDeleteRow> Delete Review
        </label>
      </th>
    </tr>
  );
};

export default ReviewRows;
