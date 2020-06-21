import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions/index.js';

class CommentBox extends Component {
state = {comment:''};

handleChange= (event)=>{
this.setState({comment:event.target.value})
};

handleSubmit = (event)=>{
  event.preventDefault();

  //todo: call action creater to create new action that saves comment
  this.props.saveComment(this.state.comment);
  
  this.setState({comment:''})
};

render(){
  return(
<form onSubmit ={this.handleSubmit}>
<h4>Add A New Comment</h4>
<textarea onChange={this.handleChange} value= {this.state.comment}></textarea>
<div>
<button>Submit Comment</button>
</div>
</form>
  );
}
}

export default connect(null,actions)(CommentBox);