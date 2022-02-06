import React from 'react';

import { Carousel } from 'react-carousel-minimal';

//styles
import './Carousel.css';

const ProductCarousel = ({ ax }) => {
  const data = [
    {
      image: `${ax}`,
      caption: '',
    },
    {
      image: `${ax}`,
      caption: '',
    },
    {
      image: `${ax}`,
      caption: '',
    },
    {
      image: `${ax}`,
      caption: '',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg',
      caption: '',
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  return (
    <div className='app'>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '0 20px',
          }}
        >
          <Carousel
            data={data}
            width='700px'
            height='500px'
            captionStyle={captionStyle}
            radius='10px'
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition='bottom'
            automatic={false}
            dots={true}
            pauseIconColor='white'
            pauseIconSize='40px'
            slideBackgroundColor='white'
            slideImageFit='contain'
            thumbnails={true}
            thumbnailWidth='100px'
            style={{
              textAlign: 'center',
              maxWidth: '450px',
              maxHeight: '550px',
              margin: '40px auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductCarousel;
