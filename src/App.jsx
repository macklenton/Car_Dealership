import { Routes, Route } from "react-router-dom";

import Home from "./features/home/Home";
import Cars from "./features/cars/pages/Cars";
import Sidebar from "./components/dashboard/Sidebar";
import CarDetails from "./features/cars/pages/CarDetails";
import CustomerDashboard from "./features/customer/pages/CustomerDashboard";
import SellerDashboard from "./features/seller/pages/SellerDashboard";

function App() {return (
    
      <div>
        <Sidebar />

        <Routes>
          <Route path="/" element={<SellerDashboard />} />
        </Routes>
      </div>
  );
}

export default App;