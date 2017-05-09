import React, { Component } from 'react';
import './stylesheets/main.css';
var PropTypes = require('prop-types');

class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        text: value
      }
    })
  }

  render() {
    return(
      <div className='column'>
        <textarea
          id='output'
          type='text'
          className='text-area'
          value={this.props.text}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

TextArea.PropTypes = {
  text: PropTypes.string.isRequired,
}

module.exports = TextArea;
