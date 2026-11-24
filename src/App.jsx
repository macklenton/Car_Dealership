import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";
import Cars from "./features/cars/pages/Cars";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </BrowserRouter>
  );
import Cars from "./features/cars/pages/Cars";

function App() {
  return <Cars />;
}

export default App;