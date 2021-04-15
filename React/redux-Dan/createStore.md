<!-- https://egghead.io/lessons/react-redux-implementing-store-from-scratch -->

we want to know the implemention of the createStore from scratch.


````
const createStore = (reducer) => {
  let state;
  let listeners = []; // coz,there will be more than one listener
  
  const getState = ()=> state;


  <!-- is the only way to change the state -->
  const dispatch = (action) =>{
      state = reducer(state,action);
      listeners.forEach(listener => listener());
  }


  const subscribe = (listener) =>{
     listeners.push(listener);
     return ()=>{
         listeners = listeners.filter(l=>l!==listener);
     }
  }

  dispatch({});

  return {getState,dispatch,subscibe};
}

````