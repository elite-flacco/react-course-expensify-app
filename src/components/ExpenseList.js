import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map((expense) => (
                <ExpenseListItem key={expense.id} {...expense}/>
                // <ExpenseListItem key={expense.id} description={expense.description}/>
            )))
        }
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