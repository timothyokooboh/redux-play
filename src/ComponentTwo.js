import { useSelector, useDispatch } from "react-redux";
const ComponentTwo = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h3>This is component two</h3>
    </>
  );
};

export default ComponentTwo;
