const defaultState = [];

const changeExpenseState = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expenses
            ];
            // return state.concat(action.expenses);
        case 'REMOVE_EXPENSE':
            // console.log('removing expense');
            // console.log('id is: ', action.id);
            return state.filter(expense => expense.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state
    }

};

export default changeExpenseState;