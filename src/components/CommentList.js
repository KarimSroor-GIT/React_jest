import React, { Component } from 'react';
import {connect} from 'react-redux';


class commentList extends Component {

  renderComments()
  {
    return this.props.comments.map( 
      comment =>{
        return <li key={comment}>{comment}</li>
      });
  };

    render(){
      return(
        <div>
        <ul>
        {this.renderComments()}
        </ul>
        </div>
      );
    };
};
function mapStateToProps(state){
return {comments:state.comments}
}
export default connect(mapStateToProps,null)(commentList);