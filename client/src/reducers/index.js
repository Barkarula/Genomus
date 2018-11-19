import { combineReducers } from 'redux';
import books from './books_reducer';
import user from './user_reducer';
import gen from './gen_reducer';
import igen from './igen_reducer';

const rootReducer = combineReducers({
    books,
    user,
    gen,
    igen
});

export default rootReducer;