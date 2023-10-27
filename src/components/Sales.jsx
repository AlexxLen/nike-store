import Item from './UI/Item';
import Title from './UI/Title';

const Sales = ({ info, isLarge }) => {
  const { title, items } = info;
  return (
    <div className='nike-container'>
      <Title value={title} />
      <div
        className={`grid items-center justify-items-center  gap-7 lg:gap-5 mt-7 ${
          isLarge
            ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1'
            : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
        } `}
      >
        {items?.map((item, i) => (
          <Item key={i} value={item} isHorizontal={isLarge} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
