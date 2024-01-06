import HeroSection from "../../layouts/HeroSectionTemplate";

const AboutPage = () => {
  return (
    <div className='w-full flex flex-col align-center justify-center'>
      <HeroSection title={"About Me"} />
      <AboutContentDesc />
      <AboutContentSkills />
    </div>
  );
};

const AboutContentDesc = () => {
  return (
    <div className='flex'>
      {/* title */}
      <AboutMeSectionTitle title='Description' />

      {/* Text content */}
      <div className='flex-1 text-2xl'>
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
  const skillsArray = [
    {
      id: 1,
      title: "Front-end",
      list: ["JavaScript", "HTML", "CSS", "React"],
    },
    {
      id: 2,
      title: "Tools",
      list: ["Git/Github", "VSCode", "Docker"],
    },
  ];

  return (
    <div className='flex mt-48'>
      {/* title */}
      <AboutMeSectionTitle title='My Skills & Knowledge' />

      {/* Text content */}
      <div className='flex-1 text-2xl'>
        {skillsArray.map((skillSection) => {
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
      <h2 className='text-6xl font-chillaxBold pl-48 pr-12 text-center'>
        {title}
      </h2>
    </div>
  );
};

const AboutMeSectionTextParagraph = ({ p }) => {
  return <p className='pr-48 mb-8'>{p}</p>;
};

const SkillsField = ({ title, skillsList }) => {
  const listSize = skillsList.length;

  return (
    <div className='mb-12'>
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
