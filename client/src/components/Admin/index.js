import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    let user = props.user.login;
    console.log(props);
    return (
        <div className="user_container">
            <div className="avatar">
                <img alt="avatar" src="/images/avatar.png"/>
            </div>
            <div className="nfo">
                <div><span>Name:</span> {user.name}</div>
                <div><span>Lastname:</span> {user.lastname}</div>
                <div><span>Email:</span> {user.email}</div>
                <div><span>GenId:</span> {user.genId}</div>
                <div className="rl_container article">
                <Link to={`/user/config`}>
                <button type="submit">Настройки</button>
                </Link>
                <Link to={`/user/profile`}>
                    <button type="submit">Профиль</button>
                </Link>
                <Link to={`/user/compat`}>
                    <button type="submit">Совместимость</button>
                </Link>
    
                </div>
            </div>
        </div>
    );
};

export default User;