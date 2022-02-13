import React from 'react';
import ReactDOM from 'react-dom';

//components
import App from './App';
import { FilterProvider } from './components/context/filter_context';

//styles
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
