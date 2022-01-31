import { createContext, useState } from 'react';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filterCategory, setFilterCategory] = useState({
    category: '',
    checked: false,
  });

  const [filterStar, setFilterStar] = useState({
    Star: '',
  });

  const [filterPrice, setFilterPrice] = useState({
    price: '',
  });
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

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
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
