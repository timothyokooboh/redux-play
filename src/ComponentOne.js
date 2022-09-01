import { useSelector, useDispatch } from "react-redux";

const ComponentOne = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { count } = state;
  const add = () => {
    dispatch({ type: "add", payload: 5 });
  };
  const minus = () => {
    dispatch({ type: "minus", payload: 5 });
  };
  return (
    <>
      <h3>This is component one</h3>
      <div>count is: {count}</div>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </>
  );
};

export default ComponentOne;
