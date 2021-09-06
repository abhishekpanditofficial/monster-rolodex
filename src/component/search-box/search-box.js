import React from 'react';
import './search-box.css';

export const SearchBox= ({placeholder,handleChange}) =>{
    return(
        <input className='search' type='search' placeholder={placeholder}
         onChange={e => {handleChange(e.target.value)}}/>
    );
}


export default SearchBox;