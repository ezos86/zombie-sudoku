import authActions from './auth.actions';
import userActions from './user.actions';
import layoutActions from './layout.actions';

const actions = {
    layout: layoutActions,
    auth: authActions,
    user: userActions
};

export default actions;
