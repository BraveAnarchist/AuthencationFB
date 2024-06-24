import { useState } from "react";

import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Registration/>} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;