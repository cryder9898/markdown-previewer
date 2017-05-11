import React, { Component } from 'react';
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
    this.props.onChange(event);
  }

  render() {
    return(
      <div className='column'>
        <textarea
          id='output'
          type='text'
          className='text-area'
          defaultValue={this.props.text}
          onInput={this.handleChange}
        />
      </div>
    )
  }
}

TextArea.PropTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

module.exports = TextArea;
