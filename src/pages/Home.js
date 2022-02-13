import { useState } from 'react';

//components
import { useFetch } from '../components/Hooks/useFetch';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import SetProducts from '../components/Sort/SortProducts';

const Home = () => {
  const { data, error, loading } = useFetch(
    'https://fakestoreapi.com/products'
  );

  const [searchFilter, setSearchFilter] = useState();
  return (
    <>
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
