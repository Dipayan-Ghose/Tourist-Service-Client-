import React, { useContext, useState } from "react";
import { FcGoogle, FcDown } from "react-icons/fc";
import { FaArrowCircleDown, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css';
import { authContext } from "../../Authentication/Auth/Auth";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const navigate= useNavigate();
  const [error, setError]= useState('');
  const location = useLocation();
  const from= location.state?.from?.pathname || '/';

  const {providerLogin,signInUser}=useContext(authContext);
  const providerGoogle= new GoogleAuthProvider();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const form= event.target;
    const email= form.email.value;
    const password= form.password.value;
    signInUser(email,password)
    .then(res=>{
      const user = res.user;
      console.log(user);
      form.reset();
      setError('');
      navigate(from, {replace: true});
      toast.success('Logged In Successfully!');
    })
    .catch(error=>{
     console.error(error)
    setError(error.message);
    });

  };

  const googleSignIn = () => {
    providerLogin(providerGoogle)
      .then((res) => {
        const user = res.user;
        console.log(user);
        // navigate(from, {replace: true});
      })
      .catch((error) => console.error(error));
  };

 

  return (
    <div>
      <div className="hero width mx-auto  bg-green-100 rounded my-4">
        <div className="hero-content flex-col lg:flex-row-reverse alert alert-info mx-auto">
         
         <div className="card flex-shrink-0 width mx-auto  max-w-sm shadow-2xl bg-green-400">
            <h1 className="text-3xl font-bold text-white mt-2">Login Now!</h1>
            <form onSubmit={handleSubmit}>
            <div className="card-body p-4">
              <div className="form-control border-0">
                <label className="label">
                  <span className="label-text font-semibold text-white">Email</span>
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
                  <span className="label-text font-semibold text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name='password'
                  required

                />
                
                  <p className="font-semibold text-white  mt-1 mb-0 text-start ">
                    Don't have an account? <br></br>
                    <span className="font-semibold text-orange-500">
                      <Link to="/register"><a className="link">Please Register</a></Link>
                    </span>
                  </p>
                
              </div>
              <div className="form-control mt-1 border-0">
                <button className="hover:bg-green-800 w-48 rounded font-bold text-xl p-2 text-center bg-green-600 place-self-center mt-2 text-white ">Login</button>
              </div>
              <p className="text-danger mt-1">
                {error}
              </p> 
            </div>
            </form>
            <button onClick={googleSignIn} className="alert alert-info btn mt-0 btn-link buttonlink d-flex">
                <FcGoogle></FcGoogle> <span className="text-xl font-bold gg text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-600 mx-2"> Google</span>{" "}
              </button>
          </div>
          
          
  

          
        </div>
      </div>
    </div>
  );
};

export default Login;
