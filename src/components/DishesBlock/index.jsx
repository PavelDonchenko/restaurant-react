import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItems, plusItems, minusItems } from '../../Redux/Slices/cartSlice';



function DishesBlock({ id, imageUrl, title, text, price, weight}) {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items.find((obj) => obj.id === id))
    const addedCount = cartItems ? cartItems.count : null

    const onClickAdd = () => {
        const item = {
            imageUrl,
            title,
            text,
            price,
            id
        }
        dispatch(addItems(item))
    }

    const onClickMinus = () => {
        dispatch(minusItems(id))
    }



    return (

        <div className="dish__slide slide-dish swiper-slide">
            <img src={imageUrl} className="slide-dish__img" alt="Блюдо1" />
            <div className="slide-dish__subscribe subscribe-dish">
                <div className="subscribe-dish__title title-subscribe">
                    <h3 className="itle-subscribe__name">{title}</h3>
                    <p className="itle-subscribe__weight">Вес: {weight} г</p>
                </div>
                <div className="subscribe-dish__text">{text}</div>
                <div className="subscribe-dish__footer footer-subscribe">
                    <div className="footer-subscribe__price">{addedCount <= 1 ? price : price * addedCount} грн.</div>
                    <button type="submit" className="footer-subscribe__basket btn">В корзину</button>
                    <div data-quantity className="quantity">
                        <button onClick={onClickAdd} data-quantity-plus type="button" className="quantity__button quantity__button_plus"></button>

                        <button onClick={() => addedCount > 0 && onClickMinus()} data-quantity-minus type="button" className="quantity__button quantity__button_minus"></button>
                    </div>
                    {addedCount > 0 && (
                        <div className="quantity__input">
                            <input autoComplete="off" type="text" name="form[]" value={addedCount} readOnly />
                        </div>
                    )}

                </div>
            </div>
        </div>

    )
}

export default DishesBlock;