import { Hero, Sales } from './components';
import { heroInfo, popularSales, topRatedSales } from './data/data';

const App = () => {
  return (
    // ? gap16 or gap20
    <main className='flex flex-col gap-20 relative'>
      <Hero info={heroInfo} />
      <Sales info={popularSales} isLarge={true} />
      <Sales info={topRatedSales} />
    </main>
  );
};

export default App;
