import React, { useState } from "react";
import Input from "../components/form/Input";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import toast from "react-hot-toast";
import { useAuth } from "../config/Build/authentication";
import { useStorage } from "../config/Build/storage";
import { useFirestore } from "../config/Build/firestore";
import { useRealtimeDatabase } from "../config/Build/realtimedatabase";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const data = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const clearInputdata = () => {
    setUserData({
      email: "",
      password: "",
    });
  };
  //firebase hooks
  const auth = useAuth();
  const storage = useStorage();
  const store = useFirestore();
  const database = useRealtimeDatabase();
  const handleSubmit = (e) => {
    e.preventDefault();
    let user;
    auth
      .loginUserWithEmailAndPassword(userData.email, userData.password)
      .then((data) => {
        user = data.user;
      })
      .then((e) => clearInputdata(e))
      .catch((error) => {
        console.log(error.message);
        if (error.message && error.message.includes("invalid-")) {
          toast.error("Incorrect email/password");
          return;
        }
      });
  };
  return (
    <Layout title={"Convo - login"}>
      <div className="formContainer">
        <div className="formWrapper scale-up-center">
          <h1>
            <img src={logo} width={35} height={35} /> Convo <span>live</span>
          </h1>
          <h4 className="title">Login</h4>
          <div className="inputForm">
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                label="Email address"
                id="email"
                name="email"
                value={userData.email}
                onChange={data}
              />
              <Input
                type="password"
                label="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={data}
              />
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
