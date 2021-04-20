## Redux

### what is Redux

Redux is a predictable state container for JavaScript apps. To rephrase that, it’s an application data-flow architecture, rather than a traditional library or a framework like Underscore.js and AngularJS.Redux maintains the state of an entire application in a single immutable state tree (object), which can’t be changed directly. When something changes, a new object is created (using actions and reducers). you can use it with any other JavaScript framework or library. It’s lightweight at 2KB (including dependencies), so you don’t have to worry about it making your application’s asset size bigger.


### Why we need Redux

at first, let's assume a context,we want to make a login  logout function,and there is a state indicating the state of the user logging status.And we want to get this state in many components,so far ,we know props,but it is one way data transfering. So we need to create a sort of global state where the state can be updated and persists to all other components . 

### When to use it

The below pic summarized when we have to use Redux.To sum,there are some states we need to use in many components and it is too complicatd to do with props（transfering from parent to child ,from child to grandchild...)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210220151147895.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)

for some local UI state , we do not need to use Redux ,but for some states that will be used in more than one props ,it is better to use Redux.

### How Redux work

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210217170006152.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)


### pricipals of Redux

- whether your app is a really simple one like this counter example, or a complex application with a lot of UI, and change of state, you are going to represent the whole state of your application as a single JavaScript object.

- the state is read only

    the only way to change the state is by dispatching an action. action is the minimal discription of the change to the data.

    below,some of the examples of how to change the sate without mutating the old state.
   
   - #### Array

````
/*
 * Open the console to see
 * that all tests have passed.
 */

const addCounter = (list) => {
  return [...list, 0];
};

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];
  
  deepFreeze(listBefore);
  
  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];
  
  deepFreeze(listBefore);
  
  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];
  
  deepFreeze(listBefore);
  
  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();

console.log('All tests passed.') || displayInPreview('All tests passed.');
 ````

- #### Object

There are two ways to change the object without mutations. Like Object.assign and es7 seperate operator.

````
/*
 * Open the console to see
 * that the tests have passed.
 */

const toggleTodo = (todo) => {
  return {
    ...todo,
    completed: !todo.completed
  };
};

const toggleTodo = (todo) => {
  return Object.assign({},todo,{
      completed:!todo.completed
  })
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };
  
  deepFreeze(todoBefore);
  
  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();
console.log('All tests passed.') || displayInPreview('All tests passed.');
````

- to describe state mutations , you have to write a pure function which receives the previous state and describe the change to the previous state and return a new state.This function is called 'reducer'.

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

above pure function counter is the reducer.

### Some terms

- Reducer
  
- Action
  
  The minimal descrition of the change to the state.

- Store

    #### connecting the store 

    This store binds together the three principles of Redux. It holds the current application's state object. It lets you dispatch actions. When you create it, you need to specify the reducer that tells how state is updated with actions.

````
const { createStore } = Redux;
const store = createStore(counter);
````

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
















