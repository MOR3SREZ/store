import React from 'react';
import { Link } from 'react-router-dom';

//components
import IconCheckboxes from './addIcon/addIcon';

//Styles
import './Card.css';

const Card = ({ id, image, title, price, rating, check }) => {
  return (
    <div className='card'>
      <div className='product-image'>
        <Link to={`/product/${id}`}>
          <img src={image} alt='a Cool jacket' />
        </Link>
      </div>

      <div className='product-info'>
        <Link to={`/product/${id}`}>
          <p className='product-name'> {title}</p>
        </Link>

        <div className='product-information'>
          <span className='product-rate'>⭐{rating.rate}</span>
          <span className='product-price'>$ {price}</span>
        </div>
      </div>
      <div className='add-icon'>
        <IconCheckboxes id={id} check={check} />
      </div>
    </div>
  );
};

export default Card;
