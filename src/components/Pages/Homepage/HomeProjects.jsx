const HomeProjects = () => {
  return (
    <section className='bg-slate-100 py-36'>
      <HomeProjectsTitle />
      <HomeProjectsWorks />
      <HomeProjectsMore />
    </section>
  );
};

const HomeProjectsTitle = () => {
  return (
    <div>
      <h2 className='text-7xl mb-24 pl-24'>Work & Projects</h2>
    </div>
  );
};

const HomeProjectsWorks = () => {
  return (
    <div className='flex flex-col'>
      <ProjectLeftToRight />
      <ProjectRightToLeft />
      <ProjectLeftToRight />
    </div>
  );
};

const ProjectLeftToRight = () => {
  return (
    <div className='flex px-24 py-8 hover:bg-slate-200'>
      {/* Image container */}
      <div className='flex-1'>
        <a
          href=''
          className='block project-image mr-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
        ></a>
      </div>
      {/* Text container */}
      <div className='flex-1'>
        <HomeProjectsInfo />
      </div>
    </div>
  );
};

const ProjectRightToLeft = () => {
  return (
    <div className='flex px-24 py-8 hover:bg-slate-200'>
      {/* Text container */}
      <div className='flex-1'>
        <HomeProjectsInfo />
      </div>
      {/* Image container */}
      <div className='flex-1 ml-auto'>
        <a
          href=''
          className='block project-image ml-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
        ></a>
      </div>
    </div>
  );
};

const HomeProjectsInfo = () => {
  return (
    <>
      <h3 className='text-3xl mb-4 font-bold'>Project Title</h3>
      <h4 className='text-xl mb-4'>Project Type</h4>
      <p className='text-xl mb-4 font-semibold'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut assumenda
        labore, culpa necessitatibus, quas ducimus corrupti corporis vitae
        aspernatur asperiores recusandae a. Accusantium error debitis suscipit
        possimus magnam repudiandae itaque?
      </p>
      <HomeProjectInfoBtns />
    </>
  );
};

const HomeProjectInfoBtns = () => {
  return (
    <div className='mt-6 text-xl font-semibold'>
      <a href='' className='mr-12'>
        PROJECT --{">"}
      </a>
      <a href=''>LIVE SITE --{">"}</a>
    </div>
  );
};

const HomeProjectsMore = () => {
  return (
    <div className='flex justify-center mt-20 text-xl font-semibold'>
      <a href=''>SEE ALL MY WORKS AND PROJECTS --{">"}</a>
    </div>
  );
};

export default HomeProjects;
