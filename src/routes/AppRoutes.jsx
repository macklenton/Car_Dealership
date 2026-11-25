import { Routes, Route } from "react-router-dom";
import Cars from "../features/cars/pages/Cars";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/cars" element={<Cars />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;