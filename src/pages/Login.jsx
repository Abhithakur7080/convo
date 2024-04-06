import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import Input from "../components/form/Input";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <Layout title={"Convo - login"}>
      <div className="formContainer">
        <div className="formWrapper scale-up-center">
          <h1>
          <img src={logo} width={35} height={35}/> Convo <span>live</span>
          </h1>
          <h4 className="title">Login</h4>
          <div className="inputForm">
            <form>
              <Input type="email" label="Email address" id="email" />
              <Input type="password" label="password" id="password" />
              <button>Login</button>
            </form>
            <p>
              New user? please{" "}
              <Link to={"/register"} style={{ color: "#0f1035" }}>
                Register
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
