import React, { useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FilterContext } from '../context/filter_context';
import ToastifyItem from './ToastifyItem/ToastifyItem';

const Toastify = () => {
  const { removeCartItem, addCartItem } = useContext(FilterContext);
  useEffect(() => {
    if (addCartItem.length !== 0) {
      toast.success(<ToastifyItem item={addCartItem} />, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [addCartItem]);

  useEffect(() => {
    if (removeCartItem.length !== 0) {
      toast.error(<ToastifyItem item={removeCartItem} />, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
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
