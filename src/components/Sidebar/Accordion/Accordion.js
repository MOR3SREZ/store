import React, { useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//components
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import PriceFilter from '../PriceFilter/PriceFilter';
import CustomPriceFilter from '../PriceFilter/CustomPriceFilter/CustomPriceFilter';
import { ACTIONS, FilterContext } from '../../context/filter_context';
import StarRatingFilter from '../StarRating/StarRatingFilter';

//Styles
import './Accordion.css';

export default function SimpleAccordion() {
  const { filterProductsDispatch } = useContext(FilterContext);

  const ProductCategory = [
    'All',
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  const ProductPriceFilter = [
    'Any Price',
    'Under $25',
    '$25 to $50',
    '$50 to $100',
    '$100 to $200',
    '$200 & Above',
  ];

  const ProductRatingFilter = ['Clear', '4', '3', '2', '1'];

  return (
    <div>
      <div className='clear-filters'>
        <button
          onClick={() =>
            filterProductsDispatch({
              type: ACTIONS.CLEAR_FILTER,
            })
          }
        >
          Clear All Filters
        </button>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CategoryFilter items={ProductCategory} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Customer Review</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StarRatingFilter items={ProductRatingFilter} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Filter by Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PriceFilter items={ProductPriceFilter} />
          <CustomPriceFilter />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
