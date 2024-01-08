import LinkPage from "../../Parts/LinkPage";

const HomeProjects = () => {
  return (
    <section className='bg-zinc-100 py-36'>
      <HomeProjectsTitle />
      <HomeProjectsWorks />
      <HomeProjectsMore />
    </section>
  );
};

const HomeProjectsTitle = () => {
  return (
    <div>
      <h2 className='text-7xl mb-24 pl-48 font-chillaxSemibold xl:pl-24'>
        Work & Projects
      </h2>
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
    <div className='flex px-48 py-8 xl:px-20'>
      {/* Image container */}
      <HomeProjectsImage />
      {/* Text container */}
      <div className='flex-1'>
        <HomeProjectsInfo />
      </div>
    </div>
  );
};

const ProjectRightToLeft = () => {
  return (
    <div className='flex px-48 py-8 xl:px-20'>
      {/* Text container */}
      <div className='flex-1 flex flex-col'>
        <HomeProjectsInfo alignValue={"ml-auto"} />
      </div>
      {/* Image container */}
      <HomeProjectsImage alignValue='ml-auto' />
    </div>
  );
};

const HomeProjectsImage = ({ alignValue = "" }) => {
  return (
    <div className='flex-1 ml-auto'>
      <a
        href=''
        className={`${alignValue} block project-image bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm`}
      ></a>
    </div>
  );
};

const HomeProjectsInfo = () => {
  return (
    <>
      <h3 className='text-5xl mb-6 font-satoshiBold'>Project Title</h3>
      <h4 className='text-2xl mb-6 font-satoshiLightItalic'>Project Type</h4>
      <p className='text-xl mb-8 font-satoshiMedium'>
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
    <div className='flex-1 flex text-xl font-satoshiBlack'>
      <LinkPage text={"project"} />
      <LinkPage text={"live site"} extraClasses={"ml-12"} />
    </div>
  );
};

const HomeProjectsMore = () => {
  return (
    <div className='flex justify-center mt-28 text-xl'>
      <LinkPage text={"see all my works and projects"} />
    </div>
  );
};

export default HomeProjects;
