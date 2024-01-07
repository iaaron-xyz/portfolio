import LinkPage from "../Parts/LinkPage";
import GithubIcon from "../Parts/icons/GithubIcon";
import LinkedinIcon from "../Parts/icons/LinkedinIcon";
import EmailIcon from "../Parts/icons/EmailIcon";
import ArtstationIcon from "../Parts/icons/ArtstationIcon";

const Footer = () => {
  return (
    <footer className='p-16 flex flex-col items-center justify-center text-slate-100'>
      <FooterContent />
    </footer>
  );
};

const FooterContent = () => {
  const currentYear = new Date().getFullYear();
  const iconClasses = "stroke-slate-300 h-48 hover:stroke-white";
  return (
    <>
      {/* Footer header */}
      <h2 className='text-7xl mb-6 font-satoshiBold'>
        Let&apos;s Work Together!
      </h2>
      <h4 className='text-green-400 text-xl'>Ready to work remotely</h4>

      {/* Call to action */}
      <LinkPage
        text={"LET'S GET IN TOUCH!"}
        iconColor='white'
        extraClasses='my-48 text-2xl'
      />

      {/* Icons */}
      <div className='mb-32 flex'>
        <a href='' className='mx-8'>
          <LinkedinIcon className={iconClasses} h={64} w={64} />
        </a>
        <a href='' className='mx-8'>
          <GithubIcon className={iconClasses} h={64} w={64} />
        </a>
        <a href='' className='mx-8'>
          <EmailIcon className={iconClasses} h={64} w={64} />
        </a>
        <a href='' className='mx-8'>
          <ArtstationIcon className={iconClasses} h={64} w={64} />
        </a>
      </div>

      {/* subtext */}
      <div className='text-xl'>
        <span className='mx-4'>iaaron</span> |{" "}
        <span className='mx-4 font-chillaxRegular'>{currentYear}</span>
      </div>
    </>
  );
};

export default Footer;
