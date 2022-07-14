import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveCategories } from '../../Redux/Slices/categorySlice';



const Categories: React.FC = () => {
    const activeCategories = useSelector((state: any) => state.categorySlice.activeCategories); // redux Достем активный id из хранилища
    const searchValue = useSelector((state: any) => state.search.searchValue)
    const dispatch = useDispatch(); //redux вытаскиваем dispatch из библиотеки toolkit;
    
    const onClickCategoies = (index: number) => {
        dispatch(setActiveCategories(index)) //redux передаем текущий активный id категории в стейт
    }

    const Categories = ['Холодные закуски', 'Горячие закуски',  'Напитки', 'Супы', 'Рыбные блюда', 'Гриль меню', 'Фирменные блюда']

    return (
        <section data-tabs className="tab__menu menu-tab">
            <div className="menu-tab__container">
                <div className="menu-tab__slider ">
                    <ul data-tabs-titles className="menu-tab__wrapper">
                            {Categories.map((item, id) => (
                                        <li
                                            key={item}
                                            onClick={() => onClickCategoies(id)}
                                            className={activeCategories === id ? "menu-tab__slide  _tab-active" : "menu-tab__slide "}>
                                            <a >{item}</a>
                                        </li>
                            ))}
                    </ul>
                </div>
            </div>
            <div className="title">{searchValue ? `Поиск по ...${searchValue}` : Categories[activeCategories]}</div>
        </section>
    )
}

export default Categories