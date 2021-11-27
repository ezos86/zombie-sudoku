const gameState = {
    status: null,
    difficulty: 'easy',
};

const game = (state = gameState, action: any) => {
    switch (action.type) {
        case 'setDiff':
            return { ...state, difficulty: action.diff, status: null };
        case 'setStatus':
            return { ...state, status: action.status };
        case 'clearGame':
            return null;
        default:
            return { ...state };
    }
};

export default game;
