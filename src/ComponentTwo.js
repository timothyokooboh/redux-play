import { useSelector, useDispatch } from "react-redux";
import { useTotalPrice } from "./useTotalPrice";

const ComponentTwo = ({ totalPrice }) => {
  const state = useSelector((state) => state.cart);
  const cart = state.cart;

  console.log("rerender");

  return (
    <>
      <h3>This is component two</h3>
      {cart.map((item, idx) => (
        <div key={idx}>
          <div>
            <span>Item: {item.item}</span>
            <span>Price: {item.price}</span>
          </div>
        </div>
      ))}

      <h4>Total price: {totalPrice}</h4>
    </>
  );
};

export default ComponentTwo;
