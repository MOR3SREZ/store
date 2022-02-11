import React, { useState, useContext } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FilterContext } from '../../context/filter_context';
import StarRating from './StarRating';

const StarRatingFilter = ({ items }) => {
  const { setFilterStar } = useContext(FilterContext);

  const clickHandler = (e) => {
    if (e.target.checked) {
      setFilterStar({
        Star: e.target.id,
        checkedStar: true,
      });
    } else {
      setFilterStar({
        Star: '',
        checkedStar: false,
      });
    }
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
                id={`item-${item}`}
                onClick={(e) => clickHandler(e)}
                sx={{
                  color: 'var(--link)',
                  '&.Mui-checked': {
                    color: 'var(--link)',
                  },
                }}
              />
            }
            label={item === 'Clear' ? 'Clear' : <StarRating rate={+item} />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default StarRatingFilter;
