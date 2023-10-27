const CartTotal = ({ totalPrice }) => {
  return (
    <div className='flex flex-col px-3 py-2 gap-2'>
      <div className='flex items-center justify-between'>
        <h3 className='font-semibold uppercase'>Subtotal</h3>
        <p className='bg-theme-cart text-sm leading-none rounded text-slate-100 p-1'>
          ${totalPrice}
        </p>
      </div>
      <p className='text-sm font-medium text-center'>
        Taxes and Shipping will calculate at Shipping
      </p>
      <button className='button-theme bg-theme-cart text-slate-100'>Check Out</button>
    </div>
  );
};

export default CartTotal;
