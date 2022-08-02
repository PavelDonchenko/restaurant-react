import React, { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import ReactSelect from 'react-select';

export const DeliveryForm: FC = () => {
  const [delivery, setDelivery] = React.useState<number>(0);

  interface IDeliveryFields {
    email: string;
    name: string;
    restaurant: string;
    street: string;
    house: string;
    phone: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<IDeliveryFields>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IDeliveryFields> = () => {
    alert('Ваш заказ оформлен');
    reset();
  };

  interface IOption {
    value: string;
    label: string;
  }
  const options: IOption[] = [
    {
      value: 'ресторан1',
      label: 'Ресторан1',
    },
    {
      value: 'ресторан2',
      label: 'Ресторан2',
    },
    {
      value: 'ресторан3',
      label: 'Ресторан3',
    },
    {
      value: 'ресторан4',
      label: 'Ресторан4',
    },
  ];

  const getValue = (value: string) =>
    value ? options.find((option) => option.value === value) : '';

  return (
    <div className="form__container">
      <div className="title-basket__return">
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.6967C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM1.5 5.25L1 5.25L1 6.75L1.5 6.75L1.5 5.25Z"
            fill="white"
          />
        </svg>
        в корзину
      </div>
      <div></div>
      <h1 className="form__title title">Оформление заказа</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__contact contact-form  form-wrapper">
          <div className="contact-form__title form-title">
            1. Контактная информация
          </div>
          <div className="contact-form__wrap">
            <input
              {...register('name', {
                required: 'Name is require field!',
                min: 10,
              })}
              type="text"
              className="contact-form__name form-input"
              placeholder="Имя*"
              style={errors?.name && { border: '1px solid red' }}
            />
            <input
              {...register('phone', {
                required: 'Name is require field!',
              })}
              type="text"
              className="contact-form__phone form-input"
              placeholder="Телефон*"
              style={errors?.name && { border: '1px solid red' }}
            />
          </div>
        </div>

        <div className="form__delivery delivery-form form-wrapper">
          <div className="delivery-form__title form-title">2. Доставка</div>
          <div className="delivery-form__buttons">
            <div
              onClick={() => setDelivery(0)}
              className={
                delivery === 0
                  ? 'delivery-form__button form-button btn-active'
                  : 'delivery-form__button form-button'
              }
            >
              Доставка
            </div>
            <div
              onClick={() => setDelivery(1)}
              className={
                delivery === 1
                  ? 'delivery-form__button form-button btn-active'
                  : 'delivery-form__button form-button'
              }
            >
              Самовывоз
            </div>
            {delivery === 0 && (
              <p className="delivery-form__clock">
                Доставим через 1 час 30 минут
              </p>
            )}
          </div>
          <h4 className="delivery-form__subtitle">
            {delivery === 0 ? 'Адрес доставки' : 'Самовывоз'}
          </h4>
          {delivery === 0 ? (
            <div className="delivery-form__inputs">
              <input
                {...register('street', {
                  required: 'street is require field!',
                })}
                type="text"
                className="delivery-form__street form-input"
                placeholder="Укажите улицу*"
                style={errors?.name && { border: '1px solid red' }}
              />
              <input
                {...register('street', {
                  required: 'street is require field!',
                })}
                type="text"
                className="delivery-form__home form-input"
                placeholder="Номер дома*"
                style={errors?.name && { border: '1px solid red' }}
              />
              <input
                type="text"
                className="delivery-form__apartment form-input"
                placeholder="№ квартиры"
              />
              <input
                type="text"
                className="delivery-form__entrance form-input"
                placeholder="Подъезд"
              />
              <input
                type="text"
                className="delivery-form__floor form-input"
                placeholder="Этаж"
              />
              <input
                type="text"
                className="delivery-form__coments form-input"
                placeholder="Комментарий"
              />
            </div>
          ) : (
            <select
              className="form-select"
              {...register('restaurant', { required: true })}
            >
              <option value="restaurant1">Выберите ресторан</option>
              <option value="restaurant2">restaurant 2</option>
              <option value="restaurant3">restaurant 4</option>
              <option value="restaurant4">restaurant 5</option>
            </select>
          )}
        </div>
        <div className="form__submit submit-form form-wrapper">
          <label htmlFor="form-check">
            <input
              type="checkbox"
              id="form-check"
              className="submit-form__check"
            />
            <span></span>Я согласен на обработку моих перс. данных в
            соответствии с <a href="#">Условиями</a>
          </label>
          <button className="submit-form__btn btn-green">Оформить заказ</button>
        </div>
      </form>
    </div>
  );
};
