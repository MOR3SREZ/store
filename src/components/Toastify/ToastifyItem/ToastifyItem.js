import React from 'react';

//styles
import './ToastifyItem.css';
const ToastifyItem = ({ item }) => {
  return (
    <div className='toast-container'>
      <div className='toast-picture'>
        <img src={item.image} alt='' />
      </div>
      <div className='toast-info'>
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default ToastifyItem;
