import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

it ('Shows a comment box', ()=>{
  const div = document.createElement('div');
  ReactDOM.render(<App/>,div);

  expect (div.innerHTML).toContain('I am Component Box');
  expect (div.innerHTML).toContain('I am Component List');

  ReactDOM.unmountComponentAtNode(div);
});