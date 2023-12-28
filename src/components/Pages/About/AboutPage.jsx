const AboutPage = () => {
  return (
    <div className='w-full flex flex-col align-center justify-center'>
      <AboutCover />
      <AboutContent />
    </div>
  );
};

const AboutCover = () => {
  return (
    <div className='flex flex-col align-center justify-center px-40 mt-24 h-96 text-center align-middle'>
      <h1 className='mb-6 text-center text-6xl font-chillaxBold'>About Me</h1>
    </div>
  );
};

const AboutContent = () => {
  return (
    <div className='flex'>
      {/* title */}
      <AboutMeSectionTitle title='About Me' />
      {/* Text content */}
      <div className='flex-1 text-2xl'>
        <AboutMeSectionTextParagraph
          p={`Hi! My name is Aaron, I am a multidisciplinary scientist, artist and
          developer. As a developer I am specialized as Front-end React
          Developer who loves creating beautiful sites and web apps that are interactive, responsive and easy to use.`}
        />
      </div>
    </div>
  );
};

const AboutMeSectionTitle = ({ title }) => {
  return (
    <div className='flex-1'>
      <h2 className='text-6xl font-chillaxBold pl-48 pr-12 text-right'>
        {title}
      </h2>
    </div>
  );
};

const AboutMeSectionTextParagraph = ({ p }) => {
  return <p className='pr-48 mb-8'>{p}</p>;
};

export default AboutPage;
