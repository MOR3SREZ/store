/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';

//Components
import Card from './Card/Card';
import { FilterContext } from '../context/filter_context';

//Styles
import './Main.css';

const Main = ({ data, searchFilter }) => {
  const [products, setProducts] = useState([]);
  const {
    filterCategory,
    filterStar,
    filterPrice,
    minPrice,
    maxPrice,
    sortBy,
  } = React.useContext(FilterContext);
  const { category, checked } = filterCategory;
  const { Star } = filterStar;
  const { price } = filterPrice;
  // let f = 0;

  // const sortData = useCallback(() => {

  // }, []);

  useEffect(() => {
    if (sortBy === 'none' || sortBy === '') {
      let list = data.sort((a, b) => a.id - b.id);

      setProducts([...list]);
    } else if (sortBy === 'price-down') {
      let list = data.sort((a, b) => a.price - b.price);
      setProducts([...list]);
    } else if (sortBy === 'price-up') {
      let list = data.sort((a, b) => b.price - a.price);
      setProducts([...list]);
    } else if (sortBy === 'star-down') {
      let list = data.sort((a, b) => a.rating.rate - b.rating.rate);
      setProducts([...list]);
    } else if (sortBy === 'star-up') {
      let list = data.sort((a, b) => b.rating.rate - a.rating.rate);
      setProducts([...list]);
    }
  }, [sortBy, data]);

  return (
    <div className='product-container'>
      {products
        .filter((product) => {
          if (category === '' || category === 'All') {
            return product;
          } else if (product.category === category && checked) {
            return product;
          }
        })
        .filter((product) => {
          if (Star === '') {
            return product;
          } else if (Star === 'star-4') {
            return product.rating.rate >= 4;
          } else if (Star === 'star-3') {
            return product.rating.rate >= 3;
          } else if (Star === 'star-2') {
            return product.rating.rate >= 2;
          } else if (Star === 'star-1') {
            return product.rating.rate >= 1;
          } else if (Star === 'clear') {
            return product;
          }
        })

        .filter((product) => {
          if (price === '') {
            return product;
          } else if (price === 'Any Price') {
            return product;
          } else if (price === 'Under $25') {
            return 0 <= product.price && product.price <= 25.0;
          } else if (price === '$25 to $50') {
            return 25.0 <= product.price && product.price <= 50.0;
          } else if (price === '$50 to $100') {
            return 50.0 <= product.price && product.price <= 100.0;
          } else if (price === '$100 to $200') {
            return 100.0 <= product.price && product.price <= 200.0;
          } else if (price === '$200 & Above') {
            return 200.0 <= product.price;
          } else if (price === 'custom-price') {
            return minPrice <= product.price && product.price <= maxPrice;
          } else if (minPrice === '' && maxPrice === '') {
            return product;
          }
        })
        .filter((product) => {
          if (searchFilter === '') {
            return product;
          } else if (
            product.title.toLowerCase().includes(searchFilter.toLowerCase())
          ) {
            return product;
          }
        })
        .map(({ id, image, title, price, rating }) => (
          <Card
            key={id}
            image={image}
            title={title}
            price={price}
            rating={rating}
            id={id}
          />
        ))}
      {/* {f === 0 && (
        <div className='filter-error'>
          <h4>there is no product with the current filters you selected</h4>
          <p>please try to change filter's options </p>
        </div>
      )} */}
    </div>
  );
};

export default Main;
