import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import  App from 'components/App';
import Root from 'Root';

let wrapped;

beforeEach(()=>{
  //attempt to render full app and all components 
 wrapped = mount (
   <Root>
   <App/>
   </Root>
 );

 moxios.install();
 moxios.stubRequest('',{
   status:200,
   response: [{name:'test fetch comment 1'},{name:'test fetch comment 2'}]
 });
});

afterEach(()=>{
  moxios.uninstall();
  wrapped.unmount();
});

it ('it can fetch a list of comments and display name',()=>{
  //attempt to locate fetch comments button and simulate click action
  wrapped.find('.fetch-comments').simulate('click');
  //attempt to check the feteched list of comments is displayed correctly

 // using moxios here to fake axios get request 
 // the wait call is needed to provide some delay for moxios to intercept the request
 moxios.wait(()=>{
 wrapped.update();
 expect(wrapped.find('li').length).toEqual(2);
 });

});