import React from "react";
import Rout from "./routes.jsx/Rout";
import "./style.scss";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Rout />
      <Toaster />
    </Provider>
  );
};
export default App;
