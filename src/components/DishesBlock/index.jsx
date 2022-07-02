import React from 'react';



function DishesBlock({ imageUrl, title, text, price, weight }) {


    const [isCount, setIsCount] = React.useState(0);

    const changePlusCount = () => {
        setIsCount(isCount + 1)
    }
    const changeMinusCount = () => {
        setIsCount(isCount - 1)
    }
    return (

        <a href="#!" className="dish__slide slide-dish swiper-slide">
            <img src={imageUrl} className="slide-dish__img" alt="Блюдо1" />
            <div className="slide-dish__subscribe subscribe-dish">
                <div className="subscribe-dish__title title-subscribe">
                    <h3 className="itle-subscribe__name">{title}</h3>
                    <p className="itle-subscribe__weight">Вес: {weight} г</p>
                </div>
                <div className="subscribe-dish__text">{text}</div>
                <div className="subscribe-dish__footer footer-subscribe">
                    <div className="footer-subscribe__price">{isCount <= 1 ? price : price * isCount} грн.</div>
                    <button type="submit" className="footer-subscribe__basket btn">В корзину</button>
                    <div data-quantity className="quantity">
                        <button onClick={() => changePlusCount()} data-quantity-plus type="button" className="quantity__button quantity__button_plus"></button>

                        <button onClick={() => isCount > 0 && changeMinusCount()} data-quantity-minus type="button" className="quantity__button quantity__button_minus"></button>
                    </div>
                    {isCount > 0 && (
                        <div className="quantity__input">
                        <input autoComplete="off" type="text" name="form[]" value={isCount} readOnly />
                    </div>
                    )}
                    
                </div>
            </div>
        </a>

    )
}

export default DishesBlock;