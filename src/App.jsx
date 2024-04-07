import React from "react";
import Rout from "./routes.jsx/Rout";
import "./style.scss";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Rout />
      <Toaster />
    </>
  );
};
export default App;
