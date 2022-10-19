import { useSelector, useDispatch } from "react-redux";
import { userActions } from "./store/userStore";
import { addGender } from "./store/userStore";

const ComponentOne = () => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const gender = state.gender;

  const setGender = () => {
    dispatch(addGender({ gender: "male" }));
  };
  return (
    <>
      <h3>This is component one</h3>
      <div>gender is: {gender}</div>
      <button onClick={setGender}>add gender</button>
    </>
  );
};

export default ComponentOne;
