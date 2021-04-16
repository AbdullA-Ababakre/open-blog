````
const Counter = ({ value,onInc,onDec }) => {
  return (
    <div>
       <h1>{value}</h1>
       <button onClick={onInc}>+</button>
       <button onClick={onDec}>-</button>
    </div>
  )
};

const initialState = {
  val: 0,
};

const counter = (state = 0, action) => {
  if (action.type === 'INC') {
    return state+1;
  } else if (action.type === 'DEC') {
    return state-1;
  } else {
    return state;
  }
};

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter 
    value={store.getState()}
    onInc={()=>
       store.dispatch({
         type:'INC'
       })
    }

    onDec={()=>
      store.dispatch({
        type:'DEC'
      })
    }
     />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();

````