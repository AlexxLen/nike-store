import { ClockIcon, HashtagIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { truncate } from 'lodash';
import Title from './UI/Title';

const splideOptions = {
  perPage: 4,
  perMove: 1,
  type: 'loop',
  rewind: true,
  keyboard: 'global',
  gap: '1rem',
  pagination: false,
  padding: '2rem',
  breakpoints: {
    1200: { perPage: 3 },
    991: { perPage: 2.3 },
    768: { perPage: 2 },
    500: { perpage: 1.3 },
    425: { perPage: 1 },
  },
};

const Stories = ({ info }) => {
  const { title, news } = info;

  return (
    <div className='nike-container mb-11'>
      <Title value={title} />
      <div className='mt-7'>
        <Splide aria-label='Top Stories' options={splideOptions}>
          {news.map((item, i) => (
            <SplideSlide key={i} className='mb-0.5'>
              <div className='relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200'>
                <div className='flex items-center justify-center'>
                  <img
                    src={item.img}
                    alt={title}
                    className='w-full h-auto object-cover shadow-md shadow-slate-200 rounded-t-lg'
                  />
                </div>
                <div className='flex items-center justify-between gap-2 w-full px-4'>
                  <div className='flex items-center gap-0.5'>
                    <HeartIcon className='icon-style text-red-500 w-5 h-5' />
                    <span className='text-xs font-bold'>{item.like}</span>
                  </div>
                  <div className='flex items-center gap-0.5'>
                    <ClockIcon className='icon-style text-black w-5 h-5' />
                    <span className='text-xs font-bold'>{item.time}</span>
                  </div>
                  <div className='flex items-center gap-0.5'>
                    <HashtagIcon className='icon-style text-blue-600 w-5 h-5' />
                    <span className='text-xs font-bold text-blue-600'>{item.by}</span>
                  </div>
                </div>
                <div className='grid items-center justify-items-start px-4'>
                  <h3 className='text-base font-semibold lg:text-sm'>{item.title}</h3>
                  <p className='text-sm lg:text-xs text-justify'>
                    {truncate(item.text, { length: 175 })}
                  </p>
                </div>
                <div className='flex items-center justify-center px-4'>
                  <a
                    href={item.url}
                    target='_blank'
                    role='button'
                    className='w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 p-1.5 button-theme'
                  >
                    <button className='w-full'>{item.btn}</button>
                  </a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Stories;
