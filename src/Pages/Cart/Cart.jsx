/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItems from '../../components/CartItems';
import axios from 'axios';
import CartItemAdd from '../../components/CartItemAdd';



function Cart() {
    const { items, totalPrice, cartItemsAddtoCart } = useSelector((state) => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)
    const [cartItemsAdd, setCartItemsAdd] = React.useState([])


    React.useEffect(() => {
        async function getCartItems() {
            const cartItemsAddResponse = await axios.get('https://62ba0099ff109cd1dc9f5a3f.mockapi.io/cartItemsAdd')
            setCartItemsAdd(cartItemsAddResponse.data)
        }
        getCartItems()
    }, [])
    return (
        <section className="basket">
            <div className="basket__title title-basket">
                <div className="title-basket__container">
                    <Link to="/">
                        <div className="title-basket__return">
                            <svg width="7" height="12" viewBox="0 0 7 12"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.6967C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM1.5 5.25L1 5.25L1 6.75L1.5 6.75L1.5 5.25Z"
                                    fill="white" />
                            </svg>к выбору блюда</div>
                    </Link>
                    <div className="title-basket__title-wrap">
                        <div className="title-basket__title title">КОРЗИНА</div>
                        <a href="" className="title-basket__inside">(в корзине {totalCount} товара)</a>
                    </div>
                </div>
            </div>
            <div className="basket-container">

                <div className="basket__items items-basket">
                    <div className="items-basket__container">
                        {items.map((item) => (
                            <CartItems 
                            key={item.id} 
                            {...item} />
                        ))}
                        {cartItemsAddtoCart.map((cartItem) => (
                            <CartItems
                            key = {cartItem.id}
                            {...cartItem}
                            />
                        ))}

                    </div>
                    <div className="basket__items__to-order">
                        <h2 className="to-order__title title">ДОБАВИТЬ К ЗАКАЗУ</h2>
                        <div className="to-order__items">
                            {cartItemsAdd.map((cartItems) => (
                                <CartItemAdd
                                key={cartItems.id}
                                {...cartItems}
                                />
                            ))}
                            
                        </div>
                    </div>
                </div>
                <div className="basket-total total-basket">
                    <div className="total-basket__disc">
                        <div className="total-basket__sum">Итого: <span>{totalPrice} грн</span></div>
                        <div className="total-basket_free-delivery">До бесплатной доставки не хватет: <span>100 ₽</span></div>
                        <div className="total-basket__min-sum">Минимальная сума заказа 1500 ₽</div>
                    </div>
                    <div className="total-basket__btn">
                        <button className="btn-green">Оформить заказ</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart