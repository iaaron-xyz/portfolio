// import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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

  return (
    // nav container
    <nav className='nav-scroll bg-sa z-20 fixed bottom-24 left-1/2 transform -translate-x-1/2 p-8 font-satoshiMedium'>
      {/* Nav items */}
      <ul className='flex text-slate-200'>
        <li className='w-32 text-center'>
          <Link to='/' className='mx-6 hover:font-satoshiBold relative'>
            HOME
          </Link>
        </li>
        <li className='w-32 text-center'>
          <Link to='about' className='mx-6 hover:font-satoshiBold relative'>
            ABOUT
          </Link>
        </li>
        <li className='w-32 text-center'>
          <Link to='projects' className='mx-6 hover:font-satoshiBold relative'>
            PROJECTS
          </Link>
        </li>
        <li className='w-32 text-center'>
          <Link to='contact' className='mx-6 hover:font-satoshiBold relative'>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
