import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../Authentication/Auth/Auth';
import useHelmet from '../../Helmet/useHelmet';
import './Register.css';

const Register = () => {
  useHelmet('Register');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

const {registerUser, updateUserProfile}= useContext(authContext);
const [error, setError]= useState('');
const navigate=useNavigate();

const handleRegistration=(e)=>{
e.preventDefault();
const form= e.target;
const name= form.name.value;
const photo= form.url.value;
const email= form.email.value;
const password= form.password.value;
console.log(name, photo,email,password);

registerUser(email, password)
   .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        handleUpdate(name,photo);
        toast.success('Registered Successfully');
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      setError(error.message)
      });

const handleUpdate=(name, url)=>{
  const profile= {
    displayName: name,
    photoURL: url
  }
updateUserProfile(profile)
.then(()=>{})
.catch(error=> console.error(error))
};

};


    return (
        <div >
              <div className="hero lg:w-[490px] mx-auto bg-green-100 rounded my-4">
            <div className="card regWidth flex-shrink-0  shadow-2xl bg-green-400 mx-auto my-4">
            <h1 className="text-3xl text-white mt-2">Register Here</h1>
            <form onSubmit={handleRegistration}>
            <div className="card-body p-4">
            <div className="form-control border-0">
                <label className="label">
                  <span className="label-text" >Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="input input-bordered"
                  name='name'
                />
              </div>
              <div className="form-control border-0">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Photo Url"
                  className="input input-bordered"
                  name='url'
                />
              </div>
              <div className="form-control border-0">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name='email'

                  required
                />
              </div>
              <div className="form-control border-0">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name='password'

                  required
                />
               
              </div>
              <div className="form-control mt-1 border-0">
                <button className="hover:bg-green-800 w-48 rounded font-bold text-xl p-2 text-center bg-green-600 place-self-center mt-2 text-white ">Register</button>
              </div>
              <p className="text-danger my-1">{error}</p>
            </div>
            <p className=" font-semibold text-orange-500 mb-5">
                    Already have an account? <br></br>
                    <span> 
                      <Link to="/login" className='link'>Login Now</Link>
                    </span>
                  </p>
            </form>
            
          </div>
          </div>
          
        </div>
    );
};

export default Register;