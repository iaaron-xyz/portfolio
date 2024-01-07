import { useState, useEffect } from "react";
import LinkPage from "../../Parts/LinkPage";

const HomeCover = () => {
  return (
    <section className='bg-zinc-100 h-screen flex flex-col justify-center'>
      <HomeCoverArt />
      <div className='z-10'>
        <HomeCoverText />
        <HomeCoverSubtext />
        <HomeCoverLinks />
      </div>
    </section>
  );
};

const HomeCoverText = () => {
  return (
    <div className='main-cover-title mb-16 font-chillaxRegular'>
      <h1 className='mb-2'>
        FRONT-END <strong className='font-chillaxSemibold'>DEVELOPER</strong>
      </h1>
    </div>
  );
};

const HomeCoverSubtext = () => {
  return (
    <>
      <h2 className='text-3xl text-center mb-32 px-96 font-satoshiMedium'>
        I work with React and Vue. As developer I am a problem solver ready to
        take the project from a base concept to interactive and beautiful
        interfaces focused on the user experience.
      </h2>
    </>
  );
};

const HomeCoverLinks = () => {
  return (
    <div className='mt-48 text-2xl flex justify-between px-48'>
      <LinkPage text={"see my work"} extraClasses='' />
      <div>
        <a href='' className='mr-4 hover:underline hover:underline-offset-8'>
          LinkedIn
        </a>{" "}
        {"//"}{" "}
        <a href='' className='mx-4 hover:underline hover:underline-offset-8'>
          Github
        </a>{" "}
        {"//"}{" "}
        <a href='' className='ml-4 hover:underline hover:underline-offset-8'>
          Artstation
        </a>
      </div>
    </div>
  );
};

const HomeCoverArt = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Calculate the pointer position in real time
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Add a new variable style relative to the pointer position
  const circleMovement = {
    transform: `translate(${(-window.innerWidth / 2 + position.x) / 20}px,
      ${(-window.innerHeight / 2 + position.y) / 20}px)`,
  };

  return (
    <div className='self-center flex flex-col items-center w-full'>
      <div style={circleMovement} className='bg-circle'></div>
    </div>
  );
};

export default HomeCover;
