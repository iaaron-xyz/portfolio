// import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ activePage, setActivePage }) => {
  // const [scrollValue, setScrollValue] = useState(0);

  // update scroll value if value has changed
  // const handleScroll = () => {
  //   setScrollValue(window.scrollY);
  // };
  // event listener for scroll action
  // window.addEventListener("scroll", handleScroll);

  // define classes depending on scroll value
  // let classNav = "z-20 fixed p-10 mt-12";
  // if (scrollValue > 10) {
  //   classNav += " nav-scroll";
  // }

  const itemClasses =
    "floating-navbar-items flex items-center justify-center w-32 h-16 mx-2 rounded-md hover:font-satoshiBlack";

  const itemClassesActivePage =
    " bg-black text-white hover:bg-gray-800 font-satoshiBlack";

  return (
    // nav container
    <nav className='floating-navbar shadow-lg z-20 rounded-lg fixed top-12 left-1/2 transform -translate-x-1/2 font-satoshiMedium p-2'>
      {/* Nav items */}
      <div className='flex'>
        <Link
          to='/'
          onClick={() => setActivePage("home")}
          className={
            activePage === "home"
              ? `${itemClasses + itemClassesActivePage}`
              : `${itemClasses}`
          }
        >
          HOME
        </Link>
        <Link
          to='about'
          onClick={() => setActivePage("about")}
          className={
            activePage === "about"
              ? `${itemClasses + itemClassesActivePage}`
              : `${itemClasses}`
          }
        >
          ABOUT
        </Link>
        <Link
          to='projects'
          onClick={() => setActivePage("projects")}
          className={
            activePage === "projects"
              ? `${itemClasses + itemClassesActivePage}`
              : `${itemClasses}`
          }
        >
          WORK
        </Link>
        <Link
          to='contact'
          onClick={() => setActivePage("contact")}
          className={
            activePage === "contact"
              ? `${itemClasses + itemClassesActivePage}`
              : `${itemClasses}`
          }
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
