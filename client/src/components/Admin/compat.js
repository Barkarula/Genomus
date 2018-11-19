import React, { Component } from 'react';
import { connect } from 'react-redux';

class Compat extends Component {

    state = {
        formdata:{
            author:'',
            name:''
        }
    }

    handleInput = (event, name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        })
    }

    submitForm = (e) => {
        e.prevetDefault();
        console.log(this.state.formdata)
    }
    //let user = props.user.login;
    //console.log(user);
    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <div className="user_container">
                <div className="nfo">
                    <div className="rl_container article">
                        <form onSubmit={this.submitForm}>
                            <div>
                            <span>Здесь вы можете посмотреть совместимость генетического кода с противоположным полом:</span>
                            </div>
                            <div className="form_element">
                            <input 
                                type='number' 
                                placeholder='Enter alian Qr-code'
                                value={this.state.formdata.author}
                                onChange={(event)=>this.handleInput(event,'author')}
                            />
                            </div>

                            <button type="submit">Проверить</button>

                            <p>.</p>
                            <div>Cовместимость 0%</div>

                            <h6>Убедитесь, что в ваших профилях в полях проставлены значения(0 или 1)</h6>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

function mapStateProps(state) {
    return {
        user:state.user
    }
}

export default connect(mapStateProps)(Compat);