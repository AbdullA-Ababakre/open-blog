there are some senarios that some states depend on the previous ones and this is the time we have to use useReducder.



````
const [state,dispatchFn] = useReducer(reducerFn,initialState,initFn);
````

- state 
   
   the state snapshot used in the component re-render/re-evalulation cycle.

- dispatchFn
  
  a function that can be used to dispatch a new action(i.e. trigger an update of the state)

- reducerFn
  
   ```
      (prevState,action) => newState
   ```
   A function that is triggered automically once an action is dispatched(via dispatchFn()) - it receives the latest state snapshot and should return the new,updated state.

- initialState
  
  the initial state

- initFn
  
  A function to set the initial state programmatically


### the difference

  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210508144040216.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FidWR1bGFfXw==,size_16,color_FFFFFF,t_70)
