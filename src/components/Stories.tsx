import { ClockIcon, HashtagIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import truncate from 'lodash.truncate';
import React from 'react';
import { useSelector } from 'react-redux';
import { fetchNews } from '../app/news/asyncActions';
import { selectNewsData } from '../app/news/selectors';
import { Status } from '../app/news/types';
import { useAppDispatch } from '../app/store';
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

type StoriesProps = {
  title?: string;
};

const Stories: React.FC<StoriesProps> = ({ title = 'Top Stories' }) => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectNewsData);

  React.useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchNews());
    };
    fetchData();
  }, [dispatch]);

  if (status === Status.LOADING) return <p className='text-center text-xl font-bold'>Loading...</p>;

  return (
    <div className='nike-container mb-11'>
      <Title value={title} />
      <div className='mt-7'>
        <Splide aria-label='Top Stories' options={splideOptions}>
          {items?.map((obj, i) => (
            <SplideSlide key={i} className='mb-0.5'>
              <div className='relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200'>
                <div className='flex items-center justify-center'>
                  <img
                    src={obj.img}
                    alt={title}
                    className='w-full h-auto object-cover shadow-md shadow-slate-200 rounded-t-lg'
                  />
                </div>
                <div className='flex items-center justify-between gap-2 w-full px-4'>
                  <div className='flex items-center gap-0.5'>
                    <HeartIcon className='icon-style text-red-500 w-5 h-5' />
                    <span className='text-xs font-bold'>{obj.likeCount}</span>
                  </div>
                  <div className='flex items-center gap-0.5'>
                    <ClockIcon className='icon-style text-black w-5 h-5' />
                    <span className='text-xs font-bold'>{obj.time} min</span>
                  </div>
                  <div className='flex items-center gap-0.5'>
                    <HashtagIcon className='icon-style text-blue-600 w-5 h-5' />
                    <span className='text-xs font-bold text-blue-600'>{obj.author}</span>
                  </div>
                </div>
                <div className='grid items-center justify-items-start px-4'>
                  <h3 className='text-base font-semibold lg:text-sm'>{obj.title}</h3>
                  <p className='text-sm lg:text-xs text-justify'>
                    {truncate(obj.text, { length: 175 })}
                  </p>
                </div>
                <div className='flex items-center justify-center px-4'>
                  <a
                    href={obj.url}
                    target='_blank'
                    role='button'
                    className='w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 p-1.5 button-theme'
                  >
                    <button className='w-full'>Read More</button>
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
