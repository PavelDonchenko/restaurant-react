/* eslint-disable jsx-a11y/anchor-has-content */
import Header from "./components/Header";
import './scss/app.scss';
import './assets/dynamic_adapt.js';

import Home from "./Pages/Home";
import Cart from "./Pages/Cart/Cart";
import Footer from "./components/Footer";

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="page">
          <Routes>
            <Route path = '/' element =  {<Home />} />
            <Route path = '/cart' element =  {<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
