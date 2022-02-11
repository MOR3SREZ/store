import React, { useContext, useEffect, useState } from 'react';

//styles
import './Header.css';
import shopHeader from '../../assets/shop.jpg';
import shopIcon from '../../assets/shop-icon.png';
import cartIcon from '../../assets/online-cart.svg';
import searchIcon from '../../assets/search.svg';
import { Link } from 'react-router-dom';
import { FilterContext } from '../context/filter_context';

const Header = ({ setSearchFilter }) => {
  const [inputValue, setInputValue] = useState('');
  const { cartItems } = useContext(FilterContext);

  useEffect(() => {
    setSearchFilter(inputValue);
  }, [inputValue, setSearchFilter]);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

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
        <form className='search' onSubmit={SubmitHandler}>
          <input type='text' onChange={(e) => setInputValue(e.target.value)} />
          <button type='submit'>
            <img src={searchIcon} alt='search' />
          </button>
        </form>

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
      <div className='main-image'>
        <img src={shopHeader} alt='shop' />
        <div className='welcome-massage'>
          <h2>
            Welcome to the ROSE <span>SHOP</span>, Incorporated!
          </h2>
          <p>
            We appreciate you joining our club. You now have exclusive access to
            new arrivals and sales. Ready to build a show-stopping wardrobe?
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
