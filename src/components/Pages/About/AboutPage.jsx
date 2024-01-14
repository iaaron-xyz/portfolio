import HeroSection from "../../layouts/HeroSectionTemplate";
import skills from "../../data/skills";
import Footer from "../../layouts/Footer";

const AboutPage = () => {
  return (
    <div className='w-full flex flex-col align-center justify-center'>
      <HeroSection title={"About Me"} />
      <AboutContentDesc />
      <AboutContentSkills />
      <Footer />
    </div>
  );
};

const AboutContentDesc = () => {
  return (
    <div className='flex mb-48 md:flex-col'>
      {/* title */}
      <AboutMeSectionTitle title='Description' />

      {/* Text content */}
      <div className='flex-1 text-2xl md:px-20 md:py-12'>
        <AboutMeSectionTextParagraph
          p={`Hi! My name is Aaron, I am a multidisciplinary scientist, artist and
          developer. As a developer I am specialized as Front-end React
          Developer who loves creating beautiful sites and web apps that are interactive, responsive and easy to use.`}
        />
        <AboutMeSectionTextParagraph
          p={`I can build front-end web apps using only vanilla JavaScript, HTML and CSS but I am also capable to complete projects using the library React or directly an entire framework like Next.js.`}
        />
        <AboutMeSectionTextParagraph
          p={`Check out my work and give a look at my completed projects in the projects section.`}
        />
        <AboutMeSectionTextParagraph
          p={`Or in case you are interested, I also can work as a 3D artist and as a computational and data scientist.`}
        />
      </div>
    </div>
  );
};

const AboutContentSkills = () => {
  return (
    <div className='flex mb-48 md:flex-col'>
      {/* title */}
      <AboutMeSectionTitle title='My Skills & Knowledge' />

      {/* Text content */}
      <div className='flex-1 text-2xl md:py-12'>
        {skills.map((skillSection) => {
          return (
            <SkillsField
              key={skillSection.id}
              title={skillSection.title}
              skillsList={skillSection.list}
            />
          );
        })}
      </div>
    </div>
  );
};

const AboutMeSectionTitle = ({ title }) => {
  return (
    <div className='flex-1'>
      <h2 className='text-6xl font-chillaxBold pl-48 pr-12 xl:pl-20'>
        {title}
      </h2>
    </div>
  );
};

const AboutMeSectionTextParagraph = ({ p }) => {
  return <p className='w-2/3 mb-8 xl:w-4/5 md:w-full'>{p}</p>;
};

const SkillsField = ({ title, skillsList }) => {
  const listSize = skillsList.length;

  return (
    <div className='mb-16 w-2/3 xl:w-4/5 md:px-20 md:w-full'>
      <h3 className='text-3xl font-satoshiBold'>{title}</h3>
      {skillsList.map((skill, index) => {
        // Add a bullet item
        if (index + 1 < listSize) {
          return (
            <span key={index} className='align-middle font-satoshiRegular'>
              {skill} &bull;{" "}
            </span>
          );
          // Add the lasst skill
        } else {
          return (
            <span key={index} className='align-middle font-satoshiRegular'>
              {skill}
            </span>
          );
        }
      })}
    </div>
  );
};

export default AboutPage;
