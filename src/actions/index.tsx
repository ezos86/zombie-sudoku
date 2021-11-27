import authActions from './auth.actions';
import userActions from './user.actions';
import layoutActions from './layout.actions';
import gameActions from './game.actions';

const actions = {
    layout: layoutActions,
    auth: authActions,
    user: userActions,
    game: gameActions,
};

export default actions;
