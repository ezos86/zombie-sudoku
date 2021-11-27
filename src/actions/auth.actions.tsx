const auth = {
    authLoad: () => {
        return {
            type: 'authLoad',
        };
    },
    error: () => {
        return {
            type: 'authError',
        };
    },
    login: (data: any) => {
        return {
            type: 'login',
            data,
        };
    },
    logout: () => {
        return {
            type: 'logout',
        };
    },
};

export default auth;
