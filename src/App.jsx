import React from "react";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <Layout>
      {/* <Register /> */}
      {/* <Login/> */}
      <Home/>
    </Layout>
  );
};

export default App;
