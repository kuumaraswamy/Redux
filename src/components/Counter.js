// import { Component } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/Counter';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const Counter=useSelector((state) =>state.counter.counter)
  const show = useSelector((state) => state.counter.showCounter)

 
  const IncrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const IncreseHandler = () => {
    dispatch(counterActions.increse(5));
  }

  const DecrementHandler = () => {
      dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {Counter} </div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={IncreseHandler}>IncrementBy 5</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

// class Counter extends Component {

//   IncrementHandler()  {
//     this.props.increment()
//   }

//   DecrementHandler() {
//     this.props.decrement()
//   }

//   toggleCounterHandler() {}

//   render(){
//     return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.IncrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.DecrementHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     )
//   }

// }

// const mapStateToProps = state =>{
//   return{
//     counter:state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps) (Counter);
