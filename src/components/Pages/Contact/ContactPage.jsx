import { Link } from "react-router-dom";
import HeroSection from "../../layouts/HeroSectionTemplate";

const ContactPage = () => {
  return (
    <div className='w-full h-96 mt-6 px-48 flex flex-col align-center justify-center'>
      <HeroSection title={"The Contact page is under construction. Back to"} />
      <h1 className='text-center text-6xl font-chillaxBold'>
        <Link to='/' className='underline'>
          Homepage
        </Link>
      </h1>
    </div>
  );
};

export default ContactPage;
