import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  decreaseCartItem,
  increaseCartItem,
  removeCartItem,
  selectCartItems,
  selectCartOpened,
  selectTotalCount,
  selectTotalPrice,
  setCartOpened,
} from '../app/cartSlice';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartList from './cart/CartList';
import CartTotal from './cart/CartTotal';

const Cart = () => {
  const cartOpened = useSelector(selectCartOpened);
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalCount = useSelector(selectTotalCount);

  const dispatch = useDispatch();

  const onCloseCart = () => {
    dispatch(
      setCartOpened({
        cartOpened: false,
      }),
    );
  };

  const onRemoveItem = (id) => {
    if (confirm('Are you sure you want to remove this item?')) dispatch(removeCartItem(id));
  };

  const onIncreaseItem = (id) => {
    dispatch(increaseCartItem(id));
  };

  const onDecreaseItem = (id) => {
    dispatch(decreaseCartItem(id));
  };

  const onClearCart = () => {
    if (confirm('Are you sure you want to clear the cart?')) dispatch(clearCart());
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onCloseCart();
      }}
      className={`fixed inset-0 max-h-screen blur-effect-theme text-slate-900 ${
        cartOpened ? 'visible opactity-100 translate-x-0' : 'hidden opacity-0 translate-x-8'
      }`}
    >
      <div className='blur-effect-theme w-full h-full max-w-xl absolute right-0 grid grid-rows-[auto_1fr_auto]'>
        <CartCount totalCount={totalCount} onClearCart={onClearCart} onBackClick={onCloseCart} />
        {cartItems.length === 0 ? (
          <CartEmpty onBackClick={onCloseCart} />
        ) : (
          <>
            <CartList
              items={cartItems}
              onRemoveItem={onRemoveItem}
              onIncreaseItem={onIncreaseItem}
              onDecreaseItem={onDecreaseItem}
            />
            <CartTotal totalPrice={totalPrice} />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
