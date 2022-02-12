import React from 'react';

import { ACTIONS, FilterContext } from '../../../context/filter_context';
//styles
import './CustomPriceFilter.css';

const CustomPriceFilter = () => {
  const { filterProductsDispatch, filterProducts } =
    React.useContext(FilterContext);

  const submitHandler = (e) => {
    e.preventDefault();
    filterProductsDispatch({
      type: ACTIONS.PRICE_FILTER,
      payload: e.target.id,
    });
  };

  return (
    <div className='custom-price-filter'>
      <form onSubmit={submitHandler} id='custom-price'>
        <input
          type='number'
          name='min'
          id='min'
          min={0}
          value={filterProducts.minPriceFilter}
          max={99999}
          placeholder='$ Min'
          onChange={(e) =>
            filterProductsDispatch({
              type: ACTIONS.MIN_PRICE_FILTER,
              payload: e.target.value,
            })
          }
        />

        <input
          type='number'
          name='max'
          id='max'
          min={0}
          value={filterProducts.maxPriceFilter}
          max={99999}
          placeholder='$ Max'
          onChange={(e) =>
            filterProductsDispatch({
              type: ACTIONS.MAX_PRICE_FILTER,
              payload: e.target.value,
            })
          }
        />
        <button>Go</button>
      </form>
    </div>
  );
};

export default CustomPriceFilter;
