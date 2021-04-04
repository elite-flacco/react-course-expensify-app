import { createStore } from 'redux';

// Action generators - functions that return action objects
// const incrementCount = (payload = {}) => ({
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    // incrementBy: incrementBy
    incrementBy
});

const decreaseCount = ({ decreaseBy = 1 } = {}) => ({
    type: 'DECREASE',
    decreaseBy
})

const resetCount = () => ({
    type: 'RESET',
    count: 100
})

const setCount = ( { count = 0} ) => ({
    type: 'SET',
    count
})

// Reducers
// 1. Reducers are pure functions - output are purely decided by inputs
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            // return {
            //     count: state.count + incrementBy
            // }
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREASE':
            return {
                count: state.count - action.decreaseBy
            }
        case 'RESET':
            return {
                count: action.count
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});



// Actions - an object that gets sent to the store
// Uppercase for redux action convention
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
// store.dispatch({
//     type: 'DECREASE'
// });
// store.dispatch({
//     type: 'RESET'
// })
// store.dispatch({
//     type: 'DECREASE',
//     decreaseBy: 10
// });
// store.dispatch({
//     type: 'SET',
//     count: 101
// })

store.dispatch(incrementCount( { incrementBy: 5 } ));
store.dispatch(incrementCount());
store.dispatch(decreaseCount());
store.dispatch(resetCount());
store.dispatch(decreaseCount( { decreaseBy: 11 }));
store.dispatch(setCount( { count: 2 } ));


