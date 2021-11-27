const game = {
    loadGame: (data: any) => {
        return {
            type: 'loadUser',
            data,
        };
    },
    clearGame: () => {
        return {
            type: 'clearUser',
        };
    },
    game: () => {
        return {
            type: 'menu',
        };
    },
};

export default game;
