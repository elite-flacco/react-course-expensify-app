import changeFilterState from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = changeFilterState(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
})

test('should set sortBy to amount', () => {
    const state = changeFilterState(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    }
    const action = { type: 'SORT_BY_DATE' };
    const state = changeFilterState(currentState, action);
    expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'rent' };
    const state = changeFilterState(undefined, action);
    expect(state.text).toBe('rent');
})

test('should set startdate filter', () => {
    const action = { type: 'SET_START_DATE', startDate: moment(0).add(2, 'day') };
    const state = changeFilterState(undefined, action);
    expect(state.startDate).toEqual(moment(0).add(2, 'day'));
})

test('should set enddate filter', () => {
    const action = { type: 'SET_END_DATE', endDate: moment(0).add(10, 'day') };
    const state = changeFilterState(undefined, action);
    expect(state.endDate).toEqual(moment(0).add(10, 'day'));
})