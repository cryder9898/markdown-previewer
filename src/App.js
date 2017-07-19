import React, { Component } from 'react';
import TextArea from './TextArea';
import Output from './Output';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in Spain.\n\n *[Christopher Ryder](https://freecodecamp.com/cryder9898)*'
    };
  }

  handleChange = (event) => {
    let value = event.target.value;

    this.setState(() => {
      let newState = {};
      newState['text'] = value;
      return newState;
    });
  }

  render() {
    return (
      <div className='App'>
        <div className="App-header">
          <h2>Markdown Previewer</h2>
        </div>
        <div className='row'>
          <TextArea
            text={this.state.text}
            onChange={this.handleChange}
          />
          <Output
            text={this.state.text}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
