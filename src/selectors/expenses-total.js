const selectExpensesTotal = (expenses) => {

    // expensesAmount = expenses.map((expense) => expense.amount);
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    
};

export default selectExpensesTotal;