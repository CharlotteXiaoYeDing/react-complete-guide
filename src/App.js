//React is always required for rendering 
import React, { useState } from 'react';
import './App.css';
//Must start with uppercase letter
import Person from './Person/Person'

//Defining component: 
// - define class which extends Component
// - define a function with const 
const app = props => {
    //state is only available if extends Component
    //this refers to the class
    //if state/props changed, will re render the DOM
    //receive a state that returns two elements: current state, a function that allow us to update the state
    const [personsState, setPersonsState] = useState({
      persons: [
        {name: "Max", age: 28 },
        {name: "Manu", age: 26 },
        {name: "Stephanie", age: 29}
      ]
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);
    //use handler to indicate that it's a function not being called
    //do not add parantheses when calling the function
    //setState merges but userHooks does not merge
    const switchNameHandler = () => {
      //Don't do this: this.state.person[0].name = 'Maxi'
      setPersonsState({
        persons: [
          {name: "Maximilian", age: 28 },
          {name: "Manu", age: 26 },
          {name: "Stephanie", age: 27}
        ]
    })
    }
  
    //Every component must return some HTML to the DOM
    return (
      //class is a reserved word. Use className instead.
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={ switchNameHandler }>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbie: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
      //Cannot return another <h1>. We can only have one root element (div)
    );
    // return React.createElement(
    //   'div', 
    //   null,     
    //   React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!!!'))
  }

export default app;


