import React, { Component } from 'react';
import {Lifecycles} from './lifecycles.component'
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      text: '',
      showChild: true,
    }
  }
  render() {
    const {showChild, text} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button
                onClick={() => {
                  this.setState({
                    showChild: !showChild
                  });
                }}
            > Toggle Lifecycles</button>
            <button
                onClick={() => {
                  this.setState({
                    text: text+'_hello'
                  })
                }}
            > Update Text </button>
            { showChild === true ? <Lifecycles text={text}/> : null }
          </header>
        </div>
    );
  }
}

export default App;
