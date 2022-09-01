import React, { FC } from 'react';

interface IProps {
  index: number;
  title: string;
  description: string;
}

export const Accordion: FC<IProps> = ({ title, description }) => {
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <div className="accordion-item">
      <button
        onClick={() => setActive(!active)}
        className={active ? 'active' : 'inactive'}
      >
        <span className="title-wrapper">{title}</span>
        <span className="icon-wrapper">
          <span
            className={active ? 'accordeon-icon-open' : 'accordeon-icon-close'}
          ></span>
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
