import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import Input from "../components/form/Input";
import { FaUser } from "react-icons/fa";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Register = () => {
  return (
    <Layout title={"Convo - Register"}>
      <div className="formContainer">
        <div className="formWrapper scale-up-center">
          <h1>
          <img src={logo} width={35} height={35}/> Convo <span>live</span>
          </h1>
          <h4 className="title">Register</h4>
          <div className="inputForm">
            <form>
              <label htmlFor="fileUpload" className="fileUpload">
                <div>
                  <FaUser />
                </div>
              </label>
              <input type="file" id="fileUpload" style={{ display: "none" }} />
              <Input type="text" label="Full name" id="fullname" />
              <Input type="email" label="Email address" id="email" />
              <Input type="password" label="password" id="password" />
              <button>Sign up</button>
            </form>
            <p>Already have an account? please <Link to={"/login"} style={{color: "#0f1035"}}>Login</Link>.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
