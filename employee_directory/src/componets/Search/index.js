import React from 'react';
import './style.css';

function Search({filter}) {
    return (
        <input onChange={filter} placeholder='Sterling Archer'></input>
    );
}

export default Search;