import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import { Component } from 'react'
import { couterActions } from '../store/counterReducer'


const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter)
  console.log("counter",counter);

  const show = useSelector(state => state.counter.show);

  const incrementHandler = () => {
    dispatch(couterActions.INCREMENT());
  }

  const incrsetHandler = () => {
    dispatch(couterActions.INCRESE(5));
  }

  const discrementHandler = () => {
    dispatch(couterActions.DECREMENT())
  }

  const toggleCounterHandler = () => {
    dispatch(couterActions.TOGGLE());
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={incrsetHandler}>INCREMENT</button>
        <button onClick={discrementHandler}>DECEREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};



//  class 用法  有mapStateToProps mapDispatchToProps等映射性用法
// class Counter extends Component {
//   incrementHandler = () => {
//     // dispatch({type:'INCREMENT'});
//     this.props.increment();
//   }

//   incresetHandler = () => {
//     this.props.increse();
//   }

//   discrementHandler = () => {
//     // dispatch({type:'DECREMENT'})
//     this.props.decrement();
//   }

//   toggleCounterHandler = () => { };

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>INCREMENT</button>
//           <button onClick={this.incresetHandler.bind(this)}>INCRSEBYFIVE</button>
//           <button onClick={this.discrementHandler.bind(this)}>DECEREMENT</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     )
//   }
// }


// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => { dispatch({ type: 'INCREMENT' }) },
//     increse: () => { dispatch({ type: 'INCRESE',amount:5 }) },
//     decrement: () => { dispatch({ type: 'DECREMENT' }) }
//   }
// }



// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;