import React, { FC } from 'react';

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
    question: 'Если появились замечания2',
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
interface IProps {
  index: number;
  title: string;
  description: string;
}

export const Accordion: FC<IProps> = ({ index, title, description }) => {
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <div className="accordion-item">
      <button
        onClick={() => setActive(!active)}
        className={active ? 'active' : 'inactive'}
      >
        <span className="title-wrapper">{title}</span>
        <span className="icon-wrapper">
          <span className={active ? 'accordeon-icon-open' : 'accordeon-icon-close'}></span>
        </span>
      </button>
      <div className="accordion-panel">
        <div className={active ? 'panel-open' : 'panel-close'}>
          {description}
        </div>
      </div>
    </div>
  );
};
