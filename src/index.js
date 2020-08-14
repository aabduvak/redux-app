import {createStore} from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC': 
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RES':
      return state = 0;
    default:
      return state;
  };
};

const store = createStore(reducer);

const inc = () => ({type: 'INC'});
const res = () => ({type: 'RES'});
const dec = () => ({type: 'DEC'});
document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
})
document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
})
document.getElementById('res').addEventListener('click', () => {
  store.dispatch(res());
})

const update = () => {
  document.getElementById('counter').textContent = store.getState()
}
store.subscribe(update);
