import React, { Component } from 'react';
import './stylesheets/main.css';
var TextArea = require('./TextArea');
var Output = require('./Output');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Markdown Previewer</h2>
        </div>
        <div className='row'>
          <TextArea />
          <Output />
        </div>
      </div>
    );
  }
}

export default App;
