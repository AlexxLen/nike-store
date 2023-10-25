import { Cart, FlexContent, Footer, Header, Hero, Sales, Stories } from './components';
import {
  footerInfo,
  heroInfo,
  highlight,
  popularSales,
  sneaker,
  stories,
  topRatedSales,
} from './data/data';

const App = () => {
  return (
    <>
      <Header />
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero info={heroInfo} />
        <Sales info={popularSales} isLarge={true} />
        <FlexContent info={highlight} isReverse={true} />
        <Sales info={topRatedSales} />
        <FlexContent info={sneaker} />
        <Stories info={stories} />
      </main>
      <Footer info={footerInfo} />
    </>
  );
};

export default App;
