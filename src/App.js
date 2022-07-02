/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import './scss/app.scss';
import './assets/dynamic_adapt.js';
import Home from "./Pages/Home";
import Cart from "./Pages/Cart/Cart";
import Footer from "./components/Footer";

export const SearchContext = React.createContext()



function App() {
  const [searchValue, setSearchValue] = React.useState('')
  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value = {{searchValue, setSearchValue}}>
          <Header />
          <main className="page">
            <Routes >
              <Route path = '/' element =  {<Home />} />
              <Route path = '/cart' element =  {<Cart />} />
            </Routes>
          </main>
          <Footer />
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
