import React, { useEffect } from "react";
import { useSelector } from 'react-redux'
import { useAuthContext } from "../config/AuthContext";
import { useDispatch } from "react-redux";
import { userSelector } from "../redux/userSlice";
import { createChatSession } from "../redux/chatSlice";

const Users = () => {
  const {users, searchedUsers} = useSelector(userSelector)
  const user= useAuthContext()
  const dispatch = useDispatch()
  const handleSelect = (selectedUserId)=>{
    dispatch(createChatSession({userId: user.uid, selectedUserId}))
  }
 
  return (
    <div className="userChat">
      {searchedUsers.length===0 ? users?.map((u) => (
        <div className="user" key={u.uid} onClick={() => handleSelect(u.uid)}>
          <img src={u.photoURL} alt="searched user" />
          <div className="userChatInfo">
            <span>{u.displayName}</span>
            <p>{u.lastMessege? u?.lastMessege:"Not started yet"}</p>
          </div>
        </div>
      )) : searchedUsers?.map((u) => (
        <div className="user" key={u.uid} onClick={() => handleSelect(u.uid)}>
          <img src={u.photoURL} alt="searched user" />
          <div className="userChatInfo">
            <span>{u.displayName}</span>
            <p>{u?.lastMessege? u?.lastMessege:"Not started yet"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
