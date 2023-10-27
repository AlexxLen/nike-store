import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

const CartCount = ({ totalCount, onClearCart, onBackClick }) => {
  return (
    <div className='bg-white flex items-center justify-between px-3 py-2'>
      <div className='flex items-center gap-2'>
        <div onClick={onBackClick} className='cursor-pointer'>
          <ChevronDoubleLeftIcon className='w-5 h-5 transition-all duration-300 hover:text-orange-500 stroke-[2]' />
        </div>
        <h3 className='font-medium flex items-center gap-2'>
          Your Cart
          <span className='bg-theme-cart rounded p-1 text-slate-100 font-normal leading-none text-xs'>
            ( {totalCount} Items)
          </span>
        </h3>
      </div>
      <div>
        <button
          onClick={onClearCart}
          className='bg-theme-cart text-slate-100 text-sm flex items-center gap-1 rounded active:scale-90 px-2 py-0.5'
        >
          <XMarkIcon className='w-4 h-4 stroke-[2]' />
          <span>Clear Cart</span>
        </button>
      </div>
    </div>
  );
};

export default CartCount;
