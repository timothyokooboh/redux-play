import { createSlice } from "@reduxjs/toolkit";
import { userActions } from "./userStore";

const cart = [
  {
    price: 210,
    item: "bread"
  },
  {
    price: 140,
    item: "book"
  }
];

const cartSlice = createSlice({
  name: "productSlice",
  initialState: {
    cart
  },
  extraReducers: (builder) => {
    builder.addCase(userActions.setGender, (state, action) => {
      if (action.payload.gender === "male") {
        state.cart.push({ price: 699, item: "pocolee" });
      }
    });
  }
});

export default cartSlice;
