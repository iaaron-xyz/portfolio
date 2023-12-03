import LinkPage from "../../Pieces/LinkPage";

const HomeAbout = () => {
  return (
    <section className='flex align-center mx-48'>
      <HomeAboutDiv content={<HomeAboutTitle />} />
      <HomeAboutDiv content={<HomeAboutContent />} />
    </section>
  );
};

const HomeAboutDiv = ({ content }) => {
  return <div className='flex-1 my-24'>{content}</div>;
};

const HomeAboutTitle = () => {
  return <h2 className='text-7xl font-chillaxSemibold'>About Me</h2>;
};

const HomeAboutContent = () => {
  return (
    <div className='text-2xl leading-9'>
      <p className='mb-6'>
        Hi! I&apos;m Aaron. I am a Front-end React Developer. My work focus in
        creating beautiful and easy to use interfaces for websites and web-apps.
      </p>
      <p className='mb-24'>
        Besides that, I also have the skills to work as data scientist or 3D
        Game Artist, click on the more details button to check out my portfolios
        and get more detailed information about me.
      </p>
      <LinkPage text={"more details"} />
    </div>
  );
};

export default HomeAbout;
