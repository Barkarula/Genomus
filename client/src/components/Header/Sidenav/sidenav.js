import React from 'react';
import SideNav from 'react-simple-sidenav';
import SidenavItems from './sidenav_items';

import { connect } from 'react-redux';

const Nav = (props) => {
  //console.log(props);
    return (
       <SideNav
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            navStyle={{
                background:'#242424',
                maxWidth:'220px'
            }}
       >
           <SidenavItems/>
        </SideNav>
    );
};

//export default Nav;

let mapStateToProps = state => {
  return {
    user: state.user.role
  }
}

export default connect(mapStateToProps)(Nav)