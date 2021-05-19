import { createStore, combineReducers, applyMiddleware } from 'redux';
import changeExpenseState from '../reducers/expenses';
import changeFilterState from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export default () => {
    const store = createStore(
        combineReducers({
            expenses: changeExpenseState,
            filter: changeFilterState
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}