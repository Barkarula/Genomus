import React from 'react';
import { connect } from 'react-redux';

const Config = (props) => {
    //let user = props.user.login;
    //console.log(user);

    return (

        <div className="rl_container article">
            <div className="user_container">
                <div className="nfo">
                    <h1>Настройки профиля: </h1>
                    <div className="form_element">
                    <span>Изменить ваше имя</span>
                        <input 
                            className="form_element"
                            type='text' 
                            placeholder='Enter name'
                        />
                    <div>
                    <p>.</p>
                    <span>Изменить вашу фамилию</span>
                    </div>
                    <input 
                        className="form_element"
                        type='text' 
                        placeholder='Enter lastname'
                    />
                <button type="submit">Применить</button>
                <p>Пока эта кнопка не активна</p>

                </div>
                </div>
            </div>
        </div>
    );
};

//export default Profile;


function mapStateProps(state) {
    return {
        user:state.user
    }
}

export default connect(mapStateProps)(Config);