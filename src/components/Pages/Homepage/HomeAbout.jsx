const HomeAbout = () => {
  return (
    <section className='flex align-center'>
      <HomeAboutDiv content={<HomeAboutTitle />} />
      <HomeAboutDiv content={<HomeAboutContent />} />
    </section>
  );
};

const HomeAboutDiv = ({ content }) => {
  return <div className='flex-1 my-24'>{content}</div>;
};

const HomeAboutTitle = () => {
  return <h2 className='text-7xl text-center'>About Me</h2>;
};

const HomeAboutContent = () => {
  return (
    <div className='text-2xl w-3/4'>
      <p className='mb-6'>
        Hi! I&apos;m Aaron. I am a Front-end React Developer. My work focus on
        create beautiful and easy to use interfaces for websites and webapps and
        any desktop app that supports the React ecosystem.
      </p>
      <p className='mb-24'>
        Besides that, I also have the skills to work as data scientist or 3D
        Game Artist, click on the more details button to check out my portfolios
        if you are interested.
      </p>
      <p>
        <a href=''>MORE DETAILS --{">"}</a>
      </p>
    </div>
  );
};

export default HomeAbout;
