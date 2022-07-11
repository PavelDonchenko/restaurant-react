import React from 'react';
import { useDispatch } from 'react-redux';
import { plusItems, minusItems, removeItems } from '../../Redux/Slices/cartSlice';

function CartItems({ id, imageUrl, title, text, price, count }) {
    const dispatch = useDispatch()
    const onClickPlus = () => {
        dispatch(plusItems(id))
    }

    const onClickMinus = () => {
        dispatch(minusItems(id))
    }
    const removeCartItems = () => {
        dispatch(removeItems(id))
    }
    return (
        <div className="items-basket__item item-basket">
            <div className="item-basket__img" > <img src={imageUrl} alt="foto of dish" className="item-basket__img" /></div>
            <div className='item-basket__discr-block'>
                <div className="item-basket__discription">
                    <div className="item-basket__title">
                        {title}
                    </div>
                    <div className="item-basket__text">
                        {text}
                    </div>
                </div>
                <div className='item-basket__btns-block'>
                    <div className="item-basket__quantity">
                        <button onClick={onClickMinus}  className='item-basket__btn-Minus quantity-btn'>-</button>
                        <span>{count}</span>
                        <button onClick={onClickPlus} className='item-basket__btn-Plus quantity-btn'>+</button>
                    </div>
                    <div className="item-basket__total-sum">{price * count}грн</div>
                    <button onClick={removeCartItems} className="item-basket__btn-delete quantity-btn">x</button>
                </div>
            </div>
        </div>
    )
}

export default CartItems