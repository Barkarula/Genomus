import React, { Component } from 'react';
import { connect } from 'react-redux';
//import HomeContainer from '../../containers/home_container'
import Test1 from './test1';
import Test2 from './test2';
import UserPosts from '../Admin/userPosts'

class Test extends Component {

    componentWillMount() {
        this.check_role()
    };

    check_role() {
    
    } ;

    render() {

    	// Подстановка компонента
    	if (this.props.user.login.role === 1) {
    		var a = <Test1/>;
    	} else {
    		a = <Test2/>;
            a = <UserPosts/>;
    	}
        console.log(this.props.user.login.role);
        console.log(this.props);

        return (
            <div>
            	{a}
            </div>
        )
    }
}

let mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Test)