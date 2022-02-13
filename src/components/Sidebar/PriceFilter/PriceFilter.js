import React, { useContext } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

//components
import { ACTIONS, FilterContext } from '../../context/filter_context';

export default function PriceFilter({ items }) {
  const { filterProductsDispatch } = useContext(FilterContext);

  const handleChange = (e) => {
    filterProductsDispatch({
      type: ACTIONS.PRICE_FILTER,
      payload: e.target.id,
    });
    filterProductsDispatch({
      type: ACTIONS.MAX_PRICE_FILTER,
      payload: '',
    });
    filterProductsDispatch({
      type: ACTIONS.MIN_PRICE_FILTER,
      payload: '',
    });
  };

  return (
    <FormControl
      sx={{
        '& .MuiTypography-root:hover': {
          color: 'var(--primary)',
        },
      }}
    >
      <RadioGroup
        aria-labelledby='demo-controlled-radio-buttons-group'
        name='controlled-radio-buttons-group'
      >
        {items.map((item) => (
          <FormControlLabel
            key={item}
            value={item}
            control={
              <Radio
                id={item}
                onClick={(e) => handleChange(e)}
                sx={{
                  color: 'var(--link)',
                  '&.Mui-checked': {
                    color: 'var(--link)',
                  },
                }}
              />
            }
            label={item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
