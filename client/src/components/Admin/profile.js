import React from 'react';
import { connect } from 'react-redux';

const Profile = (props) => {
    let user = props.user.login;
    console.log(user);
    console.log(props);
    
    return (

        <div className="user_container">
            <div className="nfo">
                <h2>Данные о ваших мутациях:</h2>
    
                <div>
                <span> Замечание:</span>
                </div>
                <p>Значение 0 в поле мутации означает отсутствие отклонения </p>
                <p>Если у вас одно из полей равно значению 1, это говорит о том, что вам необходимо проконсультироваться с врачом.
                Так как возможно , что у вас обнаружено нежелательная генетическая мутация</p>
                <p>Значение 2, это значение по умолчанию. Ожидайте, в ближайшем времени поле будет заполено администратором</p>
                <p>Также слежует отметить, что если у вас и вашего "партнера", существует одна и та же  нежелательная мутация
                (у одной и тоже мутации стоят единицы), это означает высокую вероятность проявления этой мутации в "плохой" форме у ребёнка данной пары</p>

                <div>
                <span>Ваши результаты:</span>
                </div>
                <p>Мутация N0: {user.rule_0}</p>
                <p>Мутация N1: {user.rule_1}</p>
                <p>Мутация N2: {user.rule_2}</p>
                <p>Мутация N3: {user.rule_3}</p>
                <p>Мутация N4: {user.rule_4}</p>
                <p>Мутация N5: {user.rule_5}</p>
                <p>Мутация N6: {user.rule_6}</p>
                <p>Мутация N7: {user.rule_7}</p>
                <p>Мутация N8: {user.rule_8}</p>
                <p>Мутация N9: {user.rule_9}</p>
                <p>Мутация N10: {user.rule_10}</p>
                <p>Мутация N11: {user.rule_11}</p>
                <p>Мутация N12: {user.rule_12}</p>
                <p>Мутация N13: {user.rule_13}</p>
                <p>Мутация N14: {user.rule_14}</p>
                <p>Мутация N15: {user.rule_15}</p>
                <p>Мутация N16: {user.rule_16}</p>
                <p>Мутация N17: {user.rule_17}</p>
                <p>Мутация N18: {user.rule_18}</p>
                <p>Мутация N19: {user.rule_19}</p>
                <p>Мутация N20: {user.rule_20}</p>
                <p>Мутация N21: {user.rule_21}</p>
                <p>Мутация N22: {user.rule_22}</p>
                <p>Мутация N23: {user.rule_23}</p>
                <p>Мутация N24: {user.rule_24}</p>
                <p>Мутация N25: {user.rule_25}</p>
                <p>Мутация N26: {user.rule_26}</p>
                <p>Мутация N27: {user.rule_27}</p>
                <p>Мутация N28: {user.rule_28}</p>
                <p>Мутация N29: {user.rule_29}</p>
            </div>
        </div>
    );
};

//export default Profile;


function mapStateProps(state) {
    return {
        user:state.user,
        igen:state.igen
    }
}

export default connect(mapStateProps)(Profile);