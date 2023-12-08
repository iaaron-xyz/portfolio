import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className='w-full h-96 mt-6 px-48 flex flex-col align-center justify-center'>
      <h1 className='text-center text-6xl font-chillaxBold'>
        The Contact page is under construction. Back to{" "}
        <Link to='/' className='underline'>
          Homepage
        </Link>
      </h1>
    </div>
  );
};

export default AboutPage;
