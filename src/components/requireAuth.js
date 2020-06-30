import {React,Component} from 'react';
import {connect} from 'react-redux';

export default ( ChildComponent )=> {

class ComposedComponent extends Component {

  componentDidMount(){
    return this.navigateAway();
    }
    componentDidUpdate(){
    return this.navigateAway();
    }
    navigateAway(){
      if (!this.props.auth)
      this.props.history.push('/')
    }
render(){

   return <ChildComponent {...this.props}/>
    };
  }

  function mapStateToProps (state){
    return {auth:state.auth}
  }
  return connect(mapStateToProps,null)(ComposedComponent);
};
