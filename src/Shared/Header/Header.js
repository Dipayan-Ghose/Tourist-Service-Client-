import React, { useContext } from "react";
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
        toast.success('Logging Out', {position: "top-center",
        autoClose: 1500});
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="sticky top-0 z-50 ">
      <div className="navbar rounded-b-lg bg-green-400 ">
        <div className="navbar-center ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-primary lg:hidden mx-3">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box menuWidth "
            >
              <li className="textDesign fs-xl">
                <Link to="/">
                  <a className="color">Home</a>
                </Link>
              </li>
              <li className="textDesign ">
                <Link to="/services">
                  <a>Places</a>
                </Link>
              </li>
              <li className="textDesign">
                <Link to="/vision">
                  <a>Achievments</a>
                </Link>
              </li>
              <li className="textDesign ">
                <Link to="/blogs">
                  <a> Blog</a>
                </Link>
              </li>
              

              {user ? (
                <div>
                  <li className="textDesign ">
                  <Link to="/myReview">
                <a className="">My Reviews</a>
              </Link>
                  </li>
                  <li className="textDesign ">
                    <Link to="/addService">
                      <a>Add Places</a>
                    </Link>
                  </li>
                  <li className="textDesign">
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                  <p className="text-center text-green-600">Hello, {user.displayName}</p>
                </div>
              ) : (
                <li >
                  <Link to="/login">
                    <button className=" textDesign hover-bordered">Login</button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="flex align-items-center">
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
          <ul className="menu menu-horizontal bg-green-400 rounded-box  gap-1">
            <li className="textDesign ">
              <Link to="/">
                <a className="color">Home</a>
              </Link>
            </li>
            <li className="textDesign">
              <Link to="/services">
                <a className="color">Places</a>
              </Link>
            </li>
            <li className="textDesign">
              <Link to="/vision">
                <a className="color">Achievments</a>
              </Link>
            </li>
            <li className="textDesign">
              <Link to="/blogs">
                <a className="color"> Blog</a>
              </Link>
            </li>
           
          </ul>

          {user? (
            <div className=" flex ">
             <ul className="menu menu-horizontal bg-green-400 rounded-box p-1 gap-1">
                <li className="textDesign">
                <Link to="/myReview">
                <a className="color">My Reviews</a>
              </Link>
                 
                </li>
                <li className="textDesign ">
                  <Link to="/addService">
                    <a className="color">Add Places</a>
                  </Link>
                </li>
                <li className="textDesign">
                  <a onClick={handleLogout} className="color">Logout</a>
                </li>
             </ul>
              <div className=" ml-5 ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                <div className="w-24 lg:mt-1 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img alt={user.displayName} src={user.photoURL} />
                </div>
              </label>
              </div>
              <h1 className="ml-5 lg:mt-3 textDesign thisName">WELCOME, {user?.displayName}</h1>

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
             <img src={user?.photoURL} alt={user?.displayName}/>
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
