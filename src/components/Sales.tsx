import React from 'react';
import { SneakersItem } from '../app/sneakers/types';
import Item from './UI/Item';
import Title from './UI/Title';

type SalesProps = {
  title: string;
  items: SneakersItem[];
  isLarge?: boolean;
};

const Sales: React.FC<SalesProps> = ({ title, items, isLarge }) => {
  if (items.length === 0) return <p className='text-center'>Failed to load items</p>;

  return (
    <div className='nike-container'>
      <Title value={title} />
      <div
        className={`grid items-center justify-items-center  gap-7 lg:gap-5 mt-7 ${
          isLarge
            ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1'
            : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
        } `}
      >
        {items?.map((obj) => (
          <Item key={obj.id} value={obj} isHorizontal={isLarge} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
