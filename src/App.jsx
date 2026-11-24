import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/dashboard/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
import Cars from "./features/cars/pages/Cars";
import CarCard from "./components/cars/CarCard";
function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarCard/>} />
      </Routes>
   
  );
}

export default App;
