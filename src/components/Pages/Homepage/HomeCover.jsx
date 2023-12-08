import { useState, useEffect } from "react";
import LinkPage from "../../Parts/LinkPage";

const HomeCover = () => {
  return (
    <section className='bg-zinc-100 h-screen flex flex-col justify-center'>
      <HomeCoverArt />
      <div className='ml-48 z-10'>
        <HomeCoverText />
        <HomeCoverSubtext />
        <HomeCoverLinks />
      </div>
    </section>
  );
};

const HomeCoverText = () => {
  return (
    <div className='text-7xl mb-12 font-chillaxRegular'>
      <h1>
        Front-end <strong className='font-chillaxMedium'>Developer</strong>
      </h1>
      <h1>
        Computational <strong className='font-chillaxMedium'>Scientist</strong>
      </h1>
      <h1>
        & Game <strong className='font-chillaxMedium'>Artist</strong>
      </h1>
    </div>
  );
};

const HomeCoverSubtext = () => {
  return (
    <>
      <h2 className='text-2xl w-1/2'>
        Hi! I&apos;m Aaron, a front-end React developer, a physicist and a 3D
        artist. I love to work at the intersection of science, art and
        programming.
      </h2>
    </>
  );
};

const HomeCoverLinks = () => {
  return (
    <div className='mt-8 text-2xl'>
      <LinkPage text={"see my work"} extraClasses='my-24' />
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
      <div style={circleMovement} className='bg-circle shadow-lg'></div>
    </div>
  );
};

export default HomeCover;
