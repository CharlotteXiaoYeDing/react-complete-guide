import React, { Component } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: 'charlotte'
  }

  stateChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const style = {
      width: '250px',
      height: '250px'
    }
    return (
      <div className="App" style={style}>
        <UserInput stateChanged={this.stateChangedHandler} username={this.state.username}></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput></UserOutput>
        <UserOutput></UserOutput>
        <UserOutput></UserOutput>
        <UserOutput></UserOutput>
      </div>
    );
  }
}

export default App;
