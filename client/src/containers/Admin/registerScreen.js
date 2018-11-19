import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { userRegister } from '../../actions';

class RegisterScreen extends PureComponent {

    state ={
        name:'',
        lastname:'',
        email:'',
        password:'',
        genId:'',
        role: 1,
        error:''
    }

    handleInputEmail = (event) => {
        this.setState({email:event.target.value})
    } 
    handleInputPassword= (event) => {
        this.setState({password:event.target.value})
    } 
    handleInputName = (event) => {
        this.setState({name:event.target.value})
    } 
    handleInputLastname = (event) => {
        this.setState({lastname:event.target.value})
    } 
    handleInputGenId = (event) => {
        this.setState({genId:event.target.value})
    } 

    componentWillReceiveProps(nextProps){
        if(nextProps.user.register === false){
            this.setState({error:'Error,try again. Maybe your GI busy'})
        } else{
            this.setState({
                name:'',
                lastname:'',
                email:'',
                password:'',
                genId:'',
                role: 1
            })
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        this.setState({error:''});

        this.props.dispatch(userRegister({
            email:this.state.email,
            password:this.state.password,
            name:this.state.name,
            lastname:this.state.lastname,
            genId:this.state.genId,
            role:this.state.role
        },this.props.user.users));
        
    }

    render() {
        //let user = this.props.user;
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2> Enter your data</h2>
                    <h4>we have adopted real names and surnames</h4>
                    
                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={this.state.name}
                            onChange={this.handleInputName}
                         />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter Lastname"
                            value={this.state.lastname}
                            onChange={this.handleInputLastname}
                         />
                    </div>

                    <div className="form_element">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                         />
                    </div>

                    <div className="form_element">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                         />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter GenId"
                            value={this.state.genId}
                            onChange={this.handleInputGenId}
                         />
                    </div>

                    <button type="submit">Done</button>
                    <div className="error">
                        {this.state.error}
                    </div>

                </form>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(RegisterScreen)