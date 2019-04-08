//React is always required for rendering 
import React, { Component } from 'react';
import './App.css';
//Must start with uppercase letter
import Person from './Person/Person'

//Defining component: 
// - define class which extends Component
// - define a function with const 
class App extends Component {
  //only available if extends Component
  //this refers to the class
  //if state/props changed, will re render the DOM
  state = {
      persons: [
        {name: "Max", age: 28 },
        {name: "Manu", age: 26 },
        {name: "Stephanie", age: 29}
      ],
      otherState: 'some other value'
  }

  //use handler to indicate that it's a function not being called
  //do not add parantheses when calling the function
  switchNameHandler = () => {
    //Don't do this: this.state.person[0].name = 'Maxi'
    this.setState({persons: [
      {name: "Maximilian", age: 28 },
      {name: "Manu", age: 26 },
      {name: "Stephanie", age: 27}
    ]})
  }
  render() {
    //Every component must return some HTML to the DOM
    return (
      //class is a reserved word. Use className instead.
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={ this.switchNameHandler }>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbie: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
      //Cannot return another <h1>. We can only have one root element (div)
    );
    // return React.createElement(
    //   'div', 
    //   null,     
    //   React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
