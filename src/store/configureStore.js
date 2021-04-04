import { createStore, combineReducers } from 'redux';
import changeExpenseState from '../reducers/expenses';
import changeFilterState from '../reducers/filters';


export default () => {
    const store = createStore(
        combineReducers({
            expenses: changeExpenseState,
            filter: changeFilterState
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}