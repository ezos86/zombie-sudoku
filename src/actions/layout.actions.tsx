const layout = {
    menuChange: (state: boolean) => {
        return {
            type: 'menuChange',
            data: state
        };
    },
    pathChange: (state: string) => {
        return {
            type: 'pathChange',
            data: state
        };
    },
    resetLayout: () => {
        return {
            type: 'resetLayout'
        };
    }
};

export default layout;
