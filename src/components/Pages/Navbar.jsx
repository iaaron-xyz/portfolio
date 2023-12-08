import { useState } from "react";

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
          <a href='' className='mx-6 hover:font-chillaxBold relative'>
            HOME
          </a>
        </li>
        <li className='w-32 text-center'>
          <a href='' className='mx-6 hover:font-chillaxBold relative'>
            ABOUT
          </a>
        </li>
        <li className='w-32 text-center'>
          <a href='' className='mx-6 hover:font-chillaxBold relative'>
            PROJECTS
          </a>
        </li>
        <li className='w-32 text-center'>
          <a href='' className='mx-6 hover:font-chillaxBold relative'>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
