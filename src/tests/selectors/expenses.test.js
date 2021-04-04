import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('Should filter by text value', () => {
    const filter = { 
        text: 'rent',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([expenses[0]]);
})

test('Should filter by start date', () => {
    const filter = { 
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([expenses[0], expenses[2]]);
})

test('Should filter by end date', () => {
    const filter = { 
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(5, 'day')
    }
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([expenses[2], expenses[1]]);
})

test('Should sort by date', () => {
    const filter = { 
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
})

test('Should sort by amount', () => {
    const filter = { 
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([...expenses]);
})