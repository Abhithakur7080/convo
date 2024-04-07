import React, { useState } from "react";
import Layout from "../components/Layout";
import Input from "../components/form/Input";
import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../config/Build/authentication";
import { useStorage } from "../config/Build/storage";
import { useFirestore } from "../config/Build/firestore";
import { useRealtimeDatabase } from "../config/Build/realtimedatabase";

const Register = () => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const [photoURL, setPhotoURL] = useState("");
  const data = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const clearInputdata = () => {
    setUserData({
      displayName: "",
      email: "",
      password: "",
    });
    setPhotoURL("");
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
      .signupUserWithEmailAndPassword(userData.email, userData.password)
      .then((data) => {
        if (data.message && data.message.includes("email-already-in-use")) {
          toast.error("Email already exists! Please login.");
          return Promise.reject("Email already exists");
        }
        user = data.user;
        return storage.uploadFile(`users/${user.uid}/${user.email}`, photoURL);
      })
      .then((url) => {
        return auth.updateAuthenticatedUserData({
          photoURL: url,
        });
      })
      .then(() => {
        return store.setDataToFirestoreRef("users", user.uid, {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      })
      .then(() => {
        return database.putData(`users/${user.uid}`, {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      })
      .then(() => {
        clearInputdata(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout title={"Convo - Register"}>
      <div className="formContainer">
        <div className="formWrapper scale-up-center">
          <h1>
            <img src={logo} width={35} height={35} /> Convo <span>live</span>
          </h1>
          <h4 className="title">Register</h4>
          <div className="inputForm">
            <form onSubmit={handleSubmit}>
              <label htmlFor="fileUpload" className="fileUpload">
                <div>
                  <FaUser />
                </div>
              </label>
              <input
                type="file"
                onChange={(e) => setPhotoURL(e.target.files[0])}
                id="fileUpload"
                style={{ display: "none" }}
              />
              <Input
                type="text"
                label="Full name"
                id="fullname"
                name="displayName"
                value={userData.displayName}
                onChange={data}
              />
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
              <button onClick={handleSubmit}>Sign up</button>
            </form>
            <p>
              Already have an account? please{" "}
              <Link to={"/login"} style={{ color: "#0f1035" }}>
                Login
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
