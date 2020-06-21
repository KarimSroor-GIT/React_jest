import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/types';


it ('accepts an actionType SAVE_COMMENT and updates state ',()=>{
const action = {
  type: SAVE_COMMENT,
  payload: 'New Comment'}
  const newState = commentsReducer([],action);
  expect(newState).toEqual(['New Comment'])
});

it ('when recives an actionType that is not defined will not update state ',()=>{

  const newState = commentsReducer([],{Type:'xcxvxb',payload:'Invalid comment'});
  expect(newState).not.toContain('Invalid comment');
  expect(newState).toEqual([]);
});