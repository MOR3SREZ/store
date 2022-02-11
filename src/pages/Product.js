import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useFetch } from '../components/Hooks/useFetch';

//styles
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const { data, loading } = useFetch('https://fakestoreapi.com/products/' + id);

  useEffect(() => {}, []);
  return (
    <>
      {data && (
        <div className='product-page'>
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
              <button className='add-btn'>ADD TO CART</button>
              <button className='buy-btn'>BUY NOW</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
