import HomeCover from "./HomeCover";
import HomeAbout from "./HomeAbout";
import HomeProjects from "./HomeProjects";
import Footer from "../../layouts/Footer";

const Homepage = () => {
  return (
    <div className='w-full flex flex-col justify-center font-satoshiRegular'>
      <HomeCover />
      <HomeAbout />
      <HomeProjects />
      <Footer />
    </div>
  );
};

export default Homepage;
