import { createStore} from "redux";

const reducer = (state = 0, action) => {

    switch (action.type) {
        case 'INC':
            return state + 1;

        case 'DEC':
            return state - 1;

        case 'RND':
            return state + action.payload;

        default:
            return state
    }
};

// init store
const store = createStore(reducer);

// action creators
const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (payload) => ({ type: 'RND', payload });



document
    .getElementById('inc')
    .addEventListener('click', () => {
        store.dispatch(inc())
    });

document
    .getElementById('dec')
    .addEventListener('click', () => {
        store.dispatch(dec())
    });

document
    .getElementById('rnd')
    .addEventListener('click', () => {
        store.dispatch(rnd(Math.floor(Math.random()*10)))
    });

// onChange handler
const update = () => {
    document
        .getElementById('counter')
        .innerText = store.getState()
};

store.subscribe(() => update());
