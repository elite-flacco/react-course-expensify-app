import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
// import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import selectExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = selectExpenses(state.expenses, state.filter);
//     console.log(visibleExpenses);

// })

// store.dispatch(addExpense( {description: 'water bill', amount: 10} ));
// store.dispatch(addExpense( {description: 'gas bill', createdAt: 1000} ));
// store.dispatch(addExpense( {description: 'rent', amount: 2000} ));
// store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('rent'))
// }, 3000)

// console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

// ReactDOM.render(jsx, document.getElementById('app'));
