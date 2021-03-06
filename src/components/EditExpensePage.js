import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense, startRemoveExpenses, startEditExpenses } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpenses(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onClick = () => {
        this.props.startRemoveExpenses({ id: this.props.expense.id });
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h2 className="page-header__title">Edit Expense</h2>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button--secondary" onClick={this.onClick}>Remove Expense</button>
                </div>
            </div>
        )
    };
}
// const EditExpensePage = (props) => {
//     console.log(props);
//     return (
//         <div>
//             Editing the expense with the id of {props.expense.id}
//             <ExpenseForm
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     props.dispatch(editExpense(props.expense.id, expense));
//                     props.history.push('/');
//                 }}    
//             />
//             <button onClick={() => {
//                 props.dispatch(removeExpense( {id: props.expense.id} ));
//                 props.history.push('/');
//             }}>Remove</button>
//         </div>
//     )
// }

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }

}

const mapDispatchToProps = (dispatch) => ({
    startEditExpenses: (id, expense) => dispatch(startEditExpenses(id, expense)),
    startRemoveExpenses: (id) => dispatch(startRemoveExpenses(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);