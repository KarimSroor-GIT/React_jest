import React from 'react';
import { shallow} from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapper;
beforeEach(()=>{
  wrapper = shallow(<App />);
});

it ('Shows one instance of  comment box component', ()=>{
expect(wrapper.find(CommentBox).length).toEqual(1);

});

it ('shows one instance of comment List component',()=>{
  expect(wrapper.find(CommentList).length).toEqual(1);
});