import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    return (
        <div className="page-header">
            <div className="content-container">
                <h3 className="page-header__title">There are <span>{expenseCount}</span> expenses. Sum of the expenses is <span>{numeral(expenseTotal).format('$0,0.00')}</span></h3>
                <div className="page-header__actions">
                <Link to="/create" className="button">Add Expense</Link>
                </div>
            </div>
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