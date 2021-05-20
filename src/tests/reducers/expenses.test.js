import changeExpenseState from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should setup default state', () => {
    const state = changeExpenseState(undefined, { type: '@@INIT' });
    expect(state).toEqual([])
})

test('should add expense', () => {
    const newExpense = { description: 'jan rent' }
    const action = {
        type: 'ADD_EXPENSE',
        expenses: newExpense
    }
    const state = changeExpenseState(expenses, action);
    expect(state).toEqual(expenses.concat(newExpense));
})

test('should remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = changeExpenseState(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '4'
    }
    const state = changeExpenseState(expenses, action);
    expect(state).toEqual(expenses);
})

test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        updates: { amount: 3000 },
        id: expenses[0].id
    }
    const state = changeExpenseState(expenses, action);
    expect(state[0]).toEqual({
        id: '1',
        description: 'rent',
        amount: 3000,
        note: '',
        createdAt: moment(0).add(10, 'day').valueOf()
    });
})

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        updates: { amount: 3000 },
        id: '-1'
    }
    const state = changeExpenseState(expenses, action);
    expect(state).toEqual(expenses);
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = changeExpenseState(expenses, action);
    expect(state).toEqual([expenses[1]]);
})
