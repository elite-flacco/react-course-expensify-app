import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import changeExpenseState from '../reducers/expenses';
import changeFilterState from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export default () => {
    const store = createStore(
        combineReducers({
            expenses: changeExpenseState,
            filter: changeFilterState,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}