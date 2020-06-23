import React from 'react';
import {mount} from 'enzyme';
import CommentBox  from 'components/CommentBox';
import Root from 'Root.js';

// apply before all tests
let wrapped;
beforeEach(()=>{
  wrapped = mount(
    <Root>
    <CommentBox/>
    </Root>
    );
})
//----------------------------------------------------------------------

it ('has a text area and a button ',()=>{

  expect (wrapped.find('textarea').length).toEqual(1);
  expect (wrapped.find('button').length).toEqual(2);
});

describe('validate behaviour of the Text area',()=>{
  beforeEach(()=>{
    wrapped.find('textarea')
    .simulate('change',{target:{value:'new comment generated from unit test'}});
      wrapped.update();   
  });
it ('it has a text area and user can type text into that area',()=>{    
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment generated from unit test');
});

it ('when form is submited , submit will clear the text area after form submit',()=>{
  wrapped.find('form')
  .simulate('submit',{});
 wrapped.update();
 expect(wrapped.find('textarea').prop('value')).toEqual('');
});

});
//apply after all tests 
//-------------------------------------
afterEach(()=>{
  wrapped.unmount();
})