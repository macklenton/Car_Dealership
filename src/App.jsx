import { Routes, Route } from "react-router-dom";

import Home from "./features/home/Home";
import Cars from "./features/cars/pages/Cars";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />

      {/* Temporary route until we create CarDetails */}
      <Route
        path="/cars/:id"
        element={<div>Vehicle Details Page</div>}
      />
    </Routes>
  );
}

export default App;