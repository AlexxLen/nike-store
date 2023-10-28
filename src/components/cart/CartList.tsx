import React from 'react';
import { CartItem as CartItemType } from '../../app/cart/types';
import CartItem from './CartItem';

type CartListProps = {
  items: CartItemType[];
  onRemoveItem: (id: string) => void;
  onIncreaseItem: (id: string) => void;
  onDecreaseItem: (id: string) => void;
};

const CartList: React.FC<CartListProps> = ({
  items,
  onRemoveItem,
  onIncreaseItem,
  onDecreaseItem,
}) => (
  <>
    <div className=' flex flex-col p-3 overflow-y-auto scroll-smooth scroll-hidden gap-4 lg:gap-3'>
      {items?.map((obj) => (
        <CartItem
          key={obj.id}
          value={obj}
          onRemoveItem={onRemoveItem}
          onIncreaseItem={onIncreaseItem}
          onDecreaseItem={onDecreaseItem}
        />
      ))}
    </div>
  </>
);

export default CartList;
