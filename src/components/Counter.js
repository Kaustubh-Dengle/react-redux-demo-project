import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  function handleIncrement() {
    dispatch({ type: "increment" });
  }

  function handleIncreaseby5() {
    dispatch({ type: "increase", amount: 5 });
  }

  function handleDecrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncreaseby5}>Increase by 5</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
