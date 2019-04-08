import React from 'react';

//When using class-based components, it's this.props
const person = (props) => {
    //chilren is reserverd word: refering to any elements between the opening and closing tag
    return (
        <div>
            <p onClick={props.click}>My name is { props.name } and I am { props.age } years old!</p>
            <p>{ props.children }</p>
        </div>
    )
};

export default person;