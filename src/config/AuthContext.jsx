import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "./firebase";

const authContext = createContext();

const useAuthContext = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      navigate("/");
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <authContext.Provider value={user}>{children}</authContext.Provider>;
};

export { useAuthContext, AuthContextProvider };
