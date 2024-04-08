import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "./userSlice";
import { useAuthContext } from "../config/AuthContext";

const toolContext = createContext();

const ToolContextProvider = ({ children }) => {
  const user = useAuthContext();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers(user.uid));
  }, [dispatch, user.uid]);
  return <toolContext.Provider value={{}}>{children}</toolContext.Provider>;
};

export { ToolContextProvider };
