import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = (event) => {
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
    );
  }
}

TextArea.PropTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextArea;
