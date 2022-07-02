import React from 'react'
import { SearchContext } from '../../App'

function Search() {
    const {searchValue, setSearchValue} = React.useContext(SearchContext);
    return (
        <form className="top-header__form form-header">
            <div className="form-header__container">
                <input 
                onChange = {event => setSearchValue(event.target.value)}
                value = {searchValue}
                className="form-header__input" 
                placeholder="Поиск блюда" 
                type="search" />
                <button className="form-header__button"></button>
            </div>
        </form>
    )
}

export default Search