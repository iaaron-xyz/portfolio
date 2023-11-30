import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Actualiza el valor de scrollValue
      setScrollValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let classNav = "z-20 fixed w-full p-8";
  if (scrollValue > 10) {
    classNav += " nav-scroll";
  }

  return (
    <nav className={classNav}>
      <ul className='ml-auto flex justify-end'>
        <li className='w-32 text-center'>
          <a href='' className='mx-6 hover:font-bold relative'>
            HOME
          </a>
        </li>
        <li className='w-32 text-center'>
          <a href='' className='mx-6 hover:font-bold relative'>
            ABOUT
          </a>
        </li>
        <li className='w-32 text-center'>
          <a href='' className='mx-6 hover:font-bold relative'>
            PROJECTS
          </a>
        </li>
        <li className='w-32 text-center'>
          <a href='' className='mx-6 hover:font-bold relative'>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
