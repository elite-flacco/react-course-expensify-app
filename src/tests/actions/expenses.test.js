import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Should set up remove expense action object', () => {
    const action = removeExpense( {id: '123abc'} );
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
})

test('Should return edit expense action object', () => {
    const action = editExpense( '123a', {description: 'rent'} );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123a',
        updates: {description: 'rent'}
    })
})

test('Should set up new expense action object!', () => {
    const expenseData = { description: 'rent', note: 'test', amount: 1000, createdAt: 2000 }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should set up new expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})