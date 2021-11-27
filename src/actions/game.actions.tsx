const user = {
    loadUser: (data: any) => {
        return {
            type: 'loadUser',
            data,
        };
    },
    clearUser: () => {
        return {
            type: 'clearUser',
        };
    },
    menu: () => {
        return {
            type: 'menu',
        };
    },
};

export default user;
