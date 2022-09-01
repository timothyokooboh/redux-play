import { useSelector, useDispatch } from "react-redux";
const ComponentTwo = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { count } = state;
  const add = () => {
    dispatch({ type: "add", payload: 2 });
  };
  const minus = () => {
    dispatch({ type: "minus", payload: 2 });
  };
  return (
    <>
      <h3>This is component two</h3>
      <div> count is: {count} </div>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </>
  );
};

export default ComponentTwo;
