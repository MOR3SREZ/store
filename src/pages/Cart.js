import { useContext, useEffect, useState } from 'react';

//components
import CartOrders from '../components/CartOrders/CartOrders';
import { FilterContext } from '../components/context/filter_context';
import PageHeader from '../components/PageHeader/PageHeader';

//styles
import './Cart.css';

const Cart = () => {
  const { cartItems } = useContext(FilterContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce(
        (prev, curr) => prev + curr.item.price * Number(curr.qty),
        0
      )
    );
  }, [cartItems]);

  return (
    <div className='cart'>
      <PageHeader name={'Shopping Cart'} />
      {cartItems.length > 0 ? (
        <>
          <div className='orders'>
            <CartOrders />
          </div>
          <div className='orders-total'>
            <span>Shopping cart total: ${totalPrice.toFixed(2)}</span>

            <button
              className='buy-btn'
              onClick={(e) => (e.target.innerText = 'Ordering...')}
            >
              BUY NOW
            </button>
          </div>
        </>
      ) : (
        <h2 className='empty-error'>There is no product to order</h2>
      )}
    </div>
  );
};

export default Cart;
