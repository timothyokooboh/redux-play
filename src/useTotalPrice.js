import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const useTotalPrice = () => {
  const selectCart = (state) => state.cart;

  const totalPriceSelector = createSelector([selectCart], (cart) => {
    return cart.cart.reduce((total, cur) => {
      total += cur.price;
      return total;
    }, 0);
  });

  return totalPriceSelector;
};
