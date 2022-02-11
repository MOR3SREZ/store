import React, { useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useFetch } from '../../../Hooks/useFetch';
import { ACTIONS, FilterContext } from '../../../context/filter_context';

export default function IconCheckboxes({ id, check }) {
  const { cartItemDispatch } = useContext(FilterContext);
  const { data } = useFetch('https://fakestoreapi.com/products/' + id);

  const handleAdd = (item) => {
    cartItemDispatch({ type: ACTIONS.ADD_TO_CART, payload: { item: item } });
  };
  const handleRemove = (item) => {
    cartItemDispatch({
      type: ACTIONS.REMOVE_FROM_CART,
      payload: { id: item.id },
    });
  };

  const handleClick = (e) => {
    console.log(e.target.checked, id);
    if (e.target.checked) {
      handleAdd(data);
    } else if (!e.target.checked) {
      handleRemove(data);
      // setCartItem(cartItem.filter((e) => e.id !== id));
    }
  };

  return (
    <div>
      <Tooltip TransitionComponent={Zoom} title='Add to Cart'>
        <Checkbox
          icon={<AddShoppingCartIcon />}
          checked={check}
          checkedIcon={<AddTaskIcon />}
          onClick={(e) => handleClick(e)}
          sx={{
            color: 'var(--link)',
            '&.Mui-checked': {
              backgroundColor: 'var(--link)',
              color: '#fff',
            },
          }}
        />
      </Tooltip>
    </div>
  );
}
