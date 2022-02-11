import { createContext, useState, useReducer } from 'react';

export const FilterContext = createContext();
export const ACTIONS = {
  ADD_TO_CART: 'add-to-cart',
  REMOVE_FROM_CART: 'remove-from-cart',
  SET_QTY: 'set-qty',
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

export function FilterProvider({ children }) {
  const [filterCategory, setFilterCategory] = useState({
    category: '',
    checked: false,
  });

  const [filterStar, setFilterStar] = useState({
    Star: '',
    checkedStar: false,
  });

  const [filterPrice, setFilterPrice] = useState({
    price: '',
  });
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  const [sortBy, setSortBy] = useState('');

  const [cartItems, cartItemDispatch] = useReducer(cartItemReducer, []);
  console.log(cartItems);

  return (
    <FilterContext.Provider
      value={{
        filterCategory,
        setFilterCategory,
        filterStar,
        setFilterStar,
        filterPrice,
        setFilterPrice,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        sortBy,
        setSortBy,
        cartItems,
        cartItemDispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
