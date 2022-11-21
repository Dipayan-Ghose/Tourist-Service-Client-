import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Authentication/Auth/Auth';

const PrivateRoute = ({children}) => {
   const {user, loading}= useContext(authContext);
   const location= useLocation();
   if(loading){
    return <p>loading...</p>
   }
   if(user){
    return children;
   }
    return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default PrivateRoute;