import React, { useEffect, useState } from "react";
import { useAuthContext } from "../config/AuthContext";
import { useFirestore } from "../config/Build/firestore";

const Chats = ({ searchedUser }) => {
  const [users, setUsers] = useState([]);
  const user = useAuthContext();
  const store = useFirestore();
  const allusers = (e) => {
    return new Promise((resolve, reject) => {
      store
        .getAllDocsFromFirestore("users")
        .then((data) => data.filter((u) => u.uid !== user.uid))
        .then((data) => {
          setUsers(data);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  const handleSelect = (selectedUser) => {
    
  }
  useEffect(() => {
    allusers();
  }, []);
  return (
    <div className="userChat">
      {searchedUser && (
        <h5
          style={{
            textAlign: "center",
            borderBottom: "1px solid #0f1035",
            padding: "5px 0",
            backgroundColor: "lightgray"
          }}
        >
          Searched Users
        </h5>
      )}
      {searchedUser?.length === 0 && (
        <h3 style={{ textAlign: "center" }}>User not found</h3>
      )}
      {searchedUser &&
        searchedUser.map((user) => (
          <div className="user" key={user.uid}>
            <img src={user.photoURL} alt="searched user" />
            <div className="userChatInfo">
              <span>{user.displayName}</span>
              <p>Last message</p>
            </div>
          </div>
        ))}
      {searchedUser && <hr />}
      <h5
        style={{
          textAlign: "center",
          borderBottom: "1px solid #0f1035",
          padding: "5px 0",
          backgroundColor: "lightgray"
        }}
      >
        All Users
      </h5>
      {users.map((u) => (
        <div className="user" key={u.uid}>
          <img src={u.photoURL} alt="searched user" />
          <div className="userChatInfo">
            <span>{u.displayName}</span>
            <p>Last message</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
