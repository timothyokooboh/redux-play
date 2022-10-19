import { connect } from "react-redux";
import ComponentTwo from "./ComponentTwo";
import totalPriceelector from "./selector";

const mapStateToProps = (state) => {
  return {
    totalPrice: totalPriceelector(state)
  };
};

const ComponentTwoContainer = connect(mapStateToProps)(ComponentTwo);

export default ComponentTwoContainer;
