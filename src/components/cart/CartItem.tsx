import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { CartItem as CartItemType } from '../../app/cart/types';

type CartItemProps = {
  value: CartItemType;
  onRemoveItem: (id: string) => void;
  onIncreaseItem: (id: string) => void;
  onDecreaseItem: (id: string) => void;
};

const CartItem: React.FC<CartItemProps> = ({
  value,
  onRemoveItem,
  onIncreaseItem,
  onDecreaseItem,
}) => {
  const { id, color, shadow, title, text, img, price, count } = value;

  return (
    <div className='flex items-stretch justify-between gap-5 w-full'>
      <div className='flex items-stretch h-full gap-5'>
        <div
          className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 w-36  lg:w-32 min-h-20 hover:scale-105 transition-all duration-300 ease-in-out`}
        >
          <img src={img} alt={`${title} image`} className='w-full h-full object-contain ' />
        </div>
        <div className='flex flex-col justify-between py-2 gap-2'>
          <div className='flex flex-col leading-none'>
            <h3 className='font-medium text-lg lg:text-sm'>{title}</h3>
            <p className='text-sm text-slate-800 lg:text-xs'>{text}</p>
          </div>
          <div className='flex items-center gap-3 text-slate-100'>
            <button
              onClick={() => onDecreaseItem(id)}
              className='bg-theme-cart flex items-center justify-center h-6 w-6 lg:h-5 rounded active:scale-90'
            >
              <MinusIcon className='w-5 h-5 lg:w-4 lg:h-4 stroke-2' />
            </button>
            <p className='bg-theme-cart text-sm flex items-center justify-center rounded font-medium w-8 h-6 lg:h-5'>
              {count}
            </p>
            <button
              onClick={() => onIncreaseItem(id)}
              className='bg-theme-cart flex items-center justify-center h-6 w-6 lg:h-5 rounded text-slate-100 active:scale-90'
            >
              <PlusIcon className='w-5 h-5 lg:w-4 lg:h-4 stroke-2' />
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between items-end py-2 gap-2'>
        <p className='text-lg lg:text-base font-medium'>${price * count}</p>
        <button
          onClick={() => onRemoveItem(id)}
          className='bg-theme-cart flex items-center justify-center h-6 w-6 lg:h-5 rounded text-slate-100 active:scale-90'
        >
          <TrashIcon className='w-5 h-5 lg:w-4 lg:h-4 stroke-2' />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
