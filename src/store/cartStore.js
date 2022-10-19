import { createSlice } from "@reduxjs/toolkit";

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
  }
});

export default cartSlice;
