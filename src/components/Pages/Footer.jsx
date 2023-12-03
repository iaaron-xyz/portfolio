const Footer = () => {
  return (
    <footer className='p-16 flex flex-col items-center justify-center text-slate-100'>
      <FooterContent />
    </footer>
  );
};

const FooterContent = () => {
  const currentYear = new Date().getFullYear() + 1;
  return (
    <>
      <h2 className='text-7xl mb-6 font-satoshiBold'>
        Let&apos;s Work Together!
      </h2>
      <h4 className='text-green-400 text-xl'>Ready to work remotely</h4>
      <a href='' className='block my-36 text-xl font-satoshiBlack'>
        LET&apos;S GET IN TOUCH! --{">"}
      </a>
      <div className='mb-32'>
        <a href='' className='mx-8'>
          LinkedIn
        </a>
        <a href='' className='mx-8'>
          Github
        </a>
        <a href='' className='mx-8'>
          Email
        </a>
        <a href='' className='mx-8'>
          Artstation
        </a>
      </div>
      <div className='text-xl'>
        <span className='mx-4'>iaaron</span> |{" "}
        <span className='mx-4'>{currentYear}</span>
      </div>
    </>
  );
};

export default Footer;
