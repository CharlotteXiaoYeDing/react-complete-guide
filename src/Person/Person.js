import React from 'react';
import './Person.css'

//When using class-based components, it's this.props
const person = (props) => {

    //chilren is reserverd word: refering to any elements between the opening and closing tag
    return (
        <div className="Person">
            <p onClick={props.click}>My name is { props.name } and I am { props.age } years old!</p>
            <p>{ props.children }</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;