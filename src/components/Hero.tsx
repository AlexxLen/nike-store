import React from 'react';
import Clip from './UI/Clip';
import SocialLink from './UI/SocialLink';

type HeroProps = {
  info: {
    title: string;
    subtitle: string;
    img: string;
    btnText: string;
    videos: {
      img: string;
      clip: string;
    }[];
    socialLinks: {
      icon: string;
    }[];
  };
};

const Hero: React.FC<HeroProps> = ({ info }) => {
  const { title, subtitle, img, btnText, videos, socialLinks } = info;

  return (
    <>
      <div className='relative'>
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-0'></div>
        <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
          <div className=' grid items-center justify-items-center mt-28 md:mt-24'>
            <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>
              {title}
            </h1>
            <h2 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>
              {subtitle}
            </h2>
            <button
              type='button'
              className='button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5'
            >
              {btnText}
            </button>
            <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[7%] xl:left-0 w-auto h-auto'>
              {videos?.map((obj, i) => (
                <Clip key={i} img={obj.img} clip={obj.clip} />
              ))}
            </div>
            <div className='grid items-center gap-3 md:gap-3 absolute top-[33vh] lg:top-[27vh] z-20 right-0 w-auto h-auto'>
              {socialLinks?.map((obj, i) => (
                <SocialLink key={i} icon={obj.icon} />
              ))}
            </div>
          </div>
          <div>
            <img
              src={img}
              alt='Hero image'
              className='w-auto h-[45vh] lg:h[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 object-fill'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
