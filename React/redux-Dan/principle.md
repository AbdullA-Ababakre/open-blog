### principles in redux

- whether your app is a really simple one like this counter example, or a complex application with a lot of UI, and change of state, you are going to represent the whole state of your application as a single JavaScript object.

- the state is read only

the only way to change the state is by dispatching an action. action is the minimal discription of the change to the data.

- to describe state mutations , u have to write a pure function which receives the previous state and describe the change to the previous state and return a new state.This function is called 'reducer'.


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
````

above pure function counter is the reducer


### connecting the store 

````
const { createStore } = Redux;
const store = createStore(counter);
````

### three funnctions of the store

- getState()

store.getState will get the current state of the counter.

- Dispatch

It lets you dispatch actions to change the state of your application

- subscribe

It lets you register a callback that the Redux chore will call any time an action has been dispatched, so that you can update the UI of your application. It will reflect the current application state.


there is a demo code which will demonestrate the method of the store. 

This store binds together the three principles of Redux. It holds the current application's state object. It lets you dispatch actions. When you create it, you need to specify the reducer that tells how state is updated with actions.



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

