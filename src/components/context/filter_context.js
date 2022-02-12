import { createContext, useReducer } from 'react';

export const FilterContext = createContext();

//? -----------cartItems Reducer----------
export const ACTIONS = {
  ADD_TO_CART: 'add-to-cart',
  REMOVE_FROM_CART: 'remove-from-cart',
  SET_QTY: 'set-qty',
  CATEGORY_FILTER: 'category-filter',
  STAR_FILTER: 'star-filter',
  PRICE_FILTER: 'price-filter',
  MAX_PRICE_FILTER: 'max-price-filter',
  MIN_PRICE_FILTER: 'min-price-filter',
  CLEAR_FILTER: 'clear-filter',
  SORT_BY: 'sort-by',
};

const cartItemReducer = (cartItems, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return [...cartItems, NewItem(action.payload.item)];
    case ACTIONS.REMOVE_FROM_CART:
      return cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
    case ACTIONS.SET_QTY:
      return cartItems.filter((cartItem) =>
        action.payload.id === cartItem.id
          ? (cartItem.qty = action.payload.qty)
          : cartItem.qty
      );
    default:
      return cartItems;
  }
};

const NewItem = (item) => {
  return { id: item.id, item: item, qty: 1 };
};

//? ----------FilterProducts Reducer----------
const initialValues = {
  categoryFilter: '',
  starFilter: '',
  priceFilter: '',
  maxPriceFilter: 0,
  minPriceFilter: 0,
  sortBy: '',
};
const filterReducer = (filterProducts, action) => {
  switch (action.type) {
    case ACTIONS.CATEGORY_FILTER:
      return { ...filterProducts, categoryFilter: action.payload };
    case ACTIONS.STAR_FILTER:
      return { ...filterProducts, starFilter: action.payload };
    case ACTIONS.PRICE_FILTER:
      return { ...filterProducts, priceFilter: action.payload };
    case ACTIONS.MAX_PRICE_FILTER:
      return { ...filterProducts, maxPriceFilter: action.payload };
    case ACTIONS.MIN_PRICE_FILTER:
      return { ...filterProducts, minPriceFilter: action.payload };
    case ACTIONS.SORT_BY:
      return { ...filterProducts, sortBy: action.payload };
    case ACTIONS.CLEAR_FILTER:
      return {
        categoryFilter: '',
        starFilter: '',
        priceFilter: '',
        maxPriceFilter: 0,
        minPriceFilter: 0,
        sortBy: '',
      };

    default:
      return filterProducts;
  }
};

export function FilterProvider({ children }) {
  //* ------Reducers------
  const [cartItems, cartItemDispatch] = useReducer(cartItemReducer, []);
  const [filterProducts, filterProductsDispatch] = useReducer(
    filterReducer,
    initialValues
  );

  return (
    <FilterContext.Provider
      value={{
        cartItems,
        cartItemDispatch,
        filterProducts,
        filterProductsDispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
