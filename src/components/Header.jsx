import { HeartIcon, MagnifyingGlassCircleIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
            <button className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
              <ShoppingBagIcon className={`icon-style ${show && 'text-slate-900'}`} />
              <span
                className={`absolute top-4 right-0 w-4 h-4 text-[0.65rem] shadow leading-tight font-medium rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 ${
                  show
                    ? 'bg-slate-900 text-slate-100 shadow-slate-900'
                    : 'bg-white text-slate-900 shadow-slate-100'
                }`}
              >
                0
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
