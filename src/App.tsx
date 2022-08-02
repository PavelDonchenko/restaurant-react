/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import "./scss/app.scss";
import "./assets/dynamic_adapt.js";
import Home from "./Pages/Home";
import { DeliveryConditions } from "./Pages/DeliveryConditions";
import { DeliveryForm } from "./Pages/DeliveryForm";


const Cart = React.lazy(
  () => import(/* webpachChunkName: "Cart" */ "./Pages/Cart")
);
const DishCard = React.lazy(
  () => import(/* webpachChunkName: "DishCard" */ "./Pages/DishCard")
);
const Footer = React.lazy(
  () => import(/* webpachChunkName: "Footer" */ "./components/Footer")
);

function App() {
 
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <Cart />
                </Suspense>
              }
            />
            <Route
              path="/dishCard/:id"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <DishCard />
                </Suspense>
              }
            />
             <Route
              path="/delivery"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <DeliveryConditions />
                </Suspense>
              }
            />
             <Route
              path="/delivery-form"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <DeliveryForm />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
