import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FilterContext } from '../context/filter_context';

//styles
import './SortProducts.css';

const SortProducts = () => {
  const { sortBy, setSortBy } = React.useContext(FilterContext);

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className='sort-products'>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id='demo-simple-select-standard-label'>Sort by:</InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={sortBy}
          onChange={handleChange}
          label='feature'
        >
          <MenuItem value={'none'}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'price-down'}>Price: Low to High</MenuItem>
          <MenuItem value={'price-up'}>Price: High to Low</MenuItem>
          <MenuItem value={'star-down'}>Popularity: Low To High</MenuItem>
          <MenuItem value={'star-up'}>Popularity: High To Low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortProducts;
