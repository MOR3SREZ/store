import React, { useContext, useEffect, useState } from 'react';

//components
import shopIcon from '../../assets/shop-icon.png';
import cartIcon from '../../assets/online-cart.svg';
import { Link } from 'react-router-dom';
import { FilterContext } from '../context/filter_context';

//styles
import './PageHeader.css';

const PageHeader = ({ name }) => {
  const { cartItems } = useContext(FilterContext);
  return (
    <>
      <nav>
        <Link to={'/'}>
          <div className='logo'>
            <h1>
              ROSE <span>SHOP</span>
            </h1>
            <img src={shopIcon} alt='shop icon' />
          </div>
        </Link>
        <div className='page-name'>
          <h2>{name}</h2>
        </div>
        <div className='badge'>
          <Link to={'/cart'}>
            <button>
              <div className='cart-icon'>
                <img src={cartIcon} alt='cart icon' />
                <div className='badge-count'>
                  <span> {cartItems.length}</span>
                </div>
              </div>

              <span className='badge-cart'>Cart</span>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default PageHeader;
