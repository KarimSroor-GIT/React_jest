import React, { Component } from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { Route ,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

class App extends Component{
  renderButton(){
    let authToggle = !this.props.auth;
    return(<button onClick={()=>this.props.changeAuth(authToggle)}
      >{this.props.auth?'Signout':'SignIn'}</button>)
  }

  renderHeader(){
    return(
      <ul>
      <li><Link to="/"> Home</Link></li>
      <li><Link to="/post"> Post New Comment</Link></li>
      <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render(){
return (
   
<div>
{this.renderHeader()}
<Route path="/post" component={CommentBox}/>
<Route path="/"  exact component={CommentList}/>
</div>
  )
};

};

function mapStateToProps(state) {
  return {auth:state.auth}
}

export default connect(mapStateToProps,actions)(App);