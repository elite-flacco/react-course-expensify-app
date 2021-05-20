import uuid from 'uuid';
import database from '../firebase/firebase';

// component calls actin generator
// action generator returns object
// component dispatches object
// redux store changes

export const addExpense = (expenses) => ({
    type: 'ADD_EXPENSE',
    expenses
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt }
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpenses = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref('expenses/' + id).remove().then(() => {
            dispatch(removeExpense( { id } ));
        })
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// 1. fetch all expenses once
// 2. parse that data into an array
// 3. dispatch SET_EXPENSES
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        })
        // return database.ref('expenses').push(expense).then((ref) => {
        //     dispatch(addExpense({
        //         id: ref.key,
        //         ...expense
        //     }))
        // });
    };
};