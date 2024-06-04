import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useSelector(
    (state) => state.data.auth.isAuthenticated
  );
  return isAuthenticated ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
