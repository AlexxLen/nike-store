import { FlexContent, Hero, Sales } from './components';
import { heroInfo, highlight, popularSales, sneaker, topRatedSales } from './data/data';

const App = () => {
  return (
    // ? gap16 or gap20
    <main className='flex flex-col gap-20 relative'>
      <Hero info={heroInfo} />
      <Sales info={popularSales} isLarge={true} />
      <FlexContent info={highlight} isReverse={true} />
      <Sales info={topRatedSales} />
      <FlexContent info={sneaker} />
    </main>
  );
};

export default App;
