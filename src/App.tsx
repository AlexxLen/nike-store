import React from 'react';
import { useSelector } from 'react-redux';
import { Status } from './app/news/types';
import { fetchItems, fetchPopularItems } from './app/sneakers/asyncActions';
import { selectSneakersData } from './app/sneakers/selectors';
import { useAppDispatch } from './app/store';
import { Cart, FlexContent, Footer, Header, Hero, Sales, Stories } from './components';
import { footer, hero, highlight, sneaker } from './data/data';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, popularItems, status } = useSelector(selectSneakersData);

  React.useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchPopularItems());
      dispatch(fetchItems());
    };
    fetchData();
  }, [dispatch]);

  if (status === Status.LOADING)
    return (
      <p className='w-screen h-screen flex items-center justify-center text-xl font-bold'>
        Loading...
      </p>
    );

  return (
    <>
      <Header />
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero info={hero} />
        {<Sales title='Popular Sales' items={popularItems} isLarge={true} />}
        <FlexContent info={highlight} isReverse={true} />
        {<Sales title='Top Rated Sales' items={items} />}
        <FlexContent info={sneaker} />
        <Stories />
      </main>
      <Footer info={footer} />
    </>
  );
};

export default App;
