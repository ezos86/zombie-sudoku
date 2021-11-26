const layoutState = {
    menu: true,
};

const layout = (state = layoutState, action: any) => {
    switch (action.type) {
        case 'menuChange':
            return {
                ...state,
                menu: action.data,
            };
        case 'pathChange':
            return {
                ...state,
                path: action.data,
            };
        case 'resetLayout':
            return layoutState;
        default:
            return { ...state };
    }
};

export default layout;
