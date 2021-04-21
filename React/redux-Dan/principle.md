


there is a demo code which will demonestrate the method of the store. 


````
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
} 

const { createStore } = Redux;
const store = createStore(counter);


const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});
````


There are some terms in the redux,here in the below code , we can easily understand what they are .

````
const redux = require('redux');
const createStore=redux.createStore;

const initialState={
    counter:0
}

// Reducer
const rootReducer = (state=initialState,action) =>{
    if(action.type === 'INC_COUNTER'){
          return {
              ...state,
              counter:state.counter+1
          }
    }

    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter:state.counter + action.value
        }
    }


    return state;
}

// Store
const store = createStore(rootReducer);
// console.log(store.getState());

// subscribe Actions
store.subscribe(()=>{
    console.log('[subscription',store.getState());
})

// Dispatching Actions
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:5});

// console.log(store.getState());

````

