import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollValue, setScrollValue] = useState(0);

  // update scroll value if value has changed
  const handleScroll = () => {
    setScrollValue(window.scrollY);
  };
  // event listener for scroll action
  window.addEventListener("scroll", handleScroll);

  // define classes depending on scroll value
  let classNav = "z-20 fixed w-full p-10";
  if (scrollValue > 10) {
    classNav += " nav-scroll";
  }

  return (
    <nav className={`${classNav} font-chillaxMedium`}>
      <ul className='ml-auto flex justify-end'>
        <li className='w-32 text-center'>
          <Link to='/' className='mx-6 hover:font-chillaxBold relative'>
            HOME
          </Link>
        </li>
        <li className='w-32 text-center'>
          <Link to='about' className='mx-6 hover:font-chillaxBold relative'>
            ABOUT
          </Link>
        </li>
        <li className='w-32 text-center'>
          <Link to='projects' className='mx-6 hover:font-chillaxBold relative'>
            PROJECTS
          </Link>
        </li>
        <li className='w-32 text-center'>
          <Link to='contact' className='mx-6 hover:font-chillaxBold relative'>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
