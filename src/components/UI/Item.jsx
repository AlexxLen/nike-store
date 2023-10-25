import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid';

const Item = ({ id, isHorizontal, color, shadow, title, text, img, btn, rating, price }) => {
  return (
    <div
      className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
        isHorizontal ? 'justify-items-start' : 'justify-items-center'
      }  rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
    >
      <div
        className={`relative z-10 grid items-center ${
          isHorizontal ? 'justify-items-start' : 'justify-items-center'
        }`}
      >
        <h3 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>
          {title}
        </h3>
        <p className='text-slate-200 filter drop-shadow text-base md:text-small font-normal'>
          {text}
        </p>

        <div className='flex items-center justify-between w-28 my-2'>
          <div className='flex items-center bg-white/80 px-1 rounded text-black text-sm font-medium'>
            ${price}
          </div>
          <div className='flex items-center gap-1'>
            <StarIcon className='icon-style w-5 h-5 md:w-4 md:h-4' />
            <span className='text-small font-normal md:text-sm text-slate-100'>{rating}</span>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <button className='flex items-center bg-white/90 blur-effect-theme button-theme p-0.5 shadow-sky-200'>
            <ShoppingBagIcon className='icon-style text-slate-900' />
          </button>
          <button className='flex items-center bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow-sky-200 text-sm text-black'>
            {btn}
          </button>
        </div>
      </div>
      <div
        className={`flex items-center ${
          isHorizontal ? 'absolute top-5 right-1' : 'justify-items-center'
        }`}
      >
        {/* ? contain or fill */}
        <img
          src={img}
          alt={`sneakers image ${id}`}
          className={`object-contain transitions-theme hover:-rotate-12 ${
            isHorizontal ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]' : 'h-36 w-64'
          }`}
        />
      </div>
    </div>
  );
};

export default Item;
