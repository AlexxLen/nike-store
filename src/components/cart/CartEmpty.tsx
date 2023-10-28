import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import React from 'react';
import emptybag from '../../assets/emptybag.png';

type CartEmptyProps = {
  onBackClick: () => void;
};

const CartEmpty: React.FC<CartEmptyProps> = ({ onBackClick }) => (
  <div className='h-full flex flex-col items-center justify-center gap-5 p-3'>
    <img
      src={emptybag}
      alt='Empty Cart'
      className='w-40 lg:w-36 sm:w-28 transition-all duration-300 hover:scale-110'
    />
    <button
      onClick={onBackClick}
      className='button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg flex items-center gap-2 py-2 px-5 font-semibold text-sm'
    >
      <ArrowLeftIcon className='w-5 h-5' />
      <span>Back to Nike Store</span>
    </button>
  </div>
);

export default CartEmpty;
