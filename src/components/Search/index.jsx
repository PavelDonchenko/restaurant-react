import React from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../Redux/Slices/searchSlice';

function Search() {
    const [value, setValue] = React.useState('');
    const dispatch = useDispatch()


    const updateSearchValue = React.useCallback(debounce((str) => {
        dispatch(setSearchValue(str))
    },500),
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
                <button 
                onClick ={(e) => e.preventDefault()}
                className="form-header__button"></button>
            </div>
        </form>
    )
}

export default Search