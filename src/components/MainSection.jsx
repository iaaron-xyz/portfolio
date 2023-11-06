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
  return <nav className='bg-yellow-500'>Main navbar</nav>;
};

const BannerSection = () => {
  return (
    <header className='bg-zinc-400'>
      <h1>Frontend developer</h1>
      <p>I focus on clean, beautiful and accesible interfaces.</p>
      <ul>
        <li>Github</li>
        <li>linkedIn</li>
      </ul>
    </header>
  );
};

const NavbarCategoriesSection = () => {
  return <nav className='bg-red-400'>Categories navbar</nav>;
};

const ProjectsSection = () => {
  return <section className='bg-lime-400'>Projects Section</section>;
};

export default MainSection;
