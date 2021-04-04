import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ( {id} = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = ( filter = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text: filter
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = ( startDate ) => ({
    type: 'SET_START_DATE',
    startDate
})
// SET_END_DATE
const setEndDate = ( endDate ) => ({
    type: 'SET_END_DATE',
    endDate
})

const defaultState = []
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

const defaultFilterState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const changeFilterState = (state = defaultFilterState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }

};

// Get visible expenses
const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = !text || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b ) => {
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

const store = createStore(
    combineReducers({
        expenses: changeExpenseState,
        filter: changeFilterState
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpense(state.expenses, state.filter);
    console.log(visibleExpenses);

})

const expenseOne = store.dispatch(addExpense({ description: 'jan rent', amount: 1000, createAt: -5000}));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 4, createAt: 100}));

// store.dispatch(removeExpense( {id: expenseOne.expenses.id} ));
// store.dispatch(editExpense( expenseTwo.expenses.id, { amount: 20 } ));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(-125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(23));
// store.dispatch(setEndDate());
// console.log(expenseOne);

const demoState = {
    expenses: [{
        id: '3223432',
        description: 'jan rent',
        note: 'this was january rent',
        amount: 2000,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};


// const user = {
//     name: 'shuang',
//     age: 34
// }

// console.log({
//     ...user,
//     location: 'nyc',
//     age:25
// });

