import React from "react";
import HomePage from "./pages/home/home";
import CreateTask from "./pages/create/create";
import Done from "./pages/Done";
import { Route, Routes } from "react-router";

export default function App() {
  return (
      <Routes>
        <Route element={<HomePage />} path="/" /> 
        <Route element={<CreateTask />} path="/create" /> 
        <Route element={<Done />} path="/done" /> 
      </Routes>
  );
}
