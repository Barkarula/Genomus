import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/home';
import BookView from './components/Books'
import Login from './containers/Admin/login'
import User from './components/Admin'
import AddReview from './containers/Admin/add'
import UserPosts from './components/Admin/userPosts'
import EditReview from './containers/Admin/edit';
import EditGenom from './containers/Genom/edit';
import EditUserGenom from './containers/Admin/editGenom';
import EditGenInfo from './containers/Geninfo/edit';
import Register from './containers/Admin/register';
import RegisterScreen from './containers/Admin/registerScreen';
import Logout from './components/Admin/logout';
import About from './components/About/about';
import Genom from './containers/Genom/add';

import Unauthorized from './components/Unauthorized/unauthorized';
//import AdminWrapper from './components/Admin/AdminWrapper';
import Test from './components/Test/test';
import Test1 from './components/Test/test1';
import Test2 from './components/Test/test2';
import Profile from './components/Admin/profile';
import Config from './components/Admin/config';
import Compat from './components/Admin/compat';

import Layout from './hoc/layout'
import Auth from './hoc/auth'

const Routes = () => {
    //var a = false; // true
    //var b = <Route path="/user/add" exact component={Auth(AddReview,true)}/>;
    //console.log(user.login);

    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home,null)}/>
                <Route path="/login" exact component={Auth(Login,false)}/>
                <Route path="/user/logout" exact component={Auth(Logout,true)}/>
                <Route path="/user" exact component={Auth(User,true)}/>
                <Route path="/user/add" exact component={Auth(AddReview,true)}/>
                <Route path="/user/register" exact component={Auth(Register,true)}/>
                <Route path="/user/registerScreen" exact component={Auth(RegisterScreen,false)}/>
                <Route path="/user/edit-post/:id" exact component={Auth(EditReview,true)}/>
                <Route path="/user/edit-genom/:id" exact component={Auth(EditGenom,true)}/>
                <Route path="/user/edit-user/:id" exact component={Auth(EditUserGenom,true)}/>
                <Route path="/user/edit-geninfo/:id" exact component={Auth(EditGenInfo,true)}/>
                <Route path="/books/:id" exact component={Auth(BookView,null)}/>
                <Route path="/user/user-reviews" exact component={Auth(UserPosts,true)}/>
                <Route path="/gen" exact component={Auth(Genom,true)}/>
                <Route path="/about" exact component={Auth(About,null)}/>
                <Route path="/user/config" exact component={Auth(Config,null)}/>
                <Route path="/user/compat" exact component={Auth(Compat,null)}/>
                <Route path="/user/profile" exact component={Auth(Profile,null)}/>
                <Route path='/unauthorized' component={Auth(Unauthorized,null)}/>
                <Route path='/test' component={Auth(Test,null)}>
                    <Route path='/test1' component={Auth(Test1,null)}/>
                    <Route path='/test2' component={Auth(Test2,null)}/>
                </Route>    
            </Switch>
        </Layout>
    );
};

export default Routes;