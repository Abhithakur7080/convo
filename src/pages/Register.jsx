import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import Input from "../components/form/Input";
import { FaUser } from "react-icons/fa";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h1>
          <MdConnectWithoutContact /> Convo <span>live</span>
        </h1>
        <h4 className="title">Register</h4>
        <div className="inputForm">
          <form>
            <label htmlFor="fileUpload" className="fileUpload">
              <div>
              <FaUser />
              </div>
            </label>
            <input type="file" id="fileUpload" style={{display: "none"}}/>
            <Input type="text" label="Full name" id="fullname"/>
            <Input type="email" label="Email address" id="email"/>
            <Input type="password" label="password" id="password"/>
            <button>Sign up</button>
          </form>
          <p>Already have an account? please Login.</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
