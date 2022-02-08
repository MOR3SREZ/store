import React, { useState, useEffect } from 'react';

//styles
import './OrderCounter.css';
const OrderCounter = ({ setCounter, item }) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCounter(count);
    item.count = count;
  }, [count]);

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
