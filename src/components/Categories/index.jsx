import React from 'react';
import { SearchContext } from '../../App';



function Categories({value, onClickCategoies}) {
    const {searchValue} = React.useContext(SearchContext)
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
                                            className={value === id ? "menu-tab__slide  _tab-active" : "menu-tab__slide "}>
                                            <a href="#!">{item}</a>
                                        </li>
                            ))}
                    </ul>
                </div>
            </div>
            <div className="title">{searchValue ? `Поиск по ...${searchValue}` : Categories[value]}</div>
        </section>
    )
}

export default Categories