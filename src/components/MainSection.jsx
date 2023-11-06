const MainSection = () => {
  return (
    <main className='flex flex-col w-full m-4 p-4'>
      <NavbarMainSection />
      <BannerSection />
      <NavbarCategoriesSection />
      <ProjectsSection />
    </main>
  );
};

const NavbarMainSection = () => {
  return (
    <nav className='flex'>
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
      <h1 className='text-8xl pb-4'>Artist. Developer. Scientist.</h1>
      <p className='pb-6'>
        I focus on clean, beautiful and simple to use interfaces.
      </p>
      <ul className='list-inline pb-6'>
        <li>
          <a href='http://'>Github</a>
        </li>
        <li>
          <a href=''>linkedIn</a>
        </li>
      </ul>
      <a href='mailto:' className='contact-button'>
        Contact me!
      </a>
    </header>
  );
};

const NavbarCategoriesSection = () => {
  return (
    <nav className='bg-red-400 flex flex-col items-center'>
      <h2 className='text-4xl mb-4'>My portfolio projects</h2>
      <ul className='list-inline'>
        <li>
          <button>Frontend</button>
        </li>
        <li>
          <button>3D Game Art</button>
        </li>
        <li>
          <button>Data science and Data Visualization</button>
        </li>
      </ul>
    </nav>
  );
};

const ProjectsSection = () => {
  return (
    <section className='bg-lime-400 grid grid-cols-4 gap-4 mt-4'>
      <div className='project'>Project 1</div>
      <div className='project'>Project 2</div>
      <div className='project'>Project 3</div>
      <div className='project'>Project 4</div>
      <div className='project'>Project 5</div>
      <div className='project'>Project 6</div>
    </section>
  );
};

export default MainSection;
