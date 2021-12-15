//rfc

import React from 'react'

export default function input(props) {

    function handleChange(e) {
        props.onWeightChange(e.target.value);

    }
    return (
        <div>
            <div><label>Enter weight in {props.unit}</label></div>
            <input type="text" value={props.weight} placeholder={`Enter a weight in ${props.unit}`} onChange={handleChange}/>
        </div>
    )
}
