import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from '../Home/home';

class AdminWrapper extends Component {
    componentWillMount() {
        this.check_role()
    };

    check_role() {
        console.log(this.props);
        //console.log(this.props.user.login.role);
        if(this.props.user.role !== 0)
            this.props.location.pathname.replace('/')
    } else 
    render() {
        return (
            <div>
                <p>hello</p>
                {this.props.children}
            </div>
        )
    }
}

let mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AdminWrapper)