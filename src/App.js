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
      otherState: 'some other value',
      showPersons: false
  }

  //use handler to indicate that it's a function not being called
  //do not add parantheses when calling the function
  switchNameHandler = (newName) => {
    //Don't do this: this.state.person[0].name = 'Maxi'
    this.setState({persons: [
      {name: newName, age: 28 },
      {name: "Manu", age: 26 },
      {name: "Stephanie", age: 27}
    ]})
  }

  //target is the input into which we typed
  nameChangedHanlder = (event) => {
    this.setState({persons: [
      {name: "Max", age: 28 },
      {name: event.target.value, age: 26 },
      {name: "Stephanie", age: 26}
    ]})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons
      this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      pading: '8px',
      cursor: 'pointer'
    }

    //Every component must return some HTML to the DOM
    return (
      //class is a reserved word. Use className instead.
      //bind is prefer to anonymous function
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button 
          onClick={ () => this.togglePersonsHandler() }
          style={style}
        >Switch Name</button>
        {
          this.state.showPersons === true ? 
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={ this.switchNameHandler.bind(this, "charly")}
              changed={this.nameChangedHanlder}>My Hobbie: Racing</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} />
          </div> : null
        }
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
