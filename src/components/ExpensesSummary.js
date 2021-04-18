import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expenseTotal}) => {
    return (
        <div>
            <p>There are {expenseCount} expenses</p>
            <p>Sum of the expenses is {numeral(expenseTotal).format('$0,0.00')}</p>
        </div>

    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filter);

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    }
    
}

export default connect(mapStateToProps)(ExpensesSummary);