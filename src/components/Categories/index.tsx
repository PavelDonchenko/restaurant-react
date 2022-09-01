/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveCategories } from '../../Redux/Slices/categorySlice';
import { RootState } from '../../Redux/store';
import { CategoriesData } from '../../data/Categories';

const Categories: React.FC = () => {
  const activeCategories = useSelector(
    (state: RootState) => state.categorySlice.activeCategories
  ); // redux Достем активный id из хранилища
  const searchValue = useSelector(
    (state: RootState) => state.search.searchValue
  );
  const dispatch = useDispatch(); //redux вытаскиваем dispatch из библиотеки toolkit;

  const onClickCategoies = (index: number) => {
    dispatch(setActiveCategories(index)); //redux передаем текущий активный id категории в стейт
  };

  return (
    <section data-tabs className="tab__menu menu-tab">
      <div className="menu-tab__container">
        <div className="menu-tab__slider ">
          <ul data-tabs-titles className="menu-tab__wrapper">
            {CategoriesData.map((item, id) => (
              <li
                key={item}
                onClick={() => onClickCategoies(id)}
                className={
                  activeCategories === id
                    ? 'menu-tab__slide  _tab-active'
                    : 'menu-tab__slide '
                }
              >
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="title">
        {searchValue
          ? `Поиск по ...${searchValue}`
          : CategoriesData[activeCategories]}
      </div>
    </section>
  );
};

export default Categories;
