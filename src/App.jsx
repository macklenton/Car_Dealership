import { Routes, Route } from "react-router-dom";

import Home from "./features/home/Home";
import Cars from "./features/cars/pages/Cars";
import Sidebar from "./components/dashboard/Sidebar";
import CarDetails from "./features/cars/pages/CarDetails";
import CustomerDashboard from "./features/customer/pages/CustomerDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customer-dashboard" element={<CustomerDashboard/>}/>

      <Route
        path="/cars"
        element={
          <>
            <Sidebar />
            <Cars />
          </>
        }
      />
     

      <Route
        path="/cars/:id"
        element={
          <>
            <Sidebar />
            < CarDetails />
          </>
        }
      />
    </Routes>
  );
}

export default App;