import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "mitchell", gender: "female" },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload.location;
    },
    setGender(state, action) {
      state.gender = action.payload.gender;
    }
  }
});

export const userActions = userSlice.actions;
export default userSlice;

// thunk
export const addGender = (payload) => {
  return (dispatch) => {
    const addGnederAsynchronously = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          dispatch(userActions.setGender(payload));
        }, 1000);
      });
    };

    addGnederAsynchronously();
  };
};
