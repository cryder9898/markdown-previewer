import React from 'react';
import marked from 'marked';

const Output = (props) => {

  const createMarkup = (rawtext) => {
    return {__html: marked(rawtext)};
  };

  return (
    <div
      dangerouslySetInnerHTML={createMarkup(props.text)}
      className='column output'
    />
  );
}

export default Output;
