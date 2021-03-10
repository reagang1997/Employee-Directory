import React from 'react';
import Search from '../Search';
import './style.css';

function Header({filter}) {
    return (
        <div className='hero text-center'>
            <h1>ISIS Agency</h1>
            <br/>
            <br/>
            <br/>
            <Search filter={filter}/>
            
        </div>
    )
}

export default Header;