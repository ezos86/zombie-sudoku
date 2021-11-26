const userState = {
    loaded: false,
    data: {},
};

const user = (state = userState, action: any) => {
    switch (action.type) {
        case 'loadUser':
            return { ...state, data: action.data, loaded: true };
        case 'clearUser':
            return null;
        default:
            return { ...state };
    }
};

export default user;
