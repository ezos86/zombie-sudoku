const game = {
    setDiff: (diff: string) => {
        return {
            type: 'setDiff',
            diff,
        };
    },
    setStatus: (status: string) => {
        return {
            type: 'setStatus',
            status,
        };
    },
    clearGame: () => {
        return {
            type: 'clearGame',
        };
    },
};

export default game;
