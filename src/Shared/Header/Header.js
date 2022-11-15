import React from 'react';
import menu from './menu.gif';
import './Header.css';

const Header = () => {
    return (
        <div>
          <div className="navbar bg-green-400">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn lg:hidden mx-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
      <li className='textDesign '><a >Home</a></li>
      <li className='textDesign'>
        <a>
          Services
        </a>
      </li>
      <li className='textDesign '><a>Reviews</a></li>
      <li className='textDesign'><a>Our Vision</a></li>
      <li className='textDesign'><a> Blog</a></li>
      <li className='textDesign'><a>Location</a></li>
      </ul>
    </div>
    <a className="btn glass normal-case text-xl text-green-900">Tourist Service</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal bg-green-400 rounded-box p-1">
      <li className='textDesign '><a >Home</a></li>
      <li className='textDesign'>
        <a>
          Services
        </a>
      </li>
      <li className='textDesign'><a >Reviews</a></li>
      <li className='textDesign'><a>Our Vision</a></li>
      <li className='textDesign'><a> Blog</a></li>
      <li className='textDesign'><a>Location</a></li>
    </ul>
  </div>
  <div className='navbar-end'>
  <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 ">
        <li className='textDesign'>
          <a className="justify-between">
            My Reviews
          </a>
        </li>
        <li className='textDesign'><a >Add Service</a></li>
        <li className='textDesign'><a>Logout</a></li>
      </ul>
    </div>
  </div>
  
</div>

        </div>
    );
};

export default Header;