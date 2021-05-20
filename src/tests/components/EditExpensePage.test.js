import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, startRemoveExpenses, expense, match, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpenses = jest.fn();
    history = { push: jest.fn() };
    expense = expenses[0];
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            startRemoveExpenses={startRemoveExpenses} 
            expense={expense} 
            history={history} />);
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);

})

test('should handle removeExpense', () => {
    // wrapper.find('button').prop('onClick')();
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpenses).toHaveBeenLastCalledWith({id: expenses[0].id});

})