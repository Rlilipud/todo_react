import React from "react";
import HomePage from "./pages/home/index";
import CreateTask from "./pages/create/index";
import Done from "./pages/Done";
import { Route, Routes } from "react-router";
import SignIn from "./pages/user/SignIn";
import SignUp from "./pages/user/SignUp";
import ProtectedRoute from "./components/Layout/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} /> 
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<ProtectedRoute element={<HomePage />} />} /> 
      <Route path="/create" element={<ProtectedRoute element={<CreateTask />} />} /> 
      <Route path="/done" element={<ProtectedRoute element={<Done />} />} /> 
    </Routes>
  );
}
