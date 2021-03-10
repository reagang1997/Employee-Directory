import React from 'react';
import Search from '../Search';
import './style.css';

function Header({filter}) {
    return (
        <div className='hero text-center'>
            <h1>International Secret Intelligence Service</h1>
            <br/>
            <br/>
            <br/>
            <Search filter={filter}/>
            
        </div>
    )
}

export default Header;