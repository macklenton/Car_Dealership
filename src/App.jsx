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

function App() {
  return <Cars />;
}

export default App;
