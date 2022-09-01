import { createStore } from "redux";

const initialState = { count: 0 };
const reducerFn = (state = initialState, action) => {
  if (action.type === "add") {
    return { count: state.count + (action.payload || 1) };
  } else if (action.type === "minus") {
    return { count: state.count - (action.payload || 1) };
  }

  return state;
};

const store = createStore(reducerFn);
export default store;
