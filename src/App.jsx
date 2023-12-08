import { Outlet } from "react-router-dom";
import Homepage from "./components/Pages/Homepage/Homepage";
import Navbar from "./components/Pages/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
