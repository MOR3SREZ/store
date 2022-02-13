import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

//styles
import './StarRating.css';
export default function StarRating({ rate }) {
  return (
    <Stack spacing={1}>
      <div className={`start-rating`}>
        <Rating
          name='half-rating-read'
          defaultValue={2.5}
          precision={0.5}
          readOnly
          value={rate}
        />
        <span style={{ cursor: 'arrow' }}> & Up</span>
      </div>
    </Stack>
  );
}
