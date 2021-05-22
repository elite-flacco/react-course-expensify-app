import { createStore } from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
})

test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
})

test('Should return edit expense action object', () => {
    const action = editExpense('123a', { description: 'rent' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123a',
        updates: { description: 'rent' }
    })
})

test('Should set up new expense action object!', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'mouse',
        amount: 20,
        note: '',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expenses: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
})

test('should add expense with defaults to database and store', () => {
    const store = createMockStore(defaultAuthState);
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expenses: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
})

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

// test('Should set up new expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expenses: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })
// })