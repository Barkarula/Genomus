import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, updateUser, clearUser, deleteUser } from '../../actions'

class EditGenom extends PureComponent {

    state = {
        formdata:{
            _id:this.props.match.params.id,
            name:'',
            lastname:'',
            rule_0:'',
            rule_1:'',
            rule_2:'',
            rule_3:'',
            rule_4:'',
            rule_5:'',
            rule_6:'',
            rule_7:'',
            rule_8:'',
            rule_9:'',
            rule_10:'',
            rule_11:'',
            rule_12:'',
            rule_13:'',
            rule_14:'',
            rule_15:'',
            rule_16:'',
            rule_17:'',
            rule_18:'',
            rule_19:'',
            rule_20:'',
            rule_21:'',
            rule_22:'',
            rule_23:'',
            rule_24:'',
            rule_25:'',
            rule_26:'',
            rule_27:'',
            rule_28:'',
            rule_29:'',
            genId:''
        }
    }


    handleInput = (event,name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        })
    }


    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(updateUser(this.state.formdata))
    }

    deleteUser = () => {
        this.props.dispatch(deleteUser(this.props.match.params.id))
    }
    redirectUser = () => {
        setTimeout(()=>{
            this.props.history.push('/user/register')
        },1000)
    }


    componentWillMount(){
        this.props.dispatch(getUser(this.props.match.params.id))
    }

    componentWillReceiveProps(nextProps){
        //console.log(nextProps);
        //let user = nextProps.users.user;
        let user = nextProps.user.user;
        this.setState({
            formdata:{
                _id:user._id,
                name:user.name,
                lastname:user.lastname,
                rule_0:user.rule_0,
                rule_1:user.rule_1,
                rule_2:user.rule_2,
                rule_3:user.rule_3,
                rule_4:user.rule_4,
                rule_5:user.rule_5,
                rule_6:user.rule_6,
                rule_7:user.rule_7,
                rule_8:user.rule_8,
                rule_9:user.rule_9,
                rule_10:user.rule_10,
                rule_11:user.rule_11,
                rule_12:user.rule_12,
                rule_13:user.rule_13,
                rule_14:user.rule_14,
                rule_15:user.rule_15,
                rule_16:user.rule_16,
                rule_17:user.rule_17,
                rule_18:user.rule_18,
                rule_19:user.rule_19,
                rule_20:user.rule_20,
                rule_21:user.rule_21,
                rule_22:user.rule_22,
                rule_23:user.rule_23,
                rule_24:user.rule_24,
                rule_25:user.rule_25,
                rule_26:user.rule_26,
                rule_27:user.rule_27,
                rule_28:user.rule_28,
                rule_29:user.rule_29,
                genId:user.genId
            }
        })
    }

    componentWillUnmount(){
        this.props.dispatch(clearUser())
    }

    render() {
        console.log(this.props)
        //let users = this.props.users;
        let users = this.props.user;
        return (
            <div className="rl_container article">

             {
                    users.updateUser ? 
                        <div className="edit_confirm">
                            user updated , <Link to={`/user/${users.user._id}`}>
                                Click here to see your 
                            </Link>
                        </div>
                    :null
                }
                {
                    users.userDeleted ? 
                        <div className="red_tag">
                            User Deleted
                            {this.redirectUser()}
                        </div>
                    :null
                }
            
                <form onSubmit={this.submitForm}>
                    <h2>Edit user</h2>


                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={this.state.formdata.name}
                            onChange={(event)=>this.handleInput(event,'name')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter lastname"
                            value={this.state.formdata.lastname}
                            onChange={(event)=>this.handleInput(event,'lastname')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter Genocode"
                            value={this.state.formdata.genId}
                            onChange={(event)=>this.handleInput(event,'genId')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_0"
                            value={this.state.formdata.rule_0}
                            onChange={(event)=>this.handleInput(event,'rule_0')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_1"
                            value={this.state.formdata.rule_1}
                            onChange={(event)=>this.handleInput(event,'rule_1')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_2"
                            value={this.state.formdata.rule_2}
                            onChange={(event)=>this.handleInput(event,'rule_2')}
                        />
                    </div> 

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_3"
                            value={this.state.formdata.rule_3}
                            onChange={(event)=>this.handleInput(event,'rule_3')}
                        />
                    </div> 

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_4"
                            value={this.state.formdata.rule_4}
                            onChange={(event)=>this.handleInput(event,'rule_4')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_5"
                            value={this.state.formdata.rule_5}
                            onChange={(event)=>this.handleInput(event,'rule_5')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_6"
                            value={this.state.formdata.rule_6}
                            onChange={(event)=>this.handleInput(event,'rule_6')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_7"
                            value={this.state.formdata.rule_7}
                            onChange={(event)=>this.handleInput(event,'rule_7')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_8"
                            value={this.state.formdata.rule_8}
                            onChange={(event)=>this.handleInput(event,'rule_8')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_9"
                            value={this.state.formdata.rule_9}
                            onChange={(event)=>this.handleInput(event,'rule_9')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_10"
                            value={this.state.formdata.rule_10}
                            onChange={(event)=>this.handleInput(event,'rule_10')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_11"
                            value={this.state.formdata.rule_11}
                            onChange={(event)=>this.handleInput(event,'rule_11')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_12"
                            value={this.state.formdata.rule_12}
                            onChange={(event)=>this.handleInput(event,'rule_12')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_13"
                            value={this.state.formdata.rule_13}
                            onChange={(event)=>this.handleInput(event,'rule_13')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_14"
                            value={this.state.formdata.rule_14}
                            onChange={(event)=>this.handleInput(event,'rule_14')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_15"
                            value={this.state.formdata.rule_15}
                            onChange={(event)=>this.handleInput(event,'rule_15')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_16"
                            value={this.state.formdata.rule_16}
                            onChange={(event)=>this.handleInput(event,'rule_16')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_17"
                            value={this.state.formdata.rule_17}
                            onChange={(event)=>this.handleInput(event,'rule_17')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_18"
                            value={this.state.formdata.rule_18}
                            onChange={(event)=>this.handleInput(event,'rule_18')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_19"
                            value={this.state.formdata.rule_19}
                            onChange={(event)=>this.handleInput(event,'rule_19')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_20"
                            value={this.state.formdata.rule_20}
                            onChange={(event)=>this.handleInput(event,'rule_20')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_21"
                            value={this.state.formdata.rule_21}
                            onChange={(event)=>this.handleInput(event,'rule_21')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_22"
                            value={this.state.formdata.rule_22}
                            onChange={(event)=>this.handleInput(event,'rule_22')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_23"
                            value={this.state.formdata.rule_23}
                            onChange={(event)=>this.handleInput(event,'rule_23')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_24"
                            value={this.state.formdata.rule_24}
                            onChange={(event)=>this.handleInput(event,'rule_24')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_25"
                            value={this.state.formdata.rule_25}
                            onChange={(event)=>this.handleInput(event,'rule_25')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_26"
                            value={this.state.formdata.rule_26}
                            onChange={(event)=>this.handleInput(event,'rule_26')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_27"
                            value={this.state.formdata.rule_27}
                            onChange={(event)=>this.handleInput(event,'rule_27')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_28"
                            value={this.state.formdata.rule_28}
                            onChange={(event)=>this.handleInput(event,'rule_28')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter rule_29"
                            value={this.state.formdata.rule_29}
                            onChange={(event)=>this.handleInput(event,'rule_29')}
                        />
                    </div>

                    <button type="submit">Edit user</button>
                    <div className="delete_post">
                        <div className="button"
                            onClick={this.deleteUser}
                        >
                            Delete user
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        users:state.users
    }
}

export default connect(mapStateToProps)(EditGenom)