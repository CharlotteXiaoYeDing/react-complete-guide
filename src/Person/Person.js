import React from 'react';

//When using class-based components, it's this.props
const person = (props) => {
    return <p>My name is { props.name } and I am { props.age } years old!</p>
};

export default person;