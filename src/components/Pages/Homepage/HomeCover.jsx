import { useState, useEffect } from "react";

const HomeCover = () => {
  return (
    <section className='bg-slate-100 h-screen flex flex-col justify-center p-24'>
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
      <div style={circleMovement} className='bg-circle bg-white'></div>
    </div>
  );
};

export default HomeCover;
