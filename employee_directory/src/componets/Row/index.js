import React from 'react';

function Row(props){
    return(
        <tr>
            <th>{props.name}</th>
            <th>{props.role}</th>
            <th>{props.age}</th>
        </tr>
    )
}

export default Row;