import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item--message">
                        <span>No Expenses</span>
                    </div>

                ) : (
                    props.expenses.map((expense) => (
                        <ExpenseListItem key={expense.id} {...expense} />
                        // <ExpenseListItem key={expense.id} description={expense.description}/>
                    )))
            }
        </div>
    </div>
)

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList);

// export default ConnectedExpenseList;

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses,
//         filter: state.filter
//     };
// };

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filter),
    };
};


export default connect(mapStateToProps)(ExpenseList);