import React, { Component } from 'react';
import './stylesheets/main.css';
var marked = require('marked');

function Output (props){

  function createMarkup() {
    return {__html: marked(props.text)};
  }

  return(
    <div
      dangerouslySetInnerHTML={createMarkup()}
      className='column Output'
    />
  )
}

module.exports = Output;
