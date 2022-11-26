import React, { useContext, useState } from "react";
import { authContext } from "../../Authentication/Auth/Auth";
import "./OwnReview.css";
import { FcDeleteRow } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const ReviewRows = ({ row, handleDelete, handleUpdate,handleChange }) => {
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
        <label htmlFor="my-modal-6" className="btn btn-warning btn-xs mr-4">
          <FaEdit className="mr-1"></FaEdit>Edit Review
        </label>
        {/* The button to open modal */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-middle ">
          <div className="modal-box modalHeight" >
            <label
              htmlFor="my-modal-6"
              className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">
              Want to edit {service}'s review?
            </h3>
            <p className="py-4">
              <div className="">
              <form onSubmit={handleUpdate}>
                  <div className="card mx-auto bg-green-100 rounded-box my-5 p-5">
                    <h1 className="text-2xl mb-5 text-green-700 font-bold text-center ">
                      Edit Review
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
                      <input
                        type="text"
                        
                        placeholder=""
                        className="input input-bordered input-primary w-48 max-w-xs input-sm"
                        readOnly
                        defaultValue={user?.email}
                      />
                      <input
                        type="text"
                        placeholder=""
                        className="input input-bordered input-primary w-48 max-w-xs input-sm"
                        readOnly
                        defaultValue={`Service: ${service}`}
                      />
                    </div>
                    <textarea
                    onChange={handleChange}
                      name="comment"
                      className="textarea textarea-primary w-full mt-5"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                  <div className="modal-action">
                    <label
                      type="submit"
                      htmlFor="my-modal-6"
                      className="btn btn-primary"
                    >
                      Update
                    </label>
                  </div>
               </form>
              </div>
            </p>
          </div>
        </div>
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
