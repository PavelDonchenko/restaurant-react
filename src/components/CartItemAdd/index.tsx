import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../../Redux/Slices/cartSlice";

type CartItemAddProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  text: string;
  count: number;
};

const CartItemAdd: React.FC<CartItemAddProps> = ({
  id,
  title,
  price,
  imageUrl,
  text,
  count,
}) => {
  const dispatch = useDispatch();

  const onClickAddCartItem = () => {
    const item = {
      imageUrl,
      title,
      price,
      id,
      text,
      count,
    };
    dispatch(addItems(item));
  };
  return (
    <div className="to-order__item-order">
      <div className="item-order__img">
        <img src={imageUrl} alt="foto of dish" />
      </div>
      <div className="item-order__title">{title}</div>
      <div className="item-order__add">
        <span className="item-order__text">Добавить</span>
        <button
          onClick={onClickAddCartItem}
          className="item-order__btn quantity-btn"
        >
          +
        </button>
      </div>
      <div className="item-order__price">{price}грн</div>
    </div>
  );
};

export default CartItemAdd;
