import React, { useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useFetch } from '../../../Hooks/useFetch';
import { FilterContext } from '../../../context/filter_context';

export default function IconCheckboxes({ id }) {
  const { setCartItem, cartItem, setRemoveCartItem, setAddCartItem } =
    useContext(FilterContext);

  const { data } = useFetch('https://fakestoreapi.com/products/' + id);

  const handleAdd = (id) => {
    setAddCartItem(data);
    setRemoveCartItem([]);

    setCartItem((prev) => [...prev, id]);
  };
  const handleRemove = (id) => {
    setRemoveCartItem(data);
    setAddCartItem([]);

    let remove = cartItem.filter((item) => item !== id);
    setCartItem(remove);
  };

  const handleClick = (e) => {
    if (e.target.checked) {
      handleAdd(data);
    } else if (!e.target.checked) {
      handleRemove(data);
    }
  };

  return (
    <div>
      <Tooltip TransitionComponent={Zoom} title='Add to Cart'>
        <Checkbox
          icon={<AddShoppingCartIcon />}
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
