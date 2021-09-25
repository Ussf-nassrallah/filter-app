import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './SearchBar.scss'

const SearchBar = ({ value, changeInput }) => {
    return (
        <div className="searchBar">
            <SearchIcon className="searchBar__icon" />
            <input
                className="searchBar__input"
                type="text"
                value={value}
                placeholder="Woodland Hills"
                onChange={changeInput}
            />
        </div>
    )
}

export default SearchBar
