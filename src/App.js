//React is always required for rendering 
import React, { Component } from 'react';
import classes from './App.css';
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
        {id: '1', name: "Max", age: 28 },
        {id: '2', name: "Manu", age: 26 },
        {id: '3', name: "Stephanie", age: 29}
      ],
      otherState: 'some other value',
      showPersons: false
  }

  //use handler to indicate that it's a function not being called
  //do not add parantheses when calling the function
  // switchNameHandler = (newName) => {
  //   //Don't do this: this.state.person[0].name = 'Maxi'
  //   this.setState({persons: [
  //     {name: newName, age: 28 },
  //     {name: "Manu", age: 26 },
  //     {name: "Stephanie", age: 27}
  //   ]})
  // }

  deletePersonHandler = (personIndex) => {
      //slice copy the old array and returna new one
      // const persons = this.state.persons.slice();
      //...is the spread operator
      const persons = [...this.state.persons]
      //delete one element from array
      persons.splice(personIndex, 1)
      this.setState({persons: persons})
  }

  //target is the input into which we typed
  nameChangedHanlder = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id = id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    // const person = Object.assign({}, this.state.person(personIndex))
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons
      this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      pading: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              //key prop help react update lists effectively. It compare virtual DOM and real DOM to figure out the changes. By default, it render the entire lists. With key, it only re render the ones that changed.
              return (<Person 
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                changed={(event) => this.nameChangedHanlder(event, person.id)}/>
              )
            })}
          </div> 
        );
        style.backgroundColor = 'red'
    }

    //"red bold"
    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    //Every component must return some HTML to the DOM
    return (
      //class is a reserved word. Use className instead.
      //bind is prefer to anonymous function
      //For transforming selector, you need to wrap everything in StyleRoot
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button 
            onClick={ () => this.togglePersonsHandler() }
            style={style}
          >Switch Name</button>
          {persons}
        </div>
      //Cannot return another <h1>. We can only have one root element (div)
    );
    // return React.createElement(
    //   'div', 
    //   null,     
    //   React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!!!'))
  }
}

//Higher order component
export default App;
