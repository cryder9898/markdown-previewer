import React, { Component } from 'react';
import './App.css';
var TextArea = require('./TextArea');
var Output = require('./Output');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Markdown Previewer</h2>
        </div>
        <div className='container'>
          <TextArea />
          <Output />
        </div>
      </div>
    );
  }
}

export default App;
