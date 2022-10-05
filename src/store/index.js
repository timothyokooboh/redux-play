// import { createStore } from "redux";

// const initialState = { count: 0 };

// const reducerFn = (state = initialState, action) => {
//   if (action.type === "add") {
//     return { count: state.count + (action.payload || 1) };
//   } else if (action.type === "minus") {
//     return { count: state.count - (action.payload || 1) };
//   }

//   return state;
// };

// export const store = createStore(reducerFn);

/**
  RULES OF REDUCER
  
  1. Must accept state and action params
  2. state must have a default value
  3. action must have a type property
  4. must return state by default
*/

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userStore";

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export default store;
