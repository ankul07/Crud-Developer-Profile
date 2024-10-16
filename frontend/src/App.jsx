import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Register from "./page/Register";
import Edit from "./page/Edit";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
};

export default App;
