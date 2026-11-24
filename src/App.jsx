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
