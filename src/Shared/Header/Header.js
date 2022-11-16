import React from 'react';
import menu from './menu.gif';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({user}) => {
    return (
        <div className=''>
          <div className="navbar rounded-b-lg bg-green-400 ">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn lg:hidden mx-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
      <li className='textDesign '><Link to='/'><a >Home</a></Link></li>
      <li className='textDesign'>
        <Link to='/services'><a>
          Services
        </a></Link>
      </li>
      <li className='textDesign'><Link to="/vision"><a>Our Vision</a></Link></li>
      <li className='textDesign'><Link to="/blog"><a> Blog</a></Link></li>
      <li className='textDesign'><Link to="/location"><a>Location</a></Link></li>
      </ul>
    </div>
      <Link to='/'><a className="btn glass normal-case text-xl text-green-900">Tourist Service</a>
</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal bg-green-400 rounded-box p-1 gap-1">
      <li className='textDesign '><Link to='/'><a>Home</a></Link></li>
      <li className='textDesign'>
        <Link to='/services'><a>
          Services
        </a></Link>
      </li>
      <li className='textDesign'><Link to="/vision"><a>Our Vision</a></Link></li>
      <li className='textDesign'><Link to="/blog"><a> Blog</a></Link></li>
      <li className='textDesign'><Link to="/location"><a>Location</a></Link></li>
    </ul>
  </div>
  <div className='navbar-end'>
  <div className="dropdown dropdown-end ">
  {
    user?
    <li className='textDesign'><Link to="/login"><a> Login</a></Link></li>
    :
   <div>
     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 ">
        <li className='textDesign'>
          <a className="justify-between">
            My Reviews
          </a>
        </li>
        <li className='textDesign '><Link to=''><a >Add Service</a></Link></li>
        <li className='textDesign'><a>Logout</a></li>
      </ul>
   </div>
  }
    


      
    </div>
  </div>
  
</div>

        </div>
    );
};

export default Header;