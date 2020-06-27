import React from 'react';


const Hello = () => {

  /*
   * JSX Version
   */
  return (
    <div className={'dummy-class'}>
      <h1>Hello, how are you?</h1>
    </div>
  );


  /*
  return React.createElement(
    'div',
    {'id': 'hello', 'className': 'dummy-class'},
    React.createElement('h1', null, 'Hello, how are you?')
  );
  */
};

export default Hello;
