const SelectionReducer = (state = -1, action) => {
    if (action.type === 'SELECT_LIBRARY') {
        state = action.payload;
        return state;
    } else {
        return state;
    }
};

export default SelectionReducer;
