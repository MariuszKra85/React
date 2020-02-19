import React from 'react';
import './Person.css'

const person = (props) => {

    // return(<div>

    //     <p>I'm {props.name} and i have {props.age} words</p>
    //     <p>{props.children}</p>
    // </div> 
    // )
    return (
        <div className="Person">

            <p onClick={props.click}>I'm {props.name} and i have {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.value} />

        </div>
    )
}
export default person;
