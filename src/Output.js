var React = require('react');
var marked = require('marked');

function Output (props){

  function createMarkup(rawtext) {
    return {__html: marked(rawtext)};
  }

  return(
    <div
      dangerouslySetInnerHTML={createMarkup(props.text)}
      className='column output'
    />
  )
}

module.exports = Output;
