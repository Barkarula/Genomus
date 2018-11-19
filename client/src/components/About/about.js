import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
    render() {
    
        return (
            <div className="rl_container">
                <h2>Информация о нас</h2>
                <h3>Здесь будет файл apk. для Android  </h3>
                <h3>Мы в социальных сетях: <a href="https://vk.com/rnimu_rgmu">https://vk.com/rnimu_rgmu</a></h3>
                <h3>Обратная связь: example@gmail.com</h3>
            </div>
        );
    }
}

function mapStateProps(state) {
    return {
        user:state.user
    }
}

export default connect(mapStateProps)(About)