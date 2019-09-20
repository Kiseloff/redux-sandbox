import { createStore} from "redux";
import { inc, dec, rnd } from './actions';
import reducer from './reducer';

// init store
const store = createStore(reducer);


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
