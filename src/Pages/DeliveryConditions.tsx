import React, { FC } from 'react';

import { Accordion } from '../components/Accordion/Accordion';
import { questionsAnswers } from '../data/AccordionData';

const DeliveryConditions: FC = () => {
  return (
    <div className="delivery__container">
      <h1 className="delivery__title title">Условия доставки</h1>
      <div className="delivery__main">
        <div className="delivery__accordeon">
          {questionsAnswers.map((item, index) => (
            <Accordion
              key={index}
              index={index}
              title={item.question}
              description={item.answer}
            />
          ))}
        </div>
        <div className="delivery__map"></div>
      </div>
      <div className="delivery__footer footer-delivery">
        <div className="footer-delivery__item">
          <div className="footer-delivery__title">График работы доставки:</div>
          <div className="footer-delivery__text">с 10:00-21:00</div>
        </div>
        <div className="footer-delivery__item">
          <div className="footer-delivery__title">График работы кафе:</div>
          <div className="footer-delivery__text">с 08:00-21:00</div>
        </div>
        <div className="footer-delivery__item">
          <div className="footer-delivery__title">Минимальный заказ:</div>
          <div className="footer-delivery__text">
            Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
            Доставка оператором такси от любой суммы заказа - по тарифам
            перевозчика.
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeliveryConditions;
