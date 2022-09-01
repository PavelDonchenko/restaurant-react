/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../Redux/store';
import EmptyCart from '../EmptyCart';
import Search from '../Search';

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = React.useState('');
  const { items } = useSelector((state: RootState) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const [emptyCart, setemptyCart] = React.useState(false);

  const onClickCartOpen = () => {
    !totalCount && setemptyCart(true);
  };

  const onClickCartClose = () => {
    setemptyCart(false);
  };

  return (
    <header className="header" id="header">
      <section className="header__top top-header">
        <div className="top-header__container">
          <div className="top-header__menu">
            <button
              onClick={() => setIsBurgerOpen(isBurgerOpen ? '' : 'open')}
              type="button"
              className="menu__icon icon-menu"
            >
              <span className={isBurgerOpen}></span>
              <span className={isBurgerOpen}></span>
              <span className={isBurgerOpen}></span>
              <div className="icon-menu__text">МЕНЮ</div>
            </button>
            <nav className="menu">
              <ul
                onClick={() => setIsBurgerOpen('')}
                className={isBurgerOpen ? 'header-menu _active' : 'header-menu'}
              >
                <li className="header-menu__item">
                  <a href="tel:+79175105759" className="contact-tel__phone">
                    <span>
                      Контакты:
                      <br />
                    </span>
                    +7 (917) 510-57-59
                  </a>
                </li>
                <Link to="/">
                  <li className="header-menu__item">
                    <a href="#about">О ресторане</a>
                  </li>
                </Link>
                <Link to="/delivery">
                  <li className="header-menu__item">
                    <a>Условия доставки</a>
                  </li>
                </Link>
                <li className="header-menu__item">
                  <a href="#">Возврат товара </a>
                </li>
                <li className="header-menu__item">
                  <a href="#">Акции</a>
                </li>
              </ul>
            </nav>
          </div>
          <Link to="/">
            <div className="top-header__logo">LOGOS</div>
          </Link>
          <Search />
          <div
            data-da=".menu__body, 767, 2"
            className="top-header__contact contact-tel"
          >
            <a href="tel:+79175105759" className="contact-tel__phone">
              <span>
                Контакты:
                <br />
              </span>
              +7 (917) 510-57-59
            </a>
          </div>
          <Link to="cart" className="linkRight">
            <button
              onClick={onClickCartOpen}
              type="button"
              className="top-header__btn"
            >
              Корзина<span>{totalCount}</span>
            </button>
          </Link>
        </div>
      </section>
      {emptyCart && <EmptyCart onClickCartClose={onClickCartClose} />}
    </header>
  );
};

export default Header;
