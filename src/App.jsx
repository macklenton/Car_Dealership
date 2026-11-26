import { Routes, Route } from "react-router-dom";
import Contact from "./features/contact/Contact";
import Home from "./features/home/Home";
import Cars from "./features/cars/pages/Cars";
import CarDetails from "./features/cars/pages/CarDetails";
import Checkout from "./features/checkout/pages/Checkout";
import Sidebar from "./components/dashboard/Sidebar";
import OrderSuccess from "./features/checkout/pages/OrderSuccess";
import CustomerDashboard from "./features/customer/pages/CustomerDashboard";
import Login from "./features/auth/pages/Login";
import SellerDashboard from "./features/seller/pages/SellerDashboard";
import Register from "./features/auth/pages/Register";
import RoleRoute from "./features/auth/RoleRoute";
import ProtectedRoute from "./features/auth/ProtectedRoute";
function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Cars Routes */}
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
            <CarDetails />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/customer-dashboard"
        element={
          <RoleRoute allowedRoles={["customer"]}>
            <CustomerDashboard />
          </RoleRoute>
        }
      />
      {/* Seller Protected Route */}
      <Route
        path="/seller-dashboard"
        element={
          <RoleRoute allowedRoles={["seller"]}>
            <SellerDashboard />
          </RoleRoute>
        }
      />{" "}
      <Route
        path="*"
        element={
          <h1 className="text-center text-2xl mt-20">404 - Page Not Found</h1>
        }
      />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/order-success"
        element={
          <ProtectedRoute>
            <OrderSuccess />
          </ProtectedRoute>
        }
      />
            <Route path="/contact" element={<Contact />} />

    </Routes>
  );
}

export default App;
