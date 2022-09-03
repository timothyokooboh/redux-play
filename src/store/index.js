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

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userStore";

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export default store;
