import HomeCover from "./HomeCover";
import HomeAbout from "./HomeAbout";

const Homepage = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
      <HomeCover />
      <HomeAbout />
    </div>
  );
};

export default Homepage;
