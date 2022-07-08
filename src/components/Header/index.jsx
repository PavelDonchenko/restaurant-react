/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../Search';

function Header() {
	const {items} = useSelector((state) => state.cart)
	const totalCount = items.reduce((sum, item) => sum + item.count, 0)
	return (
		<header className="header" id="header">
			<section className="header__top top-header">
				<div className="top-header__container">
					<div className="top-header__menu menu">
						<button type="button" className="menu__icon icon-menu"><span></span></button>
						<div className="icon-menu__text">МЕНЮ</div>
						<nav className="menu__body">
							<ul className="menu__list">
								<li className="menu__item"><a href="#" className="menu__link"></a></li>
							</ul>
						</nav>
					</div>
					<Link to="/"><div className="top-header__logo">LOGOS</div></Link>
					<Search />
					<div data-da=".menu__body, 767, 2" className="top-header__contact contact-tel">
						<a href="tel:+79175105759" className="contact-tel__phone"><span>Контакты:<br /></span>+7 (917) 510-57-59</a>

					</div>
					<Link className="linkRight" to="cart"><button type="button" className="top-header__btn">Корзина<span>{totalCount}</span></button></Link>
				</div>
			</section>

		</header>

	)
}

export default Header;