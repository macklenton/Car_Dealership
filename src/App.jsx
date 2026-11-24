import { Routes, Route } from "react-router-dom";

import Home from "./features/home/Home";
import Cars from "./features/cars/pages/Cars";
import Sidebar from "./components/dashboard/Sidebar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

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
            <div>Vehicle Details Page</div>
          </>
        }
      />
    </Routes>
  );
}

export default App;