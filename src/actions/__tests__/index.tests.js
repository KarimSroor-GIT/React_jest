import {saveComment} from 'actions';
import {SAVE_COMMENT} from 'actions/types'; 

describe ('saveComment actionType',()=>{

  it('has the correct type', ()=>{
    const testAction = saveComment('New comment');
    expect(testAction.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload',()=>{
    const testAction = saveComment('New comment');
    expect(testAction.payload).toEqual('New comment');
  });
});