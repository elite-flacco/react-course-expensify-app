import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

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

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;  
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // console.log('uid', user.uid);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });        
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

// ReactDOM.render(jsx, document.getElementById('app'));
