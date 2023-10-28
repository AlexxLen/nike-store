import { HeartIcon, MagnifyingGlassCircleIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectTotalCount } from '../app/cart/selectors';
import { setCartOpened } from '../app/cart/slice';
import { useAppDispatch } from '../app/store';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  const dispatch = useAppDispatch();

  const cartItems = useSelector(selectCartItems);
  const totalCount = useSelector(selectTotalCount);

  useEffect(() => {
    const cart = JSON.stringify(cartItems);
    localStorage.setItem('cart', cart);
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onCartClick = () => {
    dispatch(setCartOpened(true));
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <header
      className={
        show
          ? 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 blur-effect-theme'
          : 'absolute top-7 left-0 right-0 opacity-100 z-50'
      }
    >
      <nav className='flex items-center justify-between nike-container'>
        <div className='flex items-center'>
          <img src={logo} alt='logo' className={`w-16 h-auto ${show && 'filter brightness-0'}`} />
        </div>
        <ul className='flex items-center justify-center gap-2'>
          <li>
            <MagnifyingGlassCircleIcon className={`icon-style ${show && 'text-slate-900'}`} />
          </li>
          <li>
            <HeartIcon className={`icon-style ${show && 'text-slate-900'}`} />
          </li>
          <li>
            <button
              onClick={onCartClick}
              className='border-none outline-none active:scale-110 transition-all duration-300 relative'
            >
              <ShoppingBagIcon className={`icon-style ${show && 'text-slate-900'}`} />
              <span
                className={`absolute top-4 right-0 w-4 h-4 text-[0.65rem] shadow leading-tight font-medium rounded-full flex items-center justify-center  ${
                  show
                    ? 'bg-slate-900 text-slate-100 shadow-slate-900'
                    : 'bg-white text-slate-900 shadow-slate-100'
                }`}
              >
                {totalCount}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
