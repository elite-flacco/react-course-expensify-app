import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expenseTotal={2345} />);
    expect(wrapper).toMatchSnapshot();
});
