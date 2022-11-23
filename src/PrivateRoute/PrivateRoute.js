import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Authentication/Auth/Auth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return <div className="flex justify-center items-center space-x-2">
        <div class="
      spinner-border
      animate-spin
      inline-block
      w-8
      h-8
      border-4
      rounded-full
      text-green-500"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default PrivateRoute;
