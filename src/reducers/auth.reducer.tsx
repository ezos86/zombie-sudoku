const authState = {
    loaded: false,
};

const auth = (state = {}, action: any) => {
    switch (action.type) {
        case 'authLoad':
            return { ...state, status: 'loading' };
        case 'authError':
            return { ...state, status: 'error', error: action.data };
        case 'login':
            return {
                ...state,
                uuid: action.data.uuid,
                token: action.data.token,
                status: 'loaded',
            };
        case 'logout':
            return authState;
        default:
            return { ...state };
    }
};

export default auth;
