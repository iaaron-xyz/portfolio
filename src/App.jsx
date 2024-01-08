import { Outlet } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import { useState } from "react";

function App() {
  // assign first active page depending on path
  let path = "home";
  if (window.location.pathname.slice(1) !== "") {
    path = window.location.pathname.slice(1);
  }
  const [activePage, setActivePage] = useState(path);

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <Outlet activePage={activePage} setActivePage={setActivePage} />
    </>
  );
}

export default App;
