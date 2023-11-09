const ProjectsSection = () => {
  return (
    <>
      <ProjectsBanner />
      <NavbarCategoriesSection />
      <ProjectsGallery />
    </>
  );
};

const ProjectsBanner = () => {
  return <h1>Projects Banner</h1>;
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

const ProjectsGallery = () => {
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

export default ProjectsSection;
