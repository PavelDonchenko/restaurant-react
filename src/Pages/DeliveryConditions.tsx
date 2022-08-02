import React, { FC } from 'react';
import { Accordion } from '../components/Accordion/Accordion';

type QuestionsAnswers = {
  question: string;
  answer: string;
};
const questionsAnswers = [
  {
    question: 'У наших курьеров всегда должна быть сдача!',
    answer:
      'Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам',
  },
  {
    question: 'Вам что-то не довезли?',
    answer:
      'Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам',
  },
  {
    question: 'Не понравился продукт?',
    answer:
      'Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам',
  },
  {
    question: 'Если появились замечания',
    answer:
      'Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам',
  },
  {
    question: 'Оплата Visa, MasterCard и МИР',
    answer:
      'Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам',
  },
  {
    question: 'Реквизиты',
    answer:
      'Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам',
  },
];
export const DeliveryConditions: FC = () => {
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
