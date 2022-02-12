import React, { useContext } from 'react';
import { FilterContext, ACTIONS } from '../context/filter_context';
import OrderCounter from '../OrderCounter/OrderCounter';
import DeleteIcon from '@mui/icons-material/Delete';

const CartOrders = () => {
  const { cartItems, cartItemDispatch } = useContext(FilterContext);

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
                <DeleteIcon
                  onClick={() =>
                    cartItemDispatch({
                      type: ACTIONS.REMOVE_FROM_CART,
                      payload: { id: cartItem.item.id },
                    })
                  }
                  sx={{
                    fontSize: 25,
                    width: '35px',
                    height: '35px',
                    padding: '5px',
                    '&.MuiSvgIcon-root:hover': {
                      cursor: 'pointer',
                      backgroundColor: '#efefef',
                      borderRadius: '50%',
                    },
                  }}
                />
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default CartOrders;
