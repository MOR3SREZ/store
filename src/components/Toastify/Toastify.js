import React, { useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FilterContext } from '../context/filter_context';
import ToastifyItem from './ToastifyItem/ToastifyItem';

import './Toastify.css';

const Toastify = () => {
  const { removeCartItem, addCartItem } = useContext(FilterContext);
  useEffect(() => {
    if (addCartItem.length !== 0) {
      toast.success(<ToastifyItem item={addCartItem} kind={'Added'} />, {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  }, [addCartItem]);

  useEffect(() => {
    if (removeCartItem.length !== 0) {
      toast.error(<ToastifyItem item={removeCartItem} kind={'Removed'} />, {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  }, [removeCartItem]);
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toastify;
