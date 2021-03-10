import React from 'react';
import Row from '../Row';
import './style.css'

function Table(props){
    return(
        <table className='table'>
            <tr>
                <th className='pointer'>Name</th>
                <th className='pointer'>Role</th>
                <th className='pointer'>Age</th>
            </tr>
            {props.emps.map(emp => <Row
            name={emp.name}
            role={emp.role}
            age={emp.age}
            />)}
        </table>
    )
}

export default Table;