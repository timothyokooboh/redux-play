import ComponentOne from "./ComponentOne";
import ComponentTwoContainer from "./ComponentTwoContainer";
import { Provider } from "react-redux";
import store from "./store/index";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ComponentOne />
        <ComponentTwoContainer />
      </Provider>
    </div>
  );
}
