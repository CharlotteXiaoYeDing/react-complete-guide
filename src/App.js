import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent'

class App extends Component {

  state = {
    textLength: 0,
    letters: []
  }

  inputBoxHandler = (event) => {
    const text = event.target.value
    const length = text.length
    this.setState({
      textLength: length,
      letters: text.split('')
    })
  }

  deleteCharComponentHandler = (index) => {
    const lettersCopy = [...this.state.letters]
    lettersCopy.splice(index, 1)
    this.setState({
      letters: lettersCopy
    })
  }

  render() {
    const charComponents = (
      <div>{
        this.state.letters.map((letter, index) => {
          return <CharComponent letter={letter} key={index} click={() => this.deleteCharComponentHandler(index)}></CharComponent>
        })
      }</div>
    )

    return (
      <div className="App">
        <input onChange={this.inputBoxHandler}/>
        <p>{this.state.textLength}</p>
        <ValidationComponent textLength={this.state.textLength}></ValidationComponent>
        <div>{charComponents}</div>
      </div>
    );
  }
}

export default App;
