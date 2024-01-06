const HeroSectionTemplate = ({ title }) => {
  return (
    <div className='flex flex-col align-center justify-center px-40 mt-24 h-96 text-center align-middle'>
      <h1 className='mb-6 text-center text-6xl font-chillaxBold'>{title}</h1>
    </div>
  );
};

export default HeroSectionTemplate;
