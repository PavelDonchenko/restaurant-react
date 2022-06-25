/* eslint-disable jsx-a11y/anchor-has-content */
import Header from "./components/Header";
import Banner from "./components/Banner";
import './scss/app.scss';
import './js/libs/dynamic_adapt';

import Categories from "./components/Categories";
import ColdDishes from "./components/ColdDishes";
import HotDishes from "./components/HotDishes";
import About from "./components/About";
import Map from "./components/Map";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="page">
          <Banner />
          <Categories />
          <ColdDishes />
          <HotDishes />
          <About />
          <Map />

        </main>
        <Footer />
      </div>

    </div>
  );
}

export default App;
