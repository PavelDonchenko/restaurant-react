import React from 'react'
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce';

function Search() {
    const [value, setValue] = React.useState('');
    const {setSearchValue} = React.useContext(SearchContext);


    const updateSearchValue = React.useCallback(debounce((str) => {
        setSearchValue(str)
    },1000),
    []
    )
    const onChangeInput = (event) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }
    return (
        <form className="top-header__form form-header">
            <div className="form-header__container">
                <input 
                onChange = {onChangeInput}
                value = {value}
                className="form-header__input" 
                placeholder="Поиск блюда" 
                type="search" />
                <button className="form-header__button"></button>
            </div>
        </form>
    )
}

export default Search