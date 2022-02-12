import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//components
import { useFetch } from '../components/Hooks/useFetch';
import { ACTIONS, FilterContext } from '../components/context/filter_context';
import PageHeader from '../components/PageHeader/PageHeader';

//styles
import './Product.css';

const Product = () => {
  const { cartItems, cartItemDispatch } = useContext(FilterContext);
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    'https://fakestoreapi.com/products/' + id
  );

  useEffect(() => {}, []);
  return (
    <div className='product-page'>
      <PageHeader name={'Products'} />

      {loading && <h2>Loading ...</h2>}
      {error && <h2>{error}</h2>}
      {data && (
        <div className='product'>
          <div className='image-slider'>
            <img src={data.image} alt='some' />
          </div>
          <div className='product-introduction'>
            <div className='info'>
              <h2>{data.title}</h2>
              <div className='product-things'>
                <p>
                  Price:
                  <span className='price-color'> ${data.price} </span>
                </p>
                <p>
                  Rate:
                  <span> ⭐{data.rating?.rate}</span>
                </p>
              </div>
              <div className='product-description'>
                <p>{data.description}</p>
              </div>
            </div>
            <div className='buttons'>
              {cartItems.some((item) => item.id === data.id) ? (
                <button
                  className='add-btn'
                  onClick={() => {
                    cartItemDispatch({
                      type: ACTIONS.REMOVE_FROM_CART,
                      payload: { id: data.id },
                    });
                  }}
                >
                  REMOVE FROM CART
                </button>
              ) : (
                <button
                  className='add-btn'
                  onClick={() => {
                    cartItemDispatch({
                      type: ACTIONS.ADD_TO_CART,
                      payload: { item: data },
                    });
                  }}
                >
                  ADD TO CART
                </button>
              )}
              <button
                className='buy-btn'
                onClick={(e) => (e.target.innerText = 'Ordering...')}
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
