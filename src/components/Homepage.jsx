const Homepage = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
      <HomeCover />
    </div>
  );
};

const HomeCover = () => {
  return (
    <section className='bg-slate-100 h-full flex flex-col justify-center p-24'>
      <HomeCoverArt />
      <div className='p-4 z-10'>
        <HomeCoverText />
        <HomeCoverSubtext />
        <HomeCoverLinks />
      </div>
    </section>
  );
};

const HomeCoverText = () => {
  return (
    <div className='text-7xl mb-6'>
      <h1>
        Front-end <strong>Developer</strong>
      </h1>
      <h1>
        Computational <strong>Scientist</strong>
      </h1>
      <h1>
        & Game <strong>Artist</strong>
      </h1>
    </div>
  );
};

const HomeCoverSubtext = () => {
  return (
    <>
      <h2 className='text-2xl p-4'>I am a Frontend React Developer</h2>
    </>
  );
};

const HomeCoverLinks = () => {
  return (
    <div className='mt-8 text-2xl'>
      <a href='' className='my-12 block font-bold'>
        SEE MY WORK --{">"}
      </a>
      <div>
        <a href=''>LinkedIn</a> {"//"} <a href=''>Github</a> {"//"}{" "}
        <a href=''>Artstation</a>
      </div>
    </div>
  );
};

const HomeCoverArt = () => {
  return (
    <div className='self-center flex flex-col items-center w-full'>
      <div className='bg-circle bg-white'></div>
    </div>
  );
};

export default Homepage;
