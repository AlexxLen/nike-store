type SocialLinkProps = {
  icon: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ icon }) => {
  return (
    <img
      src={icon}
      alt='Social icon'
      className='w-8 h-8 flex items-center cursor-pointer hover:scale-110 md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200'
    />
  );
};

export default SocialLink;
