/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  const location = useLocation();
  console.log("pri", location);

  if (userInfo) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
