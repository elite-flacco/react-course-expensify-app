import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filter={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setEndDate={setEndDate}
            setStartDate={setStartDate}/>);
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt date correctly', () => {
    wrapper.setProps({
        filter: altFilters
    });
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    wrapper.find('input').prop('onChange')({target: {value: 'rent'}});
    expect(setTextFilter).toHaveBeenLastCalledWith('rent');
})

test('should sort by date', () => {
    wrapper.find('select').prop('onChange')({target: {value: 'date'}});
    expect(sortByDate).toHaveBeenCalled();
})

test('should sort by amount', () => {
    wrapper.find('select').prop('onChange')({target: {value: 'amount'}});
    expect(sortByAmount).toHaveBeenCalled();
})

test('should handle date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate: altFilters.startDate, endDate: altFilters.endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
})

test('should handle date focus changes', () => {
    wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');
    expect(wrapper.state('calendarFocused')).toEqual('startDate');
})