import { PlayIcon } from '@heroicons/react/24/solid';
import React from 'react';

type ClipProps = {
  img: string;
  clip: string;
};

const Clip: React.FC<ClipProps> = ({ img, clip }) => (
  <div className='relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 md:24 sm:w-16 lg:h-24 md:h-20 sm:h-14'>
    <img
      src={img}
      alt='Clip image'
      className='inset-0 flex h-full w-full object-cover absolute opacity-100 z-10 transition-opacity duration-500'
    />
    <div className='bg-white blur-effect-theme absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 z-50 w-8 h-8 md:w-5 md:h-5 flex items-center justify-center rounded-full'>
      <PlayIcon className='icon-style text-slate-900 md:w-3 md:h-3' />
    </div>
    <video
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      className='absolute inset-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-30'
    >
      <source type='video/mp4' src={clip} />
    </video>
  </div>
);

export default Clip;
