import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './features/home/Home';


function APP() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Home />} />
        {/* Add your teammates' routes here later: */}
        {/* <Route path="/cars" element={<Cars />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default APP;