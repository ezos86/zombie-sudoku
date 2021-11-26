import { combineReducers } from 'redux';
import layout from './layout.reducer';
import auth from './auth.reducer';
import user from './user.reducer';

export default combineReducers({
    layout,
    auth,
    user,
});
