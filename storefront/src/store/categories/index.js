const initialState = {
    categories: [
        { name: 'electronics', displayName: 'Electronics' },
        { name: 'food', displayName: 'Food' },
        { name: 'clothing', displayName: 'Clothing' },
    ],
    activeCategory: ''
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

export const changeCategory = (category) => {
    return {
        type: 'CHANGE_CATEGORY',
        payload: category,
    }
}

export const reset = () => {
    return {
        type: 'RESET',
        payload: {}
    }
}

export default categoriesReducer;