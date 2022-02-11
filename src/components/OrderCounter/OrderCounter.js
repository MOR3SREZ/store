import React, { useState, useEffect, useContext } from 'react';
import { FilterContext } from '../context/filter_context';
import { ACTIONS } from '../context/filter_context';
//styles
import './OrderCounter.css';
const OrderCounter = ({ id }) => {
  const { cartItemDispatch } = useContext(FilterContext);

  const [count, setCount] = useState(1);

  useEffect(() => {
    cartItemDispatch({
      type: ACTIONS.SET_QTY,
      payload: { id: id, qty: count },
    });
  }, [cartItemDispatch, count, id]);

  return (
    <div className='order-counter'>
      <button
        disabled={false}
        className='decrease'
        onClick={() => setCount(count !== 1 ? count - 1 : 1)}
      >
        -
      </button>
      <input
        type='number'
        min={1}
        max={100}
        value={count}
        onChange={(e) => setCount(+e.target.value)}
      />
      <button
        className='increase'
        onClick={() => setCount(count !== 100 ? count + 1 : 100)}
      >
        +
      </button>
    </div>
  );
};

export default OrderCounter;
