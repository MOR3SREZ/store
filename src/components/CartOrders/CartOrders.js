import React, { useContext } from 'react';
import { FilterContext } from '../context/filter_context';
import OrderCounter from '../OrderCounter/OrderCounter';

const CartOrders = () => {
  const { cartItems } = useContext(FilterContext);

  return (
    <ul>
      {cartItems &&
        cartItems.map((cartItem) => {
          return (
            <li className='order' key={cartItem.item.id}>
              <div className='left-side'>
                <div className='order-img'>
                  {<img src={cartItem.item.image} alt='some shit' />}
                </div>
                <div className='order-info'>
                  <p className='info_name'>
                    Product: <span>{cartItem.item.title}</span>
                  </p>
                  <p className='info_price'>
                    Price: <span>$ {cartItem.item.price}</span>
                  </p>
                </div>
              </div>
              <div className='right-side'>
                <OrderCounter id={cartItem?.item.id} />
                <div className='total-price'>
                  <p>
                    Total: $ {(cartItem.item.price * cartItem.qty).toFixed(2)}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default CartOrders;
