import { createSelector } from "@reduxjs/toolkit";
const selectCart = (state) => state.cart;

const totalPriceSelector = createSelector([selectCart], (cart) => {
  return cart.cart.reduce((total, cur) => {
    total += cur.price;
    return total;
  }, 0);
});

export default totalPriceSelector;
