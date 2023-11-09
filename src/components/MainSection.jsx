const MainSection = () => {
  return (
    <main className='flex flex-col w-full m-4 p-4 justify-center'>
      <NavbarMain />
      <BannerSection />
    </main>
  );
};

const NavbarMain = () => {
  return (
    <nav className='navbar-main flex'>
      <button>Aaron</button>
      <ul className='list-inline ml-auto'>
        <li>
          <button>About</button>
        </li>
        <li>
          <button>Portfolio</button>
        </li>
        <li>
          <button>Personal projects</button>
        </li>
      </ul>
    </nav>
  );
};

const BannerSection = () => {
  return (
    <header className='p-4 my-8 flex flex-col items-center'>
      <h1 className='text-8xl mt-24'>Artist. Developer. Scientist.</h1>
      <p className='my-12'>
        I focus on clean, beautiful and simple to use interfaces.
      </p>
      <ul className='list-inline my-16'>
        <li>
          <a href=''>Github</a>
        </li>
        <li>
          <a href=''>linkedIn</a>
        </li>
        <li>
          <a href=''>Arstation</a>
        </li>
      </ul>
      <a href='mailto:' className='contact-button'>
        Contact me!
      </a>
    </header>
  );
};

export default MainSection;
