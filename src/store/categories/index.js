const initialState = {
    categories: [
        { name: 'electronics', displayName: 'Electronics' },
        { name: 'food', displayName: 'Food' },
        { name: 'clothing', displayName: 'Clothing' },
    ],
    activeCategory: '',
};

function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_CATEGORY':
            return {
                ...state,
                activeCategory: action.payload,
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export default categoriesReducer;