import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

const SidenavItems = ({user}) => {

//componentWillMount() {
//    this.props.dispatch(getUserRoleTest(${user}))
//}

/*
let response = axios.get(`/api/getUser?id=5bdff2418f4ec721b41264e0`)
            .then(response =>{
                //sconsole.log(user.login.id);
                response.data.role
            })
*/
//var testOfUndef = user.login.id;
//console.log(user.login);
//console.log(this.props.user);
        
    const items = [
        {
            type:'navItem',
            icon:'home',
            text:'Home',
            link:'/',
            restricted:false
        },
        {
            type:'navItem',
            icon:'address-card',
            text:'My Profile',
            link:'/user',
            restricted:true
        },
        {
            type:'navItem',
            icon:'address-book',
            text:'Add User',
            link:'/user/register',
            restricted:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'Login',
            link:'/login',
            restricted:false,
            exclude:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'My reviews',
            link:'/user/user-reviews',
            restricted:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'Add reviews',
            link:'/user/add',
            restricted:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'Add reviews rules',
            link:'/gen',
            restricted:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'window-restore',
            text:'Logout',
            link:'/user/logout',
            restricted:true,
        },
        {
            type:'navItem',
            icon:'heartbeat',
            text:'About us',
            link:'/about',
            restricted:false
        },
        {
            type:'navItem',
            icon:'square-o',
            text:'Test',
            link:'/test',
            restricted:false
        }
    ]

    const element = (item,i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon}/>
                {item.text}
            </Link>
        </div>
    )

/*
    const showItems = () => (
        user.login ?
            items.map((item,i)=>{
                if(user.login.isAuth) {
                    return !item.exclude ?
                        element(item,i)
                    :null
                } else { 
                    return !item.restricted ?
                        element(item,i)
                    :null
                }
            })
        :null
    )
    */
    const showItems = () => (
        user.login ?
            items.map((item,i)=>{
                if(user.login.isAuth) {
                    //console.log(user.login.role);
                    if (user.login.role === 0) {
                        return !item.exclude ?
                            element(item,i)
                        :null
                    } else { 
                        return !item.exclude_for_user ?
                            element(item,i)
                        :null
                    }
                } else { 
                    return !item.restricted ?
                        element(item,i)
                    :null
                } 
            })
        :null
    )
    return (
        <div>
            {showItems()}
        </div>
    );
};

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(SidenavItems)

