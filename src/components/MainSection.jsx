const MainSection = () => {
  return (
    <main className='flex flex-col w-full m-4 p-4'>
      <NavbarMainSection />
      <HeaderSection />
      <NavbarCategoriesSection />
      <ProjectsSection />
    </main>
  );
};

const NavbarMainSection = () => {
  return <nav className='bg-gray-400'>Main navbar</nav>;
};

const HeaderSection = () => {
  return <header className='bg-zinc-400'>Header Section</header>;
};

const NavbarCategoriesSection = () => {
  return <nav className='bg-red-400'>Categories navbar</nav>;
};

const ProjectsSection = () => {
  return <section className='bg-lime-400'>Projects Section</section>;
};

export default MainSection;
