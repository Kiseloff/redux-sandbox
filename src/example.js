import { createStore} from "redux";

// reducer is a pure function
// you must calculate all payloads outside and pass them as action variable parts
const reducer = (state = 0, action) => {

    switch (action.type) {
        case 'INC':
            return state + 1;

        case 'DEC':
            return state - 1;

        default:
            return state
    }
};

// init store
const store = createStore(reducer);

// onChange handler
store.subscribe(() => {
    console.log(store.getState())
});


store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'DEC'});
