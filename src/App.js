//React is always required for rendering 
import React, { Component } from 'react';
import './App.css';

//Defining component: define class which extends Component
class App extends Component {
  render() {
//Every component must return some HTML to the DOM
    return (
      //class is a reserved word. Use className instead.
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
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
