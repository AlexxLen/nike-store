import { Hero } from './components';
import { heroInfo } from './data/data';

const App = () => {
  return (
    <main>
      <Hero info={heroInfo} />
    </main>
  );
};

export default App;
