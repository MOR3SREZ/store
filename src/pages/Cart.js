import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { FilterContext } from '../components/context/filter_context';
import OrderCounter from '../components/OrderCounter/OrderCounter';

//styles
import './Cart.css';

const Cart = () => {
  const [counter, setCounter] = useState(1);

  const { cartItem } = useContext(FilterContext);

  return (
    <div className='cart'>
      <div className='orders'>
        <h3>orders</h3>
        <ul>
          {cartItem &&
            cartItem.map((item) => {
              return (
                <li className='order' key={item.id}>
                  <div className='left-side'>
                    <div className='order-img'>
                      {<img src={item.image} alt='some shit' />}
                    </div>
                    <div className='order-info'>
                      <p className='info_name'>
                        Product: <span>{item.title}</span>
                      </p>
                      <p className='info_price'>
                        Price: <span>$ {item.price}</span>
                      </p>
                    </div>
                  </div>
                  <div className='right-side'>
                    <OrderCounter setCounter={setCounter} item={item} />
                    <div className='total-price'>
                      <p>Total: $ {item.count * item.price}</p>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      <div className='orders-total'></div>
    </div>
  );
};

export default Cart;
