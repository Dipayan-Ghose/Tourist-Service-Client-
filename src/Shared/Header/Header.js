import React, { useContext } from "react";
import logo from "./logo.png";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Authentication/Auth/Auth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const { user, providerLogout } = useContext(authContext);
  const navigate= useNavigate();

  const handleLogout = () => {
    providerLogout()
      .then(() => {
        toast('Logging Out', {position: "top-center",
        autoClose: 1500});
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="">
      <div className="navbar rounded-b-lg bg-green-400 ">
        <div className="navbar-center ">
          <div className="dropdown">
            <label tabIndex={0} className="btn lg:hidden mx-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li className="textDesign ">
                <Link to="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="textDesign">
                <Link to="/services">
                  <a>Services</a>
                </Link>
              </li>
              <li className="textDesign">
                <Link to="/vision">
                  <a>Our Vision</a>
                </Link>
              </li>
              <li className="textDesign">
                <Link to="/blogs">
                  <a> Blog</a>
                </Link>
              </li>
              <li className="textDesign">
                <Link to="/location">
                  <a>Location</a>
                </Link>
              </li>

              {user ? (
                <div>
                  <li className="textDesign">
                    <a>My Reviews</a>
                  </li>
                  <li className="textDesign ">
                    <Link to="">
                      <a>Add Service</a>
                    </Link>
                  </li>
                  <li className="textDesign">
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                  <p className="text-center text-green-600">{user.displayName}</p>
                </div>
              ) : (
                <li >
                  <Link to="/login">
                    <button className=" textDesign">Login</button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="flex align-items-center">
            <div>
              <img className="logo lg:ml-3" src={logo} alt=""></img>
            </div>
            <div>
              <Link to="/">
                <a className="btn glass normal-case text-xl text-green-900 mx-5">
                  Tourist Service
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal bg-green-400 rounded-box p-1 gap-1">
            <li className="textDesign ">
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="textDesign">
              <Link to="/services">
                <a>Services</a>
              </Link>
            </li>
            <li className="textDesign">
              <Link to="/vision">
                <a>Our Vision</a>
              </Link>
            </li>
            <li className="textDesign">
              <Link to="/blogs">
                <a> Blog</a>
              </Link>
            </li>
            <li className="textDesign">
              <Link to="/location">
                <a>Location</a>
              </Link>
            </li>
          </ul>

          {user? (
            <div className=" flex">
             <ul className="menu menu-horizontal bg-green-400 rounded-box p-1 gap-1">
                <li className="textDesign">
                  <a className="">My Reviews</a>
                </li>
                <li className="textDesign ">
                  <Link to="">
                    <a>Add Service</a>
                  </Link>
                </li>
                <li className="textDesign">
                  <a onClick={handleLogout}>Logout</a>
                </li>
             </ul>
              <div className=" ml-5 ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL} />
                </div>
              </label>
              </div>
            </div>
          ) : (
            <li>
              <Link to="/login">
                <button className="btn  border-2 border-green-500 bg-green-400 hover:bg-green-500 textDesign">Login</button>
              </Link>
            </li>
          )}
          
        </div>
        <div className="navbar navbar-end lg:invisible">
        {
          user?
           <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
           <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
             <img src={user.photoURL} />
           </div>
         </label>
         :
         <p></p>
        }
        </div>
       
      </div>
      <ToastContainer
      />
    </div>
  );
};

export default Header;
