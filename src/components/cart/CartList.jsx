import CartItem from './CartItem';

const CartList = ({ items, onRemoveItem, onIncreaseItem, onDecreaseItem }) => {
  return (
    <>
      {/*  overflow-y-auto  scroll-smooth scroll-hidden */}
      <div className=' flex flex-col p-3 overflow-y-auto scroll-smooth scroll-hidden gap-4 lg:gap-3'>
        {items?.map((item) => (
          <CartItem
            key={item.id}
            value={item}
            onRemoveItem={onRemoveItem}
            onIncreaseItem={onIncreaseItem}
            onDecreaseItem={onDecreaseItem}
          />
        ))}
      </div>
    </>
  );
};

export default CartList;
