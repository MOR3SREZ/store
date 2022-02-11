import React from 'react';
import { useFetch } from '../components/Hooks/useFetch';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import SetProducts from '../components/Sort/SortProducts';
import { useState, useContext } from 'react';
import Toastify from '../components/Toastify/Toastify';
import { FilterContext } from '../components/context/filter_context';

const Home = () => {
  const { cartItem } = useContext(FilterContext);
  const { data, error, loading } = useFetch(
    'https://fakestoreapi.com/products'
  );

  const [searchFilter, setSearchFilter] = useState();
  return (
    <>
      {/* <Toastify cartItem={cartItem} /> */}
      <Header setSearchFilter={setSearchFilter} />
      <SetProducts />
      <main>
        {loading && <h2>Loading ...</h2>}
        {error && <h2>{error}</h2>}
        {data && <Main data={data} searchFilter={searchFilter} />}
        <Sidebar />
      </main>
    </>
  );
};

export default Home;
