/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';

//Components
import Card from './Card/Card';
import { FilterContext } from '../context/filter_context';

//Styles
import './Main.css';

const Main = ({ data, searchFilter }) => {
  const [products, setProducts] = useState([]);
  const { filterProducts, cartItems } = React.useContext(FilterContext);
  const {
    categoryFilter,
    starFilter,
    priceFilter,
    minPriceFilter,
    maxPriceFilter,
    sortBy,
  } = filterProducts;

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
          if (categoryFilter === '' || categoryFilter === 'All') {
            return product;
          } else if (product.category === categoryFilter) {
            return product;
          }
        })
        .filter((product) => {
          if (starFilter === '') {
            return product;
          } else if (starFilter === 'item-4') {
            return product.rating.rate >= 4;
          } else if (starFilter === 'item-3') {
            return product.rating.rate >= 3;
          } else if (starFilter === 'item-2') {
            return product.rating.rate >= 2;
          } else if (starFilter === 'item-1') {
            return product.rating.rate >= 1;
          } else if (starFilter === 'item-Clear') {
            return product;
          }
        })

        .filter((product) => {
          if (priceFilter === '') {
            return product;
          } else if (priceFilter === 'Any Price') {
            return product;
          } else if (priceFilter === 'Under $25') {
            return 0 <= product.price && product.price <= 25.0;
          } else if (priceFilter === '$25 to $50') {
            return 25.0 <= product.price && product.price <= 50.0;
          } else if (priceFilter === '$50 to $100') {
            return 50.0 <= product.price && product.price <= 100.0;
          } else if (priceFilter === '$100 to $200') {
            return 100.0 <= product.price && product.price <= 200.0;
          } else if (priceFilter === '$200 & Above') {
            return 200.0 <= product.price;
          } else if (priceFilter === 'custom-price') {
            return (
              minPriceFilter <= product.price && product.price <= maxPriceFilter
            );
          } else if (minPriceFilter === '' && maxPriceFilter === '') {
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
        .map(({ id, image, title, price, rating }) => {
          if (cartItems.length === 0) {
            return (
              <Card
                key={id}
                image={image}
                title={title}
                price={price}
                rating={rating}
                id={id}
                check={false}
              />
            );
          } else if (cartItems.length !== 0) {
            if (cartItems.find((e) => e.id === id)) {
              return (
                <Card
                  key={id}
                  image={image}
                  title={title}
                  price={price}
                  rating={rating}
                  id={id}
                  check={true}
                />
              );
            } else if (cartItems.find((e) => e.id !== id))
              return (
                <Card
                  key={id}
                  image={image}
                  title={title}
                  price={price}
                  rating={rating}
                  id={id}
                  check={false}
                />
              );

            // if (id === id) {
            //   console.log('shit', id);

            //   return (
            //     <Card
            //       key={id}
            //       image={image}
            //       title={title}
            //       price={price}
            //       rating={rating}
            //       id={id}
            //       check={'true'}
            //     />
            //   );
            // } else if (id !== id) {
            //   console.log('no', id);
            //   return (
            //     <Card
            //       key={id}
            //       image={image}
            //       title={title}
            //       price={price}
            //       rating={rating}
            //       id={id}
            //       check={'false'}
            //     />
            //   );
            // }
          }
        })}
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
