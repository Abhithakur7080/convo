import React, { useState, lazy, Suspense } from "react";
import { IoIosSearch } from "react-icons/io";
import { useFirestore } from "../config/Build/firestore";
import { useAuthContext } from "../config/AuthContext";

const Chats = lazy(() => import("./Chats"));

const Search = () => {
  const [username, setUsername] = useState("");
  const [searchedUser, setSearchedUser] = useState(null);

  const store = useFirestore();



  const handleKey = (e) => {
    return new Promise((resolve, reject) => {
      if (e.key === "Enter") {
        e.preventDefault();
        store
          .getMultipleDocsFromFirestore("users", "displayName", username)
          .then((data) => {
            setSearchedUser(data);
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        resolve();
      }
    });
  };



  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="search friends here..."
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span>
          <IoIosSearch />
        </span>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Chats username={username} searchedUser={searchedUser} />
      </Suspense>
    </div>
  );
};

export default Search;
