import React from 'react';
import {mount} from 'enzyme';
import CommentList from 'components/commentList';
import Root from 'Root';

let wrapped ;

beforeEach(()=>{
  const initialState = {
    comments:['Comment 1','Comment 2']
  }
  wrapped = mount(
    <Root initialState={initialState}>
    <CommentList/>
    </Root>
  );
});

it ('creates only One Li for each comment',()=>{
expect(wrapped.find('li').length).toEqual(2);
});

it ('adds the correct text for each comment',()=>{
expect(wrapped.render().text()).toContain('Comment 1');
expect(wrapped.render().text()).toContain('Comment 2');
});
