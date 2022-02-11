import { useContext, useEffect, useState } from 'react';
import CartOrders from '../components/CartOrders/CartOrders';
import { FilterContext } from '../components/context/filter_context';

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
      <div className='orders'>
        <h3>orders</h3>
        <CartOrders />
      </div>
      <div className='orders-total'> the total: ${totalPrice.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
